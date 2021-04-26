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
import {fetchRates} from '../../store/api-action';
import ErrorMessage from '../error-message/error-message';
import {Rate} from '../../const';

const Converter = (props) => {
  const {rates, onLoadData, isLoadFailed} = props;
  const {converstionForm, setConversionForm} = useState({
    sourceValue: null,
    sourceCurrency: `RUB`,
    targetValue: null,
    targetCurrency: `RUB`,
    date: today
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

    return (
      <section className="main__converter converter">
        <h2 className="converter__heading">Конвертер валют</h2>
        <form className="converter__convert-form convert-form" method="#">
          <div className="convert-form__source-container convert-container">
            <label className="convert-container__label" htmlFor="source-value" >У меня есть</label>
            <input className="convert-container__value" id="source-value" name="source-value" type="number" />
            <label className="convert-container__currency-label visually-hidden" htmlFor="source-currency">Выбрать текущую валюту</label>
            <select className="convert-container__currency" id="source-currency" name="source-currency">
              {getCurrencyOptionsList()}
            </select>
          </div>
          <div className="convert-form__target-container convert-container">
            <label className="convert-container__label" htmlFor="target-value" >Хочу приобрести</label>
            <input className="convert-container__value" id="target-value" name="target-value" type="number" />
            <label className="convert-container__currency-label visually-hidden" htmlFor="target-currency">Выбрать целевую валюту</label>
            <select className="convert-container__currency" id="target-currency" name="target-currency">
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
              (__selectedDates, dateStr, __instance) => {
                if(!isRateAlreadyDownloaded(rates, dateStr)) {
                  onLoadData(
                    splitDate(dateStr).year,
                    splitDate(dateStr).month,
                    splitDate(dateStr).day
                  )
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