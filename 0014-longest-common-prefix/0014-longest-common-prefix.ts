function longestCommonPrefix(strs: string[]): string {
    
    let prefix = strs[0];
    for(let word of strs){
        while(word.indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length -1);
        }
    }
    return prefix
    
    
};

/*
풀이

1. 첫 배열을 prefix로 지정한다
2. strs 문자열을 순회하며 문자열이 prefix와 같은지 확인한다.
3. 같지 않을 경우 prefix를 뒤에서부터 한 글자 씩 제거한다
4-1.모든 조건에 맞지 않을 경우 공백인 ""을 리턴한다.
4-2.뒤에서붙어 하나씩 순차적으로 제거하다 공통 접두사를 리턴한다 

*/