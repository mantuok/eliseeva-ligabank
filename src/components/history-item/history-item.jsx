import React from 'react';

// const HistoryItem = (date, fromValue, fromCurrency, toValue, toCurrency) => {
//   return (
//     <li className="history__item history-item">
//       <span className="history-item__date">{date}</span>
//       <div className="history-item__source history-amount">
//         <span className="history-amount__value">{fromValue}</span>
//         <span className="history-amount__currency">{fromCurrency}</span>
//       </div>
//       <div className="history-item__target history-amount">
//         <span className="history-amount__value">{toValue}</span>
//         <span className="history-amount__currency">{toCurrency}</span>
//       </div>
//     </li>
//   );
// };


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

export default HistoryItem;

