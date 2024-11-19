function lonelyinteger(a) {
    // Write your code here
    let result = 0;
    
    for (let num of a) {
        result ^= num; // XOR each number with the result
    }
    
    return result;
}
