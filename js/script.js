// ES5

// функциональный подход
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.avatar = 'Photo';
//   this.deleteAvatar = function name(params) {
//   this.avatar = null;   
//   };
//  };

// Прототипный подход
function User(name, id) {
 this.name = name;
 this.id = id;
 this.avatar = 'Photo';
};


User.prototype.deleteAvatar = function name(params) {
 this.avatar = null;   
};

function Admin(name, id) {
 this.name = name;
 this.id = id;
 this.avatar = 'Photo';
};

// Укажем что, Админ прототип юзера (наследует свойства юзера
Admin.prototype = Object.create(User.prototype);

Admin.prototype.changeMyid = function name(params) {
 this.id = 1;
 console.log('I am the boss');
};

var adm = new Admin('Admin', 2);

var john = new User('John', 25);
var ivan = new User('Ivan', 30);

console.log(john);
console.log(ivan);
console.log(adm);
// console.log([1,2]);
