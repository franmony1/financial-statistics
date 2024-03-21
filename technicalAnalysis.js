/**
 * Calculates the Relative Strength Index (RSI)
 * @param {number[]} data Data series
 * @param {number} window Window size
 * @returns {number[]} RSI series
 */
const calculateRSI = (data, window) => {
  const rsi = [];
  const gainHistory = [];
  const lossHistory = [];

  for (let i = 0; i < window; i++) {
    gainHistory.push(0);
    lossHistory.push(0);
  }

  for (let i = window; i < data.length; i++) {
    const gain = Math.max(data[i] - data[i - 1], 0);
    const loss = Math.max(data[i - 1] - data[i], 0);

    gainHistory.push(gain);
    lossHistory.push(loss);

    gainHistory.shift();
    lossHistory.shift();

    const avgGain = gainHistory.reduce((a, b) => a + b, 0) / window;
    const avgLoss = lossHistory.reduce((a, b) => a + b, 0) / window;

    const rs = avgGain / avgLoss;
    const currentRSI = 100 - 100 / (1 + rs);
    rsi.push(currentRSI);
  }

  return rsi;
};

module.exports = {
  calculateRSI,
};