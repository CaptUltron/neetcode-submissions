class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let freqMap1 = {};
        let freqMap2 = {};
        if(s.length!=t.length) return false
        for(let i=0;i<s.length;i++){
            if(Object.hasOwn(freqMap1,s[i])){
                freqMap1[s[i]]++
            }else{
                freqMap1[s[i]]=1;
            }
             if(Object.hasOwn(freqMap2,t[i])){
                freqMap2[t[i]]++
            }else{
                freqMap2[t[i]]=1;
            }
        }
        for(let key in freqMap1){
            if(freqMap2[key]!=freqMap1[key]){return false}
        }
        return true
    }
}
