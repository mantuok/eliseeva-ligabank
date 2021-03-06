import React, {useState} from 'react';
import {connect} from 'react-redux';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import {
  minDay,
  today,
  todayFormatted,
} from '../../utils/utils';
import ErrorMessage from '../error-message/error-message';
import {
  Rate,
  ConversionFields,
  HistoryLimit
} from '../../const';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {
  conversionsPropTypes,
  ratesPropTypes
} from '../../utils/props-validation';

const Converter = (props) => {
  const {rates, conversions, isLoadFailed, onSaveConversion, onRemoveConversion} = props;
  
  const [conversionForm, setConversionForm] = useState({
    leftValue: '',
    leftCurrency: `RUB`,
    rightValue: '',
    rightCurrency: `RUB`,
    date: todayFormatted,
    isRateAvailable: true,
  });

  const getCurrencyOptionsList = () => {
    return Object.keys(Rate).map((rate) => 
     <option value={rate} key={rate}>{rate}</option>
    );
  };

  const isErrorMessageToBeShown = () => {
    if (isLoadFailed || !conversionForm.isRateAvailable) {
      return <ErrorMessage />;
    }
    return ``;
  };

  const doConversion = (inputName, inputValue) => {
    const sourceData = getSources(inputName, inputValue);
    const targetCurrency = getTargetCurrency(inputName, inputValue);
    const sourceRate = getRate(sourceData.currency, inputName, inputValue);
    const targetRate = getRate(targetCurrency, inputName, inputValue);
    const targetValue = calculate(sourceData.value, sourceData.currency, targetCurrency, sourceRate, targetRate)

    saveValues(targetValue, inputValue, inputName);
  }

  const getSources = (inputName, inputValue) => {
    switch (inputName) {
      case ConversionFields.LEFT_VALUE:
        return {
          value: inputValue,
          currency: conversionForm.leftCurrency
        };
      case ConversionFields.LEFT_CURRENCY:
        return {
          value: conversionForm.leftValue,
          currency: inputValue
        };
      case ConversionFields.RIGHT_VALUE:
        return {
          value: inputValue,
          currency: conversionForm.rightCurrency
        };
      case ConversionFields.RIGHT_CURRENCY:
        return {
          value: conversionForm.leftValue,
          currency: conversionForm.leftCurrency
        };
      case ConversionFields.DATE: 
        return {
          value: conversionForm.leftValue,
          currency: conversionForm.leftCurrency
        };
      default:
        return {
          value: ``,
          currency: ``
        };
    }
  };

  const getTargetCurrency = (inputName, inputValue) => {
    switch (inputName) {
      case ConversionFields.LEFT_VALUE:
        return conversionForm.rightCurrency;
      case ConversionFields.LEFT_CURRENCY:
        return conversionForm.rightCurrency;
      case ConversionFields.RIGHT_VALUE:
        return conversionForm.leftCurrency;
      case ConversionFields.RIGHT_CURRENCY:
        return inputValue;
      case ConversionFields.DATE:
        return conversionForm.rightCurrency;
      default:
        return ``;
    }
  };

  const getRate = (currency, inputName, inputValue) => {
    let selectedDate = ``;
    let requestedRate = ``;
    
    if (inputName === ConversionFields.DATE) {
      selectedDate = inputValue;
    } else {
      selectedDate = conversionForm.date;
    }

    rates.some((rate) => {
      if (Object.values(rate)[0] === selectedDate) {
        const currentRates = rate.rates;
        requestedRate = currentRates[currency];
      }
      return requestedRate;
    });

    return requestedRate;
  }

  const isRatePerDayAvailable = (date) => rates.some((rate) => Object.values(rate)[0] === date);

  const changeRateAvailableStatus = (status) => {
    setConversionForm({
      ...conversionForm,
      isRateAvailable: status
    });
  }

  const calculate = (sourceValue, sourceCurrency, targetCurrency, sourceRate, targetRate) => {
    if (sourceCurrency === targetCurrency) {
      return sourceValue;
    }

    const rubValue = sourceValue * sourceRate;
    const convertedValue = Math.round((rubValue / targetRate) * 100) / 100;
  
    return convertedValue;
  }

  const saveValues = (targetValue, inputValue, inputName) => {
    debugger
    switch (inputName) {
      case ConversionFields.LEFT_VALUE:
        setConversionForm({
          ...conversionForm,
          rightValue: parseInt(targetValue),
          leftValue: parseInt(inputValue)
        });
        break;
      case ConversionFields.LEFT_CURRENCY:
        setConversionForm({
          ...conversionForm,
          rightValue: parseInt(targetValue),
          leftCurrency: inputValue
        });
        break;
      case ConversionFields.RIGHT_VALUE:
        setConversionForm({
          ...conversionForm,
          leftValue: parseInt(targetValue),
          rightValue: parseInt(inputValue)
        });
        break;
      case ConversionFields.RIGHT_CURRENCY:
        setConversionForm({
          ...conversionForm,
          rightValue: parseInt(targetValue),
          rightCurrency: inputValue
        }); 
        break;
      case ConversionFields.DATE:
        setConversionForm({
          ...conversionForm,
          rightValue: parseInt(targetValue),
          date: inputValue
        }); 
        break;
      default: 
        break;
    }
  }

  const isInputNotEmpty = () => conversionForm.leftValue !== `` || conversionForm.rightValue !== ``;
  const isHistoryMaxLenght = () => conversions.length === HistoryLimit.MAX;

  const limitHistoryLength = () => {
    if (isHistoryMaxLenght()) {
      onRemoveConversion();
    }
  };

  const saveConversion = () => {
    onSaveConversion({
      date: conversionForm.date,
      fromValue: conversionForm.leftValue,
      fromCurrency: conversionForm.leftCurrency,
      toValue: conversionForm.rightValue,
      toCurrency: conversionForm.rightCurrency
    });
  };

  const resetConversionForm = () => {
    setConversionForm({
      ...conversionForm,
      leftValue: ``,
      leftCurrency: `RUB`,
      rightValue: ``,
      rightCurrency: `RUB`,
    });
  };

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    doConversion(name, value);
  };

  const handleDateChange = (dateValue, fieldName) => {
    if (isRatePerDayAvailable(dateValue)) {
      changeRateAvailableStatus(true)
      if (isInputNotEmpty()) {
      doConversion(fieldName, dateValue);
      }
      return;
    } 
    changeRateAvailableStatus(false);
  };

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    if (isInputNotEmpty()) {
      limitHistoryLength();
      saveConversion();
      resetConversionForm();
    }
  };

  return (
    <section className="main__converter converter">
      <h2 className="converter__heading">?????????????????? ??????????</h2>
      <form className="converter__convert-form convert-form" method="#">
        <div className="convert-form__source-container convert-container">
          <label className="convert-container__label" htmlFor="left-value" >?? ???????? ????????</label>
          <input 
            className="convert-container__value" 
            id="left-value" 
            name={ConversionFields.LEFT_VALUE} 
            type="number"
            value={conversionForm.leftValue}
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="left-currency">?????????????? ?????????????? ????????????</label>
          <select 
            className="convert-container__currency" 
            id="left-currency" 
            name={ConversionFields.LEFT_CURRENCY}
            value={conversionForm.leftCurrency}
            onChange={handleInputChange}
          >
            {getCurrencyOptionsList()}
          </select>
        </div>
        <div className="convert-form__target-container convert-container">
          <label className="convert-container__label" htmlFor="right-value" >???????? ????????????????????</label>
          <input 
            className="convert-container__value" 
            id="right-value" 
            name={ConversionFields.RIGHT_VALUE} 
            type="number" 
            value={conversionForm.rightValue}
            onChange={handleInputChange}
          />
          <label className="convert-container__currency-label visually-hidden" htmlFor="right-currency">?????????????? ?????????????? ????????????</label>
          <select 
            className="convert-container__currency" 
            id="right-currency" 
            name={ConversionFields.RIGHT_CURRENCY}
            value={conversionForm.rightCurrency}
            onChange={handleInputChange}
          >
            {getCurrencyOptionsList()}
          </select>
        </div>
        <label className="convert-form__date-label visually-hidden" htmlFor="convert-form-date">?????????????? ????????</label>
        <Flatpickr
          className="convert-form__date"
          options={{
            dateFormat: "d.m.Y",
            minDate: minDay,
            maxDate: today
          }}
          value={conversionForm.date}
          name={ConversionFields.DATE}
          onChange={
            (_selectedDates, dateStr, _instance) => handleDateChange(dateStr, ConversionFields.DATE)
          }
        />
        {isErrorMessageToBeShown()}
        <button 
          className="convert-form__submit" 
          type="submit"
          onClick={handleSubmitClick}
        >
            ?????????????????? ??????????????????</button>
      </form>
    </section>
  );
};

Converter.propTypes = {
  isLoadFailed: PropTypes.bool.isRequired,
  onSaveConversion: PropTypes.func.isRequired,
  onRemoveConversion: PropTypes.func.isRequired,
  rates: ratesPropTypes,
  conversions: conversionsPropTypes
};

const mapStateToProps = (state) => ({
  rates: state.rates,
  conversions: state.conversions,
  isLoadFailed: state.isLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
  onSaveConversion(conversionData) {
    dispatch(ActionCreator.saveConversion(conversionData))
  },
  onRemoveConversion() {
    dispatch(ActionCreator.removeConversion())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);