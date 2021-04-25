import {RATE} from '../const';

// export const adaptRatesToClient = (rawData) => {

// const usd = `USD`

// console.log(rawData.payload.Valute.EUR.Value)

// console.log(rawData.payload.Valute[usd].Value)


export const adaptRates = (rawData) => {
  // debugger
  const rates = Object.keys(RATE);



  let adaptedRates = {
    date: rawData.Date,
    rates: {}
  };
  rates.map((rate) => {
    // console.log(rawData.payload.Valute[rate].Value)
    // console.log(rate)
    adaptedRates = ({
      ...adaptedRates,
      rates: {
        ...adaptedRates.rates,
        [rate]: rawData.Valute[rate].Value
      }
    })
  })

  return adaptedRates;
}

// console.log(adaptRates())
// }