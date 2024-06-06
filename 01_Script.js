/*
console.log('Hello') //print anything on the console window
a=5    // variable 
a=null   // no value in it
a=undefined  // not defined yet

//Array
let marks = [10,15,20,25,30];
for (let m of marks) {
    console.log(m);
}

//Array
for (let m in marks) {
    console.log(marks[m]);
}

//Array
console.log("Marks converted in strings are:", marks.toString());


//Functions without parameters and return value
function message{
    console.log("This function has not parameters and no return value");
}

message();

//function with parameters
function multiply(a,b){
console.log("multiplication=",a*b);
}

multiply(10,20);

//function with paramters and return value.
function multiply2(a,b){
    return a*b;
}

c=multiply2(20,5);

//Arrow function are anonymous (or lambda) functions with a const variable assigned to each
const mult=(a,b)=>{
    console.log(a*b);
}  // we could skip pair of braces for single line body.

mult(10,90);

//ForEach method 
let marks=[10,20,30,40,50];  //forEach is a method used for array only.
//methods are functions used for specific object only. e.g. for strings we have 
//str.Toupper() method.
marks.forEach((val)=>{   //we can use 'idx' and 'arr' as well like val.
console.log(val);
})

//map method (similliar to ForEach but can create new array modified with operation)
let mark2=[10,20,30,40,50];
let marksSq = mark2.map((val)=>{
    return (val*val);
});

console.log(marksSq);

//filter method
let marks3=[11,20,31,40,51];
let marksEven=marks3.filter((val)=>{
    return (val%2===0);
})

console.log(marksEven);

//reduce method (return 'one' value only. It could be 'sum', 'largestno' etc)
let marks4 = [10,20,30,40,50];
let largest = marks4.reduce((prev,curr)=>{
    return (prev>curr?prev:curr);
})

console.log("Largest no is:",largest);

let sum=marks4.reduce((prev,curr)=>{
    return prev+curr;
})

console.log("Sum of array is:",sum);

*/