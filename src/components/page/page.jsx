import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRates} from '../../store/api-action';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';

const Page = (props) => {
  const {rates, isDataLoaded, onLoadData} = props;

  useEffect(() => {
      if(!isDataLoaded) {
        // onLoadData(todaySplit.year, todaySplit.month, todaySplit.day)
        onLoadData();
      }
  }, [isDataLoaded]);

  console.log(rates)

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
    dispatch(fetchRates(year, month, day))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);
