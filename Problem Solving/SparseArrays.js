function matchingStrings(strings, queries) {
    // Write your code here
    let finalArr = [];
    
    for(let query of queries){
        const filtered = strings.filter(str => query === str);
        finalArr.push(filtered.length);
    }
    
    return finalArr;
}
