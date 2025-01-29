function countingValleys(steps, path) {
    // Write your code here
    let count = 0;
    let countValley = 0;
    
    for(let letter of path){
        if(letter === 'U'){
            count++;
            if(count === 0){
                countValley++;
            }
        }else{
            count--;
        }
    }
    
    return countValley;
}
