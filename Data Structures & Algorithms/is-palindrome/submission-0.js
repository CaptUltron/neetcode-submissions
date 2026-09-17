class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
    const res = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let i=0, j=res.length-1;
        while(i<=j){
            if(res[i]!==res[j]){
                return false;
            }
            i++;
            j--;    
        }
        return true;
    }
}
