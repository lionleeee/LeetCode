/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     let l = 0;
    strs = strs.sort((a,b) => a.length - b.length)
    while (l < strs[0].length) {
        let c = strs[0][l];
        for(let s of strs) {
            if (s[l] != c) return s.substr(0, l);
        }
        l++;
    }
    return strs[0];
};