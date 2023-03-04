console.log("Hello world");

//Data Types

//Numbers
let age: number =22;

//String
let firstName: string ='Kamal';

//Array
let numbersArray: any [] //any -ඔනම type එකක්

let numberArray = [10,20,30,40,"50"]

/** 
let numberArray2: number[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "50"
let nameArray: string[] = [10,20,30,40,"50"]//number එකේ string value තින නිසා error "10,20,30,40"
*/

//Tuples
let person: [number,string] = [1,"Kamal"]//Data type 2k එක පාරට දානවනම් use කරන්නේ

//functions without defined a return type
function calculator(){
    let numbers: number[] = []
    return numbers;
}

//function with defined return type
function calculatorAverage( subjectCount: number,totalMarks: number): number{
    let average = (totalMarks/subjectCount)*100;
   return average;
}

let avgMarks=calculatorAverage(5,420);
console.log(avgMarks);

//function with optional parameters
function addNumber(firstNumber: number,secondNumber?: number): number {//optional දානවනම් ? දෙන්න ඔන
    if(secondNumber){
        return firstNumber + secondNumber;
    }

    return firstNumber;
}

console.log(addNumber(10));

//Objects
let customer: { id: number; name: string } = { id: 1, name: "Dasun" };

//
let student: { id: number; name: string; age?: number } = {
    id: 1,
    name: "Dasun",
  };
  let teacher: { id: number; name: string; enroll: (date: Date) => void } = {
    id: 1,
    name: "Dasun",
    enroll: (date: Date) => {
      console.log(date);
    },
  };
  teacher.enroll(new Date());


  //Type aliases
  //*code එක repet වෙන එක නවත්තන්න object එකක් හදාගෙන එක reuse කරනවා.

/** 
let employee: { id: number; name: string; } = {
    id: 1,
    name: "Dasun"
};
*/ 

type Employee= {
    id: number;
    name: string;
}
  
let employee1: Employee = {
    id: 1,
    name: "Dasun"
}

let employee2: Employee = {
    id: 2,
    name: "Kamal"
}

//Union Types
//*Union types use කරලා funtion එකකට value types කිහිපයක් දෙන්න පුලුවන්
function getNumber(myNumber: number | string) {
    console.log(myNumber);
}
getNumber("10");