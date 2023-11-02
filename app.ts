// arrays

let arrayOfString: string[];
arrayOfString = ['one', 'two', 'three'];

let testNumberArray: number[];
testNumberArray = [12, 55, 23];

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, 'two', 3];

// objects
let user = {
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

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: 'john',
  age: 23,
  isAdmin: true,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: 'john',
  age: 23,
  isAdmin: true,
  phone: '+123456789',
};

// any
let testAny: any;

testAny = 12;
testAny = 'Hello';
testAny = true;
testAny = [true];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, 'two', false, []];

// functions
let sayHi: () => void;

sayHi = () => {
  console.log('Hi, welcome');
};

const funcReturnStr = (): string => {
  console.log('Hi');
  return 'Hi';
};

const multiple = (num: number) => {
  return num * 2;
};

const multiple2 = (num: number): number => {
  return num * 2;
};

const multiple3 = (num: number): void => {
  // return num * 2;
  // do something but don't return
};

interface Sum {
  (num1: number, num2: number, another?: number): number;
}

const sum: Sum = (num1: number, num2: number, another?: number) => {
  if (another) {
    return num1 + num2 + another;
  }
  return num1 + num2;
};

sum(1, 2);
sum(1, 2, 3);

// type aliases
type User = {
  username: string;
  age: number;
  phone?: string;
};

const func = (user: User) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

const write: myFunc = (num, str) => {
  console.log(`${num} times ${str}`);
};

type UserType = {
  username: string;
  age: number;
  phone?: string;
  theme: 'dark' | 'light';
};

const userWithTheme: UserType = {
  username: 'john',
  age: 43,
  theme: 'dark',
};

// interfaces

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: 'tom',
  email: 'tom@gmail.com',
  age: 43,
  employeeId: 1,
};

const client: IUser = {
  username: 'tom',
  email: 'tom@gmail.com',
  age: 43,
};

// generics

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: ['str1', 'str2'],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: [{ id: 1, username: 'john' }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: [{ id: 1, title: 'post title' }],
};

export {};
