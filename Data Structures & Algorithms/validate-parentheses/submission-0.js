class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const closeToOpen = {")":"(", "]":"[", "}":"{"}
        for(let c of s){
            if(Object.hasOwn(closeToOpen,c)){
                if(stack[stack.length-1]==closeToOpen[c]){
                    stack.pop()
                }else return false
            }else stack.push(c)
        }
        if(stack.length==0) return true
        else return false
    }
}
