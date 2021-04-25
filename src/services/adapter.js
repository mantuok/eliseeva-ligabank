import {RATE} from '../const';

export const adaptRatesToClient = (rawData) => {
  const rates = Object.keys(RATE);

  const usd = `USD`

  console.log(rawData.payload.Valute.EUR.Value)

  console.log(rawData.payload.Valute[usd].Value)

  
  const adaptRates = () => {
    let adaptedRates = {
      date: rawData.payload.Date,
      rates: {}
    };
    rates.map((rate) => {
      console.log(rawData.payload.Valute[rate].Value)
      console.log(rate)
      adaptedRates = ({
        ...adaptedRates,
        rates: {
          ...adaptedRates.rates,
          [rate]: rawData.payload.Valute[rate].Value
        }
      })
    })

    return adaptedRates;
  }
  
  ;
  console.log(adaptRates())
}