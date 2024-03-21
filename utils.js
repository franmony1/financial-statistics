const math = require('mathjs');
const { scaleLinear } = require('d3-scale');

/**
 * Calculates the average of an array of numbers
 * @param {number[]} data 
 * @returns {number}
 */
const calculateAverage = (data) => {
  const sum = data.reduce((acc, val) => acc + val, 0);
  return sum / data.length;
};

/**
 * Calculates the median of an array of numbers
 * @param {number[]} data
 * @returns {number}
 */
const calculateMedian = (data) => {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[middle - 1] + sortedData[middle]) / 2
    : sortedData[middle];
};

/**
 * Calculates the standard deviation of an array of numbers
 * @param {number[]} data
 * @returns {number}
 */
const calculateStandardDeviation = (data) => {
  const mean = calculateAverage(data);
  const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
  const variance = calculateAverage(squaredDifferences);
  return Math.sqrt(variance);
};

/**
 * Calculates the variance of an array of numbers
 * @param {number[]} data
 * @returns {number}
 */
const calculateVariance = (data) => {
  const mean = calculateAverage(data);
  const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
  return calculateAverage(squaredDifferences);
};

/**
 * Calculates the correlation coefficient between two arrays of numbers
 * @param {number[]} dataX
 * @param {number[]} dataY
 * @returns {number}
 */
const calculateCorrelationCoefficient = (dataX, dataY) => {
  if (dataX.length !== dataY.length) {
    throw new Error('Data arrays must have the same length');
  }

  const calculateMean = (data) => data.reduce((acc, val) => acc + val, 0) / data.length;
  const meanX = calculateMean(dataX);
  const meanY = calculateMean(dataY);

  const calculateNumerator = () => {
    let sum = 0;
    for (let i = 0; i < dataX.length; i++) {
      sum += (dataX[i] - meanX) * (dataY[i] - meanY);
    }
    return sum;
  };

  const calculateDenominator = (data, mean) => {
    return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0));
  };

  const numerator = calculateNumerator();
  const denomX = calculateDenominator(dataX, meanX);
  const denomY = calculateDenominator(dataY, meanY);

  return numerator / (denomX * denomY);
};

/**
 * Calculates the determinant of a matrix
 * @param {Array<Array<number>>} matrix Matrix
 * @returns {number} Determinant value
 */
const calculateDeterminant = (matrix) => {
  return math.det(matrix);
};

/**
 * Calculates the derivative of a function at a point
 * @param {Function} fn Function
 * @param {number} x Point
 * @returns {number} Derivative value
 */
const calculateDerivative = (fn, x) => {
  return math.derivative(fn, x);
};

/**
 * Linearly scales data
 * @param {number[]} data Original data
 * @param {number} minRange Minimum range of output
 * @param {number} maxRange Maximum range of output
 * @returns {number[]} Scaled data
 */
const linearScaleData = (data, minRange, maxRange) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const scale = scaleLinear().domain([min, max]).range([minRange, maxRange]);
  return data.map(scale);
};

module.exports = {
  calculateAverage,
  calculateMedian,
  calculateStandardDeviation,
  calculateVariance,
  calculateCorrelationCoefficient,
  calculateDeterminant,
  calculateDerivative,
  linearScaleData,
};