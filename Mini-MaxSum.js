function miniMaxSum(arr) {
    // Write your code here    
    let fromLowest = arr.sort((a,b) => a - b);
    
    let sumSmall = 0;
    let sumBig = 0;
    
    for(let i = 1; i < arr.length; i++){
        sumBig += fromLowest[i];
    }
    for(let i = 0; i < arr.length-1; i++){
        sumSmall += fromLowest[i];
    }
    
    console.log(`${sumSmall} ${sumBig}`);
}
