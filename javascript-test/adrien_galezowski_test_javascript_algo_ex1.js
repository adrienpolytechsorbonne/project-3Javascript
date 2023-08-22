// Data of the table to be checked (1-dimensionnal array, 9 boxes)
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


/* 1. 
Creating a table of 9 boxes out of 9 called to_verify
*/
const to_verify = [
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

/* 2.
Function transferData : Read the table with 1-dimension provided (table_digits)
and transfer the data in table defined in 1. (to_check)
*/
function transferData(table_digits,to_check){
    for(let i=0;i<table_digits.length;i++){
        const figures = table_digits[i].split(' ');
        for(let j=0;j<figures.length;j++){
            const number = parseInt(figures[j]);
            to_check[i][j] = number;
        }
    }
}

transferData(array_number,to_verify)
//console.log(to_verify);

/* 3.
Function displayTable : display the content of a HTML table of 9 boxes out of 9 and fill it with numbers
*/
function displayTable(table) {
    const tableContainer = document.getElementById("tableContainer");
    // Create a 9x9 table
    for (let i = 0; i < table.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < table[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = `${table[i][j]}`;
            row.appendChild(cell);
        }
        tableContainer.appendChild(row);
    }
}

displayTable(to_verify);

/* 4.
See "main" HTML for more details
*/