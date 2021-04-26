import React, {useState} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {
  splitDate,
  minDay,
  today,
  isRateAlreadyDownloaded
} from '../../utils/utils';
// import {calculation, calculate} from '../../utils/calculation'
import {fetchRates} from '../../store/api-action';
import ErrorMessage from '../error-message/error-message';
import {Rate} from '../../const';

const Converter = (props) => {
  const {rates, onLoadData, isLoadFailed} = props;
  const [converstionForm, setConversionForm] = useState({
    sourceValue: null,
    sourceCurrency: `RUB`,
    targetValue: null,
    targetCurrency: `RUB`,
    date: today
  });

  

   const calculate = (sourceValue, sourceCurrency, targetCurrency, sourceRate, targetRate) => {
    if (sourceCurrency === targetCurrency) {
      return sourceValue;
    }
  
    const rubValue = sourceValue * sourceRate
    const convertedValue = rubValue / targetRate
  
    return convertedValue;
  }

  // const calculate = (sourceValue, sourceCurrency, targetCurrency, sourceRate, targetRate) => {
  //   // const sourceRate = rates.date[converstionForm.sourceCurrency]

  //   if (sourceCurrency === targetCurrency) {
  //     return;
  //   }
  
  //   const rubSource = sourceValue * sourceRate
  //   const convertedValue = rubSource / targetRate

  //   // setConversionForm({
  //   //   ...converstionForm,
  //   //   [name]: value
  //   // })
  
  //   // return convertedValue;
  // }


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
    console.log(`${name}: ${value}`)
    setConversionForm({
      ...converstionForm,
      [name]: value
    })
    // calculate()
  }

  const doConversion = () => {
    //saveInput

    //getValues 

    //calculate

    //updateFields
  }

  const saveInput = (name, value) => {
    setConversionForm({
      ...converstionForm,
      [name]: value
    })
  }

  const handleDateChange = (value) => {
    setConversionForm({
      ...converstionForm,
      date: value
    })
    // console.log(rates.converstionForm.date)
  }

  console.log(converstionForm)

  return (
    <section className="main__converter converter">
      <h2 className="converter__heading">Конвертер валют</h2>
      <form className="converter__convert-form convert-form" method="#">
        <div className="convert-form__source-container convert-container">
          <label className="convert-container__label" htmlFor="source-value" >У меня есть</label>
          <input 
            className="convert-container__value" 
            id="source-value" 
            name="sourceValue" 
            type="number"
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="source-currency">Выбрать текущую валюту</label>
          <select className="convert-container__currency" id="source-currency" name="sourceCurrency">
            {getCurrencyOptionsList()}
          </select>
        </div>
        <div className="convert-form__target-container convert-container">
          <label className="convert-container__label" htmlFor="target-value" >Хочу приобрести</label>
          <input 
            className="convert-container__value" 
            id="target-value" 
            name="targetValue" 
            type="number" 
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="target-currency">Выбрать целевую валюту</label>
          <select className="convert-container__currency" id="target-currency" name="targetCurrency">
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