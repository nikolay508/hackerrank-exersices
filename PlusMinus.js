function plusMinus(arr) {
    // Write your code here
    let size = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    for(let each of arr){
        if(each > 0){
            positiveCount++;
        }else if(each < 0){
            negativeCount++;
        }else{
            zeroCount++;
        }
    }
    
    console.log(`${positiveCount / size}\n${negativeCount / size}\n${zeroCount / size}`)
}
