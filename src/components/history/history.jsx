import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import {ActionCreator} from '../../store/action';
import HistoryItem from '../history-item/history-item';

const history = (props) => {
  const {conversions, onRemoveHistoryItem, onClearHistory} = props;


  const getHistoryItems = () => {
    if (conversions.length === 0) {
      return ``;
    }

    // if (conversions.length === 10) {
    //   onRemoveHistoryItem();
    //   console.log(conversions)
    // }
    return conversions.map((conversion) => 
        <HistoryItem 
            key={nanoid()} 
            date={conversion.date} 
            fromValue={conversion.fromValue}
            fromCurrency={conversion.fromCurrency}
            toValue={conversion.toValue} 
            toCurrency={conversion.toCurrency}
        />)
  }

  const handleClearButtonClick = (evt) => {
    evt.preventDefault()
    onClearHistory()
  }

  return (
    <section className="main__history history">
      <div className="history__container">
        <h3 className="history__heading">История конвертаций</h3>
        <ul className="history__list">
          {getHistoryItems()}
        </ul>
        <button 
          className="history__reset" 
          type="button"
          onClick={handleClearButtonClick}
          >
            Очистить историю
          </button>
      </div>
    </section>
  ) 
}

const mapStateToProps = (state) => ({
  conversions: state.conversions
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveHistoryItem() {
    dispatch(ActionCreator.removeConversion())
  },
  onClearHistory() {
    dispatch(ActionCreator.clearConversions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(history);