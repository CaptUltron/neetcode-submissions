class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L=0, R=nums.length-1;
        while(L <= R){
            let mid = Math.floor((L+R)/2);
            if(target === nums[mid]){
                return mid
            }
            if(target >  nums[mid]){
                L = mid + 1
            }else{
                R = mid - 1
            }
        }
        return -1
    }
}
