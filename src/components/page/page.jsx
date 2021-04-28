import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRatesPerPeriod} from '../../store/api-action';
import Header from '../header/header';
import Footer from '../footer/footer';
import Promo from '../promo/promo';
import Converter from '../converter/converter';
import History from '../history/history';
import PropTypes from 'prop-types';

const Page = (props) => {
  const {isDataLoaded, onLoadData} = props;

  console.log(isDataLoaded)

  useEffect(() => {
      if(!isDataLoaded) {
       onLoadData()
      }
  }, [isDataLoaded, onLoadData]);

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
  onLoadData() {
    dispatch(fetchRatesPerPeriod())
  }
})

Page.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
