// let number = 5;
// let number2 = 13.4;

// console.log(5 / 0); //Infinity
// console.log(5 / "string"); //Nan

// let string = "Это строка";
// let string2 = 'И это строка';

// let sym = Symbol("name");

// let x = 2;
// console.log(x == 2);
// console.log(x == 5);

// let nothing;
// console.log(nothing);
// console.log(something);

let user = {
 name : "Alex",
 age : 29,
 human: true,
 "favorite football club" : "Inter",
 breathe : function() {
  console.log("I am alive!")
 }
}

console.log(user);

console.log(user.name);
console.log(user['age']);

console.log(user.favorite football club); //Работать не будет
console.log(user["favorite football club"]); //Правильная форма записи

 
let arr = ["zero", "first", "second"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof {});
console.log(typeof []);
console.log(typeof 0);
console.log(typeof false);
console.log(typeof "string");
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof null);
