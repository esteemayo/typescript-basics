"use strict";
// arrays
Object.defineProperty(exports, "__esModule", { value: true });
var arrayOfString;
arrayOfString = ['one', 'two', 'three'];
var testNumberArray;
testNumberArray = [12, 55, 23];
var testStringOrNumberArray;
testStringOrNumberArray = [1, 'two', 3];
// objects
var user = {
    username: 'john',
    age: 22,
    isAdmin: false,
};
user.username = 'jane';
// user.age = 'eighteen'
user.age = 29;
// user.isAdmin = 'no'
user.isAdmin = true;
// user.phone = '+123456789';
var userObj;
userObj = {
    username: 'john',
    age: 23,
    isAdmin: true,
};
var userObj2;
userObj2 = {
    username: 'john',
    age: 23,
    isAdmin: true,
    phone: '+123456789',
};
// any
var testAny;
testAny = 12;
testAny = 'Hello';
testAny = true;
testAny = [true];
testAny = {};
var testAnyArray;
testAnyArray = [1, 'two', false, []];
// functions
var sayHi;
sayHi = function () {
    console.log('Hi, welcome');
};
var funcReturnStr = function () {
    console.log('Hi');
    return 'Hi';
};
var multiple = function (num) {
    return num * 2;
};
var multiple2 = function (num) {
    return num * 2;
};
var multiple3 = function (num) {
    // return num * 2;
    // do something but don't return
};
var sum = function (num1, num2, another) {
    if (another) {
        return num1 + num2 + another;
    }
    return num1 + num2;
};
sum(1, 2);
sum(1, 2, 3);
var func = function (user) {
    console.log(user.username);
};
var write = function (num, str) {
    console.log("".concat(num, " times ").concat(str));
};
var userWithTheme = {
    username: 'john',
    age: 43,
    theme: 'dark',
};
var emp = {
    username: 'tom',
    email: 'tom@gmail.com',
    age: 43,
    employeeId: 1,
};
var client = {
    username: 'tom',
    email: 'tom@gmail.com',
    age: 43,
};
var testMe = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: ['str1', 'str2'],
};
var testMe2 = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{ id: 1, username: 'john' }],
};
var testMe3 = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{ id: 1, title: 'post title' }],
};
