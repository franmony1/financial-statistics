const utils = require('./utils');

/**
 * Runs a Monte Carlo simulation
 * @param {number} initialValue Initial value
 * @param {number} numSimulations Number of simulations
 * @param {number} numPeriods Number of periods
 * @param {Function} generator Random number generator function
 * @returns {number[][]} Simulated series
 */
const runMonteCarloSimulation = (initialValue, numSimulations, numPeriods, generator) => {
  const simulations = [];

  for (let i = 0; i < numSimulations; i++) {
    let value = initialValue;
    const simulation = [value];

    for (let j = 0; j < numPeriods; j++) {
      value *= generator();
      simulation.push(value);
    }

    simulations.push(simulation);
  }

  return simulations;
};

/**
 * Calculates the confidence interval
 * @param {number[]} data Data series
 * @param {number} confidence Confidence level (e.g., 0.95 for 95% confidence interval)
 * @returns {{lower: number, upper: number}} Confidence interval
 */
const calculateConfidenceInterval = (data, confidence) => {
  const sorted = [...data].sort((a, b) => a - b);
  const n = sorted.length;
  const alpha = 1 - confidence;
  const lower = sorted[Math.floor(alpha / 2 * n)];
  const upper = sorted[Math.floor((1 - alpha / 2) * n)];
  return { lower, upper };
};

module.exports = {
  runMonteCarloSimulation,
  calculateConfidenceInterval,
};