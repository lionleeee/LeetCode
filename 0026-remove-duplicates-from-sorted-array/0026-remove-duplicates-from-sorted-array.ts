function removeDuplicates(nums: number[]): number {
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};

/*


Slice()
배열의 일부분을 추출하여 새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.

Splice()
배열에서 요소를 추가, 제거 또는 교체하는 작업을 수행한다. 이때 원본 배열이 수정된다. splice()는 제거된 요소를 포함할 수 있고, 새로 삽입된 요소들 또한 포함할 수 있다

1. nums의 length만큼 반복
2. nums[i]가 nums[i+1]와 같으면 다음꺼 삭제
3. nums lnegth가 줄어들었으니 i도 마이너스 해주기


*/