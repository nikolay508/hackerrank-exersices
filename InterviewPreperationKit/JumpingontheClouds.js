function jumpingOnClouds(c) {
    // Write your code here
    let pathCount = 0;
    let index = 0;
    
    while(index < c.length-1){
        if(index + 2 < c.length && c[index + 2] === 0){
            index += 2;
        }else{
            index++;
        }
        pathCount++;
    }
    return pathCount;
}
