class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L=0, R=nums.length
        while(L<=R){
            if(target == nums[L]){
                return L
            }
            if(target ==  nums[R]){
                return R
            }
            L++
            R--
        }
        return -1
    }
}
