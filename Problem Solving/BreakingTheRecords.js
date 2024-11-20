function breakingRecords(scores) {
    // Write your code here
    let minScore = scores[0];
    let maxScore = scores[0];
    
    let minCount = 0;
    let maxCount = 0;
    
    for(let each of scores){
        if(each > maxScore){
            maxScore = each;
            maxCount++;
        }else if(each < minScore){
            minScore = each;
            minCount++;
        }
    }
    
    return [maxCount, minCount];
}
