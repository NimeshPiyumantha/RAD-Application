"use strict";
console.log("Hello world");
//Data Types
//Numbers
let age = 22;
//String
let firstName = 'Kamal';
//Array
let numbersArray; //any -ඔනම type එකක්
let numberArray = [10, 20, 30, 40, "50"];
/**
let numberArray2: number[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "50"
let nameArray: string[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "10,20,30,40"
*/
//Tuples
let person = [1, "Kamal"]; //Data type 2k එක පාරට දානවනම් use කරන්නේ
//functions without defined a return type
function calculator() {
    let numbers = [];
    return numbers;
}
//function with defined return type
function calculatorAverage(subjectCount, totalMarks) {
    let average = (totalMarks / subjectCount) * 100;
    return average;
}
let avgMarks = calculatorAverage(5, 420);
console.log(avgMarks);
//function with optional parameters
function addNumber(firstNumber, secondNumber) {
    if (secondNumber) {
        return firstNumber + secondNumber;
    }
    return firstNumber;
}
console.log(addNumber(10));
//Objects
let customer = { id: 1, name: "Dasun" };
//
let student = {
    id: 1,
    name: "Dasun",
};
let teacher = {
    id: 1,
    name: "Dasun",
    enroll: (date) => {
        console.log(date);
    },
};
teacher.enroll(new Date());
let employee1 = {
    id: 1,
    name: "Dasun"
};
let employee2 = {
    id: 2,
    name: "Kamal"
};
//Union Types
//*Union types use කරලා funtion එකකට value types කිහිපයක් දෙන්න පුලුවන්
function getNumber(myNumber) {
    console.log(myNumber);
}
getNumber("10");
//*string value එකක් pareInt කරන්න
function getNumbers(myNumbers) {
    //Narrowing
    if (typeof myNumbers === 'string') {
        return parseInt(myNumbers);
    }
    return myNumbers;
}
getNumbers("10");
//Nullable values
function generate(name) {
    if (name) {
        console.log(name);
    }
    else {
        console.log("Nothing");
    }
}
generate("null");
