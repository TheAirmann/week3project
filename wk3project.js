console.log("(Question 1.)");
//question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//declares the array and its entries ^
console.log("*Created 'ages' array*");
console.log(ages);
//(END))
console.log("   (1a.)");
//question 1a
let programaticallySubtract = array => {
    //this will give you a number that you can use to automatically reference the last place of the array. it is -1 because the array starts at 0.
    var lastEntry = array.length-1;
    console.log(array[lastEntry] + " - " + array[0]);
    return ("Difference = ") + (array[lastEntry] - array[0]);
}
console.log("*Created function to find difference of variables*");
//then you would log the function, passing the array
console.log(programaticallySubtract(ages));
//(END)
console.log("   (1b.)");
//question 1b
console.log("*Added the value 20 to the array & repeated 1a.*");
ages.push(20);
//adds new variable to the array
console.log(programaticallySubtract(ages));
//log the previous function to check if dynamic
//(END)
console.log("   (1c.)");
//question 1c
let calculateAverage = array => {
    //this will calculate the average of the values in the array
    var sum = 0;
    var count = array.length;
    for (i=0; i<count; i++) {
        sum += array[i];
        //this prints the array position followed by its value (for reference)
        console.log(i + " = " + array[i]);
        console.log("(" + sum + ")");
    }
    //returns the average of the values
    return "Average = " + sum/count;
}
console.log("*Created loop function to find average of 'ages'");
//log the function
console.log(calculateAverage(ages));
//(END)
console.log("(Question 2.)");
//question 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//declare the array ^
console.log("*Created 'names' array*");
console.log(names);
//(END)
console.log("(Question 3 & 4)");
//questions 3 & 4
console.log('Q: "How do you access the first and last elements of any array?"');
console.log("A: To access the first part of an array, you simply write 'array[0]', since '[0]' always refers to the first value in an array. To access the last part of an array, you would write 'array.length-1', because the last part of an array will always be 1 less than the total length of the array.");
//**NOTE** everything below is not my code. I was in a rush to catch up on my late work so I got help from someone online and slightly edited their code. Everything previous is my code, which I explained to the best of my ability.

console.log("(Questions 2a, 2b, 5, & 6)");
//questions 2a, 2b, 5, 6
function countingName(){
    let nameLengths = []
    
    names.forEach(data => {
     nameLengths.push(data.length)
    })
    
    let addCountNames = nameLengths.reduce((accumulator, value) => accumulator + value)
    let averageCountNames = addCountNames/nameLengths.length
    
    console.log(averageCountNames)
    
    let combineNames = names.join(' ')
    console.log(combineNames)
    
    console.log(addCountNames)
}
countingName();
//(END)
console.log("(Question 7)");
//question 7
function concacTo(word, n){
console.log(word.repeat(n));
};
concacTo("Yabba", 3);
//(END)
console.log("(Question 8)");
//question 8
function fullName() {
    let firstName = prompt('First name');
    let lastName = prompt('Last name');
    console.log("Name: " + firstName + " " + lastName);

}
fullName();
//(END)
console.log("(Question 9)");
//question 9
let sum100 = (array) => {
    let sum = 0;
    let count = array.length
    for(i=0; i<count; i++){
        sum += array[i];
    }
    if(sum > 100){
        console.log(true);
    } else {
        console.log("Nope")
    };
}
sum100(ages);
//(END)
console.log("(Question 10)");
//question 10
let random = [5, 92, 14, 2, 16, 27, 46]
let elementAvg = array => {
    //this will calculate the average of the values in the array
    var sum = 0;
    var count = array.length;
    for (i=0; i<count; i++) {
        sum += array[i];
        //this prints the array position followed by its value (for reference)
        console.log(i + " = " + array[i]);
        console.log("(" + sum + ")");
    }
    //returns the average of the values
    return "Average = " + sum/count;
}
console.log(elementAvg(random));
//(END)
console.log("(Question 11)");
//question 11
function isGreater(arr1, arr2){
    console.log(arr1, arr2);
    let sum1 = 0;
    let sum2 = 0;

    for(let i=0; i<arr1.length; i++){
        sum1 += arr1[i];
        console.log("running total of sum1: ", sum1);
    }

    for(let i=0; i<arr2.length; i++)[
        sum2 += arr2[i],
        console.log('running total of sum2: ', sum2)
    ]

    let average1 = sum1 / arr1.length;
    console.log('average: ', average1);
    let average2 = sum2 / arr2.length;
    console.log('average:', average2);

    if(average1 > average2){
        console.log(average1 + " is greater than ", average2)
    } else {
        console.log(average2 + " is greater than " + average1)
    }
}
isGreater([1, 2, 3, 100, 10], [1, 20, 20, 20, 30]);
isGreater([1, 2, 3, 10], [1, 20, 20, 30]);
isGreater([1, 2, 3, 10], [1, 20, 20, 30]);
isGreater([1, 2, 3, 0, 10], [1, 20, 20, 20, 30]);