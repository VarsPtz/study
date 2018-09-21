// ES6

// Запрещаем использование недокументированных возможностей встроенного языка
'use strict'

// В данном стандарте не ставят символ ; между функциями.Таковы правила синтаксиса).
class User {
 constructor(name, id) {
  this.name = name;
  this.id = id;
  this.avatar = 'Photo';
 }
 deleteAvatar() {
  this.avatar = null;
 }
}

class Admin extends User {
 constructor(name, id) {
  super(name, id);
  this.name = name;
  this.id = id;
  this.avatar = 'Photo';
 }
 changeMyid() {
  this.id = 1;
  console.log('I am the boss');
 }
}

// let john = new User('John', 25);
const adm = new Admin('Admin', 2);
const john = new User('John', 25);
console.log(john);
console.log(adm);
