import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  // fetchRates,
  fetchRatesPerPeriod
} from '../../store/api-action';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';
import {
  splitDate,
  getDatesList
} from '../../utils/utils';

const Page = (props) => {
  const {rates, isDataLoaded, onLoadData} = props;

  console.log(rates)

  const loadRatesForDatesList = () => {
    const datesList = getDatesList();
    datesList.forEach((date) => {
      onLoadData(
        splitDate(date).year,
        splitDate(date).month,
        splitDate(date).day
      )
    })
  }

  useEffect(() => {
      if(!isDataLoaded) {
       onLoadData()
      }
  }, [isDataLoaded]);

  return (
    <div className="page">
      <Header />
      <main className="page__main main">
        <Promo />
        <Converter />
        <History />
      </main>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => ({
  rates: state.rates,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(year, month, day) {
    // dispatch(fetchRates(year, month, day))
    dispatch(fetchRatesPerPeriod())
  }
  // onLoadData() {
  //   const datesList = getDatesList();
  //   datesList.forEach((date) => {
  //   dispatch(fetchRates(
  //       splitDate(date).year,
  //       splitDate(date).month,
  //       splitDate(date).day
  //     ))
  //   })
    // dispatch(fetchRates(year, month, day))
  // }

})

export default connect(mapStateToProps, mapDispatchToProps)(Page);
