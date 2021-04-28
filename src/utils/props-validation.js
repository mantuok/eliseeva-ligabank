import PropTypes from 'prop-types';

export const conversionPropTypes = PropTypes.shape({
  date: PropTypes.string.isRequired,
  fromValue: PropTypes.number.isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toValue: PropTypes.number.isRequired,
  toCurrency: PropTypes.string.isRequired
});

export const conversionsPropTypes = PropTypes.arrayOf(conversionPropTypes);

export const ratePropTypes = PropTypes.shape({
  date: PropTypes.string.isRequired,
  rates: PropTypes.shape({
    RUB: PropTypes.number.isRequired,
    USD: PropTypes.number.isRequired,
    EUR: PropTypes.number.isRequired,
    GBP: PropTypes.number.isRequired,
    CNY: PropTypes.number.isRequired
  })
});

export const ratesPropTypes = PropTypes.arrayOf(ratePropTypes);