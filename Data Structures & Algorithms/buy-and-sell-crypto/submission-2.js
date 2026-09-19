class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L=0, R=1, maxProfit=0;
        while(R<prices.length){
            if(prices[L] < prices[R]){
                maxProfit = Math.max(maxProfit, prices[R]-prices[L])
            }
            else{
                L = R;
            }
            R++;
        }
        return maxProfit
    }
}
