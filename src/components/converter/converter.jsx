import React, {useState} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {
  splitDate,
  minDay,
  today,
  todayFormatted,
  isRateAlreadyDownloaded
} from '../../utils/utils';
// import {calculation, calculate} from '../../utils/calculation'
import {fetchRates} from '../../store/api-action';
import ErrorMessage from '../error-message/error-message';
import {
  Rate,
  ConvertionDirection,
  ConversionFields
} from '../../const';

const Converter = (props) => {
  const {rates, onLoadData, isLoadFailed} = props;
  const [converstionForm, setConversionForm] = useState({
    leftValue: null,
    leftCurrency: `RUB`,
    rightValue: null,
    rightCurrency: `RUB`,
    date: todayFormatted
  });

  const getCurrencyOptionsList = () => {
    return Object.keys(Rate).map((rate) => 
     <option value={rate} key={rate}>{rate}</option>
    )
  }

  const isErrorMessageToBeShown = () => {
    if (isLoadFailed) {
      return <ErrorMessage />
    }
    return ``
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    doConversion(name, value);
  }

  const doConversion = (inputName, inputValue) => {
    // debugger
    const direction = getDirection(inputName);
    const sourceData = getSources(inputName, inputValue);
    const targetCurrency = getTargetCurrency(direction);
    const sourceRate = getRate(sourceData.currency);
    const targetRate = getRate(targetCurrency);
    const targetValue = calculate(sourceData.value, sourceData.currency, targetCurrency, sourceRate, targetRate)

    saveValues(direction, targetValue, inputValue);
  }

  const getDirection = (inputName) => {
    if (inputName === ConversionFields.LEFT_CURRENCY || inputName === ConversionFields.LEFT_VALUE) {
      return ConvertionDirection.LEFT_TO_RIGHT
    }
    return ConvertionDirection.RIGHT_TO_LEFT
  }

  const getSources = (inputName, inputValue) => {
    switch (inputName) {
      case ConversionFields.LEFT_VALUE:
        return {
          value: inputValue,
          currency: converstionForm.leftCurrency
        };
      case ConversionFields.LEFT_CURRENCY:
        return {
          value: converstionForm.leftValue,
          currency: inputValue
        };
      case ConversionFields.RIGHT_VALUE:
        return {
          value: inputValue,
          currency: converstionForm.rightCurrency
        };
      case ConversionFields.RIGHT_CURRENCY:
        return {
          value: converstionForm.rightValue,
          currency: inputValue
        };

    }
  };

  const getTargetCurrency = (direction) => {
    if (direction === ConvertionDirection.LEFT_TO_RIGHT) {
      return converstionForm.rightCurrency;
    } 
    return converstionForm.leftCurrency;
  };

  const getRate = (currency) => {
    const currentDate = converstionForm.date;
    let requestedRate = ``;

    rates.some((rate) => {
      if (Object.values(rate)[0] === currentDate) {
        const currentRates = rate.rates;
        requestedRate = currentRates[currency];
      }
    });
    return requestedRate;
  }

  const calculate = (sourceValue, sourceCurrency, targetCurrency, sourceRate, targetRate) => {

    if (sourceCurrency === targetCurrency) {
      return sourceValue;
    }

    const rubValue = sourceValue * sourceRate
    const convertedValue = rubValue / targetRate
  
    return convertedValue;
  }

  const saveValues = (direction, targetValue, inputValue) => {
    if (direction === ConvertionDirection.LEFT_TO_RIGHT) {
      setConversionForm({
        ...converstionForm,
        rightValue: targetValue,
        leftValue: inputValue
      });
    } else {
      setConversionForm({
        ...converstionForm,
        leftValue: targetValue,
        rightValue: inputValue
      });
    }
  }

  // return rates.some((rate) => {
  //   const downloadedDate = (Object.values(rate))[0];
  //   return downloadedDate === selectedDate;


  const handleDateChange = (value) => {
    console.log(value)
    setConversionForm({
      ...converstionForm,
      date: value
    })
    // console.log(rates.converstionForm.date)
  }

  return (
    <section className="main__converter converter">
      <h2 className="converter__heading">Конвертер валют</h2>
      <form className="converter__convert-form convert-form" method="#">
        <div className="convert-form__source-container convert-container">
          <label className="convert-container__label" htmlFor="left-value" >У меня есть</label>
          <input 
            className="convert-container__value" 
            id="left-value" 
            name={ConversionFields.LEFT_VALUE} 
            type="number"
            value={converstionForm.leftValue}
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="left-currency">Выбрать текущую валюту</label>
          <select 
            className="convert-container__currency" 
            id="left-currency" 
            name={ConversionFields.LEFT_CURRENCY}
            // onChange={handleInputChange}
          >
            {getCurrencyOptionsList()}
          </select>
        </div>
        <div className="convert-form__target-container convert-container">
          <label className="convert-container__label" htmlFor="right-value" >Хочу приобрести</label>
          <input 
            className="convert-container__value" 
            id="right-value" 
            name={ConversionFields.RIGHT_VALUE} 
            type="number" 
            value={converstionForm.rightValue}
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="right-currency">Выбрать целевую валюту</label>
          <select 
            className="convert-container__currency" 
            id="right-currency" 
            name={ConversionFields.RIGHT_CURRENCY}
            // onChange={handleInputChange}
          >
            {getCurrencyOptionsList()}
          </select>
        </div>
        <label className="convert-form__date-label visually-hidden" htmlFor="convert-form-date">Выбрать дату</label>
        <Flatpickr
          className="convert-form__date"
          options={{
            dateFormat: "d.m.Y",
            minDate: minDay,
            maxDate: today
          }}
          value={today}
          onChange={
            (_selectedDates, dateStr, _instance) => {
              if(!isRateAlreadyDownloaded(rates, dateStr)) {
                onLoadData(
                  splitDate(dateStr).year,
                  splitDate(dateStr).month,
                  splitDate(dateStr).day
                );
                handleDateChange(dateStr);
              }
            }
          }
        />
        {isErrorMessageToBeShown()}
        <button className="convert-form__submit" type="submit">Сохранить результат</button>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => ({
  rates: state.rates,
  isLoadFailed: state.isLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(year, month, day) {
    dispatch(fetchRates(year, month, day))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Converter);