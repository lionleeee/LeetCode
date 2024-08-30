function addBinary(a: string, b: string): string {
    return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);
};

//parseInt로 처리하면 오버플로우 발생
