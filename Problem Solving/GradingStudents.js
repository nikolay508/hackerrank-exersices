function gradingStudents(grades) {
    // Write your code here
    let finalGrade = [];
    for(let each of grades){     
        let closestBy5 = Math.ceil(each / 5) * 5;
         
        if((closestBy5 - each) < 3 && each >= 38){
            finalGrade.push(closestBy5);
        }else{
            finalGrade.push(each);
        }
    }
    
    return finalGrade;
}
