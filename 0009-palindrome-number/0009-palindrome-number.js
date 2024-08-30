function isPalindrome(x: number): boolean {
    const reverse : number = Number(x.toString().split('').reverse().join(''));
   if(reverse === x) return true;

   return false; 
};

/*
1. x를 string으로 나눈 후 배열로 split하기
2. 뒤집은 다음에 다시 join
3. 값 비교
*/
