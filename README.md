# Financial Statistics

financial-statistics is a JavaScript library that provides various financial statistics and analysis utilities, including traditional statistical metrics, time series analysis, technical analysis, Monte Carlo simulations, and functionalities for decentralized finance (DeFi) applications.

## Installation

You can install Financial Statistics using npm:

```bash
npm install financial-statistics

## Usage

const fin = require('financial-statistics');

// Calculate average
const avg = fin.calculateAverage([1, 2, 3, 4, 5]);
console.log(avg); // 3

// Calculate annual percentage yield (APY)
const apy = fin.calculateAPY(0.05, 12); // 5% interest rate, compounded monthly
console.log(apy); // 0.051...

// Calculate simple moving average (SMA)
const data = [10, 15, 20, 25, 30];
const sma = fin.calculateSMA(data, 3); // Window size of 3
console.log(sma); // [15, 20, 25]

// Run Monte Carlo simulation
const initialValue = 1000;
const numSimulations = 1000;
const numPeriods = 10;
const generator = () => 1 + 0.05 * Math.random(); // 5% random fluctuation
const simulations = fin.runMonteCarloSimulation(initialValue, numSimulations, numPeriods, generator);
console.log(simulations.length); // 1000

// Log messages
fin.logger.info('Application started');

API

Statistical Metrics
calculateAverage(data): Calculate the average of a data series
calculateMedian(data): Calculate the median of a data series
calculateStandardDeviation(data): Calculate the standard deviation of a data series
calculateVariance(data): Calculate the variance of a data series
calculateCorrelationCoefficient(dataX, dataY): Calculate the correlation coefficient between two data series

Mathematical Utilities
calculateDeterminant(matrix): Calculate the determinant of a matrix
calculateDerivative(fn, x): Calculate the derivative of a function at a point
linearScaleData(data, minRange, maxRange): Linearly scale data

Decentralized Finance (DeFi)
calculateAPY(interestRate, compoundFrequency): Calculate the annual percentage yield
calculateLoanInterest(principal, interestRate, loanTerm): Calculate loan interest
getStablecoinPrice(symbol): Get the current price of a stablecoin
calculateLiquidityProviderEarnings(liquidityTokens, totalLiquidity, totalFees): Calculate earnings for a liquidity provider

Time Series Analysis
calculateSMA(data, window): Calculate the simple moving average
calculateEMA(data, window): Calculate the exponential moving average

Technical Analysis
calculateRSI(data, window): Calculate the Relative Strength Index

Monte Carlo Simulation
runMonteCarloSimulation(initialValue, numSimulations, numPeriods, generator): Run a Monte Carlo simulation
calculateConfidenceInterval(data, confidence): Calculate the confidence interval

Logging
logger: Winston logger instance for logging messages at different levels

Contributing
Suggestions, bug reports, and pull requests are welcome. Please check the contributing guide first.

License

MIT