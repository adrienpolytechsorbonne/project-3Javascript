
function displayTableWithError(array) {
    const tableContainer = document.getElementById("tableError");
    const row = document.createElement("tr");
    for (const item of array) {
        const cell = document.createElement("td");
        cell.textContent = item;
        row.appendChild(cell);
    }
    tableContainer.appendChild(row);
}


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

function areInputNumbers(table){
    let verifyNum = true;

    for(let i=0; i<table.length; i++){
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

/* 1. Function verifyGridByLine : displays an error message if there is
an anomaly between elements (some are not numbers or two numbers are repeated) on each line of the grid
*/
function verifyGridByLine(checkbox){
    for(let i=0;i<checkbox.length;i++){
        if(areInputNumbers(checkbox[i])==false){
            displayTableWithError(checkbox[i]);
            throw new Error(`One element is NaN or two numbers are the same ! Error line number : ${i} with values : ${checkbox[i]}`);   
        }
    }
}

//verifyGridByLine(to_verify); // throws an error on the 9th row

/* 2.Function verifyGridByColumn : displays an error message if there is
an anomaly between elements (some are not numbers or two numbers are repeated) on each column of the grid
*/
function verifyGridByColumn(checkbox){
    for(let i=0;i<checkbox.length;i++){
        const column = checkbox.map(row => row[i]);
        if(areInputNumbers(column)==false)
            throw new Error(`One element is NaN or two numbers are the same ! Error column number : ${i} with values : ${column}`);
    }
}

verifyGridByColumn(to_verify); // throws an error on the 9th column


/* 3.Function verifyGridByRegion : displays an error message if there is
an anomaly between elements (some are not numbers or two numbers are repeated) on each region of the grid
*/
function verifyGridByRegion(checkbox){
    for(let j=0;j<9;j+=3){
        for(let i=0;i<9;i+=3){
            const region = checkbox.slice(j, j+3).map(row => row.slice(i, i+3));
            const regList = region.flat();
            if(areInputNumbers(regList)==false)
                throw new Error(`One element is NaN or two numbers are the same ! Error region number : ${Math.max(i+3,j+3)} with values : ${regList}`);
        }
    }
}

verifyGridByRegion(to_verify); // throws an error on the 9th region


/* 4. Function displayTableWithError : Put the values of the box to be checked in a table
      (1-dimensionnal array as input, HTML table as output).
*/
/*
function displayTableWithError(bool,table){
    if(bool==false){
        const tableError = document.getElementById("tableError");
        const row = document.createElement("tr");
        for (let i=0; i<table.length; i++) {
            const cell = document.createElement("td");
            cell.textContent = `${table[i]}`;
            row.appendChild(cell);
        }
        tableContainer.appendChild(row);
    }
}

*/