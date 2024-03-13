# Financial Statistics

Financial Statistics is a Node.js library that provides basic functions for web3 financial data analysis. It includes functions for calculating average, median, standard deviation, variance, and correlation coefficient of numerical data, as well as a function to fetch cryptocurrency prices from an external API.

## Installation

You can install Financial Statistics using npm:

```bash
npm install financial-statistics

## Usage

```javascript
const finStats = require('financial-statistics');

// Calculate average
const average = finStats.calculateAverage([10, 20, 30]); // 20

// Calculate median
const median = finStats.calculateMedian([10, 20, 30, 40]); // 25

// Calculate APY
const apy = finStats.calculateAPY(0.12, 12); // 0.1268

// Calculate loan interest
const loanInterest = finStats.calculateLoanInterest(10000, 5, 3); // 1500

// Get stablecoin price
finStats.getStablecoinPrice('dai')
  .then(price => console.log(`DAI price: $${price}`))
  .catch(err => console.error(err));

// Calculate liquidity provider earnings
const earnings = finStats.calculateLiquidityProviderEarnings(1000, 100000, 500); // 5

API

Utils

calculateAverage(data): Calculates the average of an array of numbers.
calculateMedian(data): Calculates the median of an array of numbers.
calculateStandardDeviation(data): Calculates the standard deviation of an array of numbers.
calculateVariance(data): Calculates the variance of an array of numbers.
calculateCorrelationCoefficient(dataX, dataY): Calculates the correlation coefficient between two arrays of numbers.

DeFi

calculateAPY(interestRate, compoundFrequency): Calculates the annual percentage yield (APY) for a given interest rate and compound frequency.
calculateLoanInterest(principal, interestRate, loanTerm): Calculates the loan interest for a given principal, interest rate, and loan term.
getStablecoinPrice(symbol): Fetches the current price of a stablecoin from CoinGecko API.
calculateLiquidityProviderEarnings(liquidityTokens, totalLiquidity, totalFees): Calculates the earnings for a liquidity provider based on their share of the total liquidity and the total fees collected.