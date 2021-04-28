import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = (props) => {
  const {date, fromValue, fromCurrency, toValue, toCurrency} = props;
  return (
    <li className="history__item history-item">
      <span className="history-item__date">{date}</span>
      <div className="history-item__source history-amount">
        <span className="history-amount__value">{fromValue}</span>
        <span className="history-amount__currency">{fromCurrency}</span>
      </div>
      <div className="history-item__target history-amount">
        <span className="history-amount__value">{toValue}</span>
        <span className="history-amount__currency">{toCurrency}</span>
      </div>
    </li>
  );
};

HistoryItem.propTypes = {
  date: PropTypes.string.isRequired,
  fromValue: PropTypes.number.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toValue: PropTypes.number.isRequired,
  toCurrency: PropTypes.string.isRequired
};

export default HistoryItem;

