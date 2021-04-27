import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import {ActionCreator} from '../../store/action';
import HistoryItem from '../history-item/history-item';

const history = (props) => {
  const {conversions, removeConversion, clearConversions} = props;

  console.log(conversions);

  const getHistoryItems = () => {
    // return <HistoryItem />
    // debugger
    if (conversions.length === 0) {
      return ``;
    }
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

  return (
    <section className="main__history history">
      <div className="history__container">
        <h3 className="history__heading">История конвертаций</h3>
        <ul className="history__list">
          {/* <HistoryItem /> */}
          {getHistoryItems()}
        </ul>
        <button className="history__reset" type="button">Очистить историю</button>
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