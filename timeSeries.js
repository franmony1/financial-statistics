const utils = require('./utils');

/**
 * Calculates the simple moving average (SMA)
 * @param {number[]} data Data series
 * @param {number} window Window size
 * @returns {number[]} SMA series
 */
const calculateSMA = (data, window) => {
  const sma = [];
  for (let i = window - 1; i < data.length; i++) {
    const slice = data.slice(i - window + 1, i + 1);
    sma.push(utils.calculateAverage(slice));
  }
  return sma;
};

/**
 * Calculates the exponential moving average (EMA)
 * @param {number[]} data Data series
 * @param {number} window Window size
 * @returns {number[]} EMA series
 */
const calculateEMA = (data, window) => {
  const ema = [];
  const multiplier = 2 / (window + 1);
  let prevEMA = utils.calculateAverage(data.slice(0, window));
  ema.push(prevEMA);

  for (let i = window; i < data.length; i++) {
    const currentEMA = (data[i] - prevEMA) * multiplier + prevEMA;
    prevEMA = currentEMA;
    ema.push(currentEMA);
  }

  return ema;
};

module.exports = {
  calculateSMA,
  calculateEMA,
};