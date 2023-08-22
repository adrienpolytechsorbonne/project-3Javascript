var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6"; 
array_number[1]= "9 8 3 7 6 2 5 1 4"; 
array_number[2]= "1 5 6 8 9 4 7 2 3"; 
array_number[3]= "2 3 9 1 8 5 4 6 7"; 
array_number[4]= "7 4 1 6 3 9 2 5 8"; 
array_number[5]= "5 6 8 2 4 7 1 3 9"; 
array_number[6]= "8 7 2 9 1 3 6 4 5"; 
array_number[7]= "3 9 5 4 2 6 8 7 1"; 
array_number[8]= "6 1 4 5 7 8 3 9 6";


let to_verify = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]


function transferData(table_digits,to_check){
    for(let i=0;i<table_digits.length;i++){
        const figures = table_digits[i].split(' ');
        for(let j=0;j<figures.length;j++){
            const number = parseInt(figures[j]);
            to_check[i][j] = number;
        }
    }
}

transferData(array_number,to_verify);

/* 1.
Function areInputNumbers : Verify that all positions are numbers and different from each other
with a 1-dimensionnal array as input (numbers from 1 to 9)
*/

function areInputNumbers(table){
    let verifyNum = true;
    for(let i=0;i<table.length;i++){
        if(!(Number.isInteger(table[i]))||(table[i]<=0)||(table[i]>10))
            verifyNum = false;
    }
    let copy = table.slice(0);
    copy.sort((a,b) => a - b );
    let list = [1,2,3,4,5,6,7,8,9];
    const areEqual = list.every(element => copy.includes(element));
    if(areEqual==false){
        verifyNum = false;
    }
    return verifyNum;
}

console.log(areInputNumbers(to_verify[1])); // true

console.log(areInputNumbers(to_verify[8])); // false