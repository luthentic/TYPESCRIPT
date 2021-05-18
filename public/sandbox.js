"use strict";
var character = 'LEE';
var age = 30;
var isIt = false;
character = 'Lee';
age = 25;
isIt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));
// array
var names = ['abc', 'cde', 'ege', 'eahj'];
names.push('toa');
var mixed = ['LEE', 4, '', 8, 'KIM', 20, 44, 'CATH'];
mixed.push('ogog');
mixed.push(56);
mixed[0] = 2;
// object
var op = {
    name: 'ppp',
    belt: 'white',
    age: 30
};
op.age = 10;
op.name = 'LEE';
op = {
    name: 'PPP',
    belt: 'purple',
    age: 20
};
// explicit types
var a1;
var a2;
var a3;
// arrays
var arr;
arr = ['t', '2'];
// arr.push(2);
// union types
var mixx = [];
mixx.push(20);
mixx.push('LEE');
var mixxx;
mixxx = 10;
mixxx = 'LEE';
//any
var oo = 25;
oo = true;
oo = 'LEE';
var ppp = [];
ppp.push(1);
ppp.push('LEE');
ppp.push(false);
var ob;
ob = { name: 1, age: 'lee' };
console.log(ob);
// function
var greet;
greet = function () {
    console.log('hello, again');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 2, 30);
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 5);
var logDetail = function (uid, item) {
    console.log(item + " has a unit of " + uid);
};
var greett = function (user) {
    console.log(user.name + " say hello");
};
//Function signatures
var greet1;
greet1 = function (name, greeting) {
    console.log(name + " says " + greeting);
};
