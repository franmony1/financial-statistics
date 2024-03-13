const fetch = require('node-fetch');

/**
 * Calculates the annual percentage yield (APY)
 * @param {number} interestRate Interest rate
 * @param {number} compoundFrequency Compound frequency
 * @returns {number}
 */
const calculateAPY = (interestRate, compoundFrequency) => {
  return Math.pow(1 + interestRate / compoundFrequency, compoundFrequency) - 1;
};

/**
 * Calculates the loan interest
 * @param {number} principal Principal amount
 * @param {number} interestRate Interest rate
 * @param {number} loanTerm Loan term (years)
 * @returns {number}
 */
const calculateLoanInterest = (principal, interestRate, loanTerm) => {
  return (principal * interestRate) / 100 * loanTerm;
};

/**
 * Fetches the current price of a stablecoin
 * @param {string} symbol Stablecoin symbol
 * @returns {Promise<number>}
 */
const getStablecoinPrice = async (symbol) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data[symbol] && data[symbol].usd) {
      return data[symbol].usd;
    } else {
      throw new Error('Unable to fetch stablecoin price');
    }
  } catch (error) {
    throw new Error(`Error fetching stablecoin price: ${error.message}`);
  }
};

/**
 * Calculates the earnings for a liquidity provider
 * @param {number} liquidityTokens Liquidity tokens held
 * @param {number} totalLiquidity Total liquidity
 * @param {number} totalFees Total fees collected
 * @returns {number}
 */
const calculateLiquidityProviderEarnings = (liquidityTokens, totalLiquidity, totalFees) => {
  return (liquidityTokens / totalLiquidity) * totalFees;
};

module.exports = {
  calculateAPY,
  calculateLoanInterest,
  getStablecoinPrice,
  calculateLiquidityProviderEarnings,
};