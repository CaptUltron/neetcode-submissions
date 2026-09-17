class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freqMap = {};
        for(let i=0;i<nums.length;i++){
            if(Object.hasOwn(freqMap,nums[i])){
                freqMap[nums[i]]++
            }else{
            freqMap[nums[i]]=1;
            }
        }
        for(let key in freqMap){
            if(freqMap[key]>1) return true
        }
        return false
    }
}
