'use strict';

const columns = 10;
const seat = Number(prompt('Enter seat number:'));
const colNum = seat % columns;
const rowNum = Math.floor(seat / columns);
const seatID = String.fromCharCode(65 + rowNum) + colNum;

document.write(seatID);

console.log('colNum', colNum);
console.log('rowNum', rowNum);
// console.log((65 + rowNum) + colNum);