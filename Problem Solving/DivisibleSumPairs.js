function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    
    for(let i = 0; i < n; i++){
        for(let j = 1; j < n; j++){
            if((ar[i] + ar[j]) % k === 0 && j > i){
                count++;
            }
        }
    }
    
    return count;
}
