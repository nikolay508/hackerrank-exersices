function processData(input) {
    //Enter your code here
    let arrInput = input.split('\r\n');
    let finalArr = [];
    
    for(let each of arrInput){
        let [operation, symboll, word] = each.split(';');
        
        if(operation === 'S'){
            
            if(symboll === 'M'){
                word = word.slice(0 ,-2);
            }
            
            word = word.split(/(?=[A-Z])/).map(w => w.toLowerCase()).join(' ');
            finalArr.push(word);
            
        }else if(operation === 'C'){
            word = word.split(' ')
            .map((word, index) => 
            index === 0 
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ).join('');
            
            if(symboll === 'C'){
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }else if(symboll === 'M'){
                word += '()';
            }
            
            finalArr.push(word);
        }
    }
    
    for(let each of finalArr){
        console.log(each);
    }
} 
