class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq = {};
        const n = nums.length;
        for(let i=0;i<n;i++){
            if(freq.hasOwnProperty(nums[i])){
                freq[nums[i]]++
            }
            else{
                freq[nums[i]]=1
            }
        }
        for(let key of Object.keys(freq)){
            if(freq[key] > Math.floor(n/2)){
                return key
            }
        }
    }
}
