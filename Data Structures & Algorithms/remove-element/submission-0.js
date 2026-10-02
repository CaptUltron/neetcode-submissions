class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let P1 = 0;
        let P2 = 0;
        while(P2 <= nums.length-1){
            if(val !== nums[P2]){
                nums[P1] = nums[P2];
                P1++;
                P2++;
            }else P2++;
        }
        return P1
    }
}
