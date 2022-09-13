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