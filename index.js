// problem 1a
// var ages = [3,9,23,64,2,8,28,93];
   
//        console.log(ages[ages.length-1]-ages[0]);
// //problem 1b
// ages.push(7);
// console.log(ages);
// //problem 1c
// var sum = 0;
// for (i = 0; i <ages.length; i++){
//     sum += ages[i];
// }
// console.log(Math.round(sum/ages.length))


// //Problem 2a
// names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// namesCount = 0;
// for (i = 0; i < names.length; i++){
//     namesCount+=names[i].length;
// }
// console.log(Math.round((namesCount)/names.length));
// //Problem 2b
// let newName = "";
// for (i = 0; i < names.length; i++){
//     newName+=names[i] + " ";
// }
// console.log(newName.trim());




// //Problem 3
// How do you access the last element of any array?
// Using array.length-1

// //Problem 4
// How do you access the first element of any array?
// using array(0)


// Problems 5+6
// namesArray = ["Kelly", "Sam", "Kate"]
// nameLengths = 0;
// for (i = 0; i <namesArray.length; i++){
 //       nameLengths+=namesArray[i].length;
//  }
// console.log(nameLengths);


//Problem 7
// function repeatWord(word, n){
//     while (n>0){
//     console.log(word)
//     n--
// }
// }
// repeatWord("cats", 3)


// // Problem 8

// function fullName (firstName, lastName){
//     var firstName;
//     var lastName;
//     console.log(firstName + " " + lastName);
// }
// fullName("Kelly", "Taylor")

//Problem 9 
//  function arraySum(num1, num2, num3, num4, num5, num6, num7, num8){
//     numAdd = num1+num2+num3+num4+num5+num6+num7+num8;
// if (numAdd > 100)
// console.log("true")
// else 
// console.log(false);
//  }
// arraySum(3,7,10,30,8,23,2,1)


//Problem 10

// function arrayAverage(num1, num2, num3, num4, num5){
//     sumAverage = ((num1+num2+num3+num4+num5)/arrayAverage.length);
//     console.log(sumAverage);
// }

// arrayAverage(15,23,4,11,35);


//Problem 11 

// function arrayCompare (array1,array2){
//     var sum1 = 0;
   
// for (var i=0; i < array1.length; i++){
// sum1 +=array1[i];

// }
// var sum2 = 0;
//    for (var i=0; i < array2.length; i++){
//     sum2 +=array1[i];
//    }
//     var average1 = sum1/array1.length;
//     var average2 = sum2/array2.length;
// if (average1 > average2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// }





// var ave = arrayCompare ([7, 12, 23, 4, 33], [45, 2, 1, 6, 10]);
// console.log(ave);


  
//     12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket){  
    if(isHotOutside && moneyInPocket>10.5){
        return true;
    }
    else{
        return false;
    }
}

var buyDrink = willBuyDrink(true,11);
console.log(buyDrink);



//     13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//program to calculate change based on how many types of coins one has
function pocketChange (pennies, nickels, dimes, quarters){
    penny = pennies*.01;
    nickel = nickels*.05;
    dime = dimes*.1;
    quarter = quarters*.25;
return (penny + nickel + dime + quarter);
}
let myTotal = pocketChange (33,14,19,34);
console.log("$" + myTotal)



