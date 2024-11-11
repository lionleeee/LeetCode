function isAnagram(s: string, t: string): boolean {
    let sSplit = s.split("").sort();
    let tSplit = t.split("").sort();
    
    if(sSplit.length != tSplit.length) return false;
    
    if(sSplit.join("") === tSplit.join("")) return true;
    else return false;
};