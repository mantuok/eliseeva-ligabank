import React from 'react';
import {Link} from 'react-router-dom';

const history = () => {
  return (
    <section className="main__history history">
      <div className="history__container">
        <h3 className="history__heading">История конвертаций</h3>
        <ul className="history__list">
          <li className="history__item history-item">
              <span className="history-item__date">25.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">24.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">23.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">22.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">21.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">20.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">1000</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">13,1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
          <li className="history__item history-item">
              <span className="history-item__date">19.11.2020</span>
              <div className="history-item__source history-amount">
                <span className="history-amount__value">50</span>
                <span className="history-amount__currency">RUB</span>
              </div>
              <div className="history-item__target history-amount">
                <span className="history-amount__value">1234</span>
                <span className="history-amount__currency">USD</span>
              </div>
          </li>
        </ul>
        <button className="history__reset" type="button">Очистить историю</button>
      </div>
    </section>
  ) 
}

export default history;