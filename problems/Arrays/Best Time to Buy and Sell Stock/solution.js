/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function maxProfit(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i += 1) {
        const num1 = prices[i];
        for (let j = i + 1; j < prices.length; j += 1) {
            const num2 = prices[j];
            const transaction = num2 - num1;
            if (transaction > profit) {
                profit = transaction;
            }
        }
    }
    return profit;
};

export default maxProfit;
