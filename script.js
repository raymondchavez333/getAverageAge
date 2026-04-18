let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users){

    return users.reduce((sum, current) => sum + current.age, 0) / 3;
}
alert( getAverageAge(arr) );