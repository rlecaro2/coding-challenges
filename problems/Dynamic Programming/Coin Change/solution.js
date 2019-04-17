/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * Adapted from a read solution
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function coinChange(coins, amount) {
    const solutions = new Array(amount + 1).fill(amount + 1);
    solutions[0] = 0;

    for (let i = 0; i < coins.length; i += 1) {
        const coin = coins[i];
        for (let subAmount = coin; subAmount <= amount; subAmount += 1) {
            const previousSolution = solutions[subAmount];
            const usingThisCoin = solutions[subAmount - coin] + 1;

            solutions[subAmount] = Math.min(previousSolution, usingThisCoin);
        }
    }

    const last = solutions[solutions.length - 1];
    return last > amount ? -1 : last;
};

export default coinChange;
