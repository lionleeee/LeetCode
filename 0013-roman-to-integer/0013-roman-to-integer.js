/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
        const romaNumverMap = {V:5,
                     I :1,
                     X : 10,
                     L: 50,
                     C : 100,
                     D:500,
                     M: 1000,};
    
    var result = 0;
    s.split('').forEach((item,index)=> {
           if(romaNumverMap[item] < romaNumverMap[s[index+1]]) {
               result = result- romaNumverMap[item] 
           }else{
               result = result + romaNumverMap[item]}
           });
    return result  
};