class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let freqMap = {};
        let res = [];
        for(let i=0;i<nums.length;i++){
            const complement = target-nums[i]
            if(Object.hasOwn(freqMap,complement)){
                res.push(freqMap[complement],i);
                return res;
            }else{
                freqMap[nums[i]]=i
            }
        }
        return res;  
    }
}
