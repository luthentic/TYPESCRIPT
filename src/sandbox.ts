let character = 'LEE';
let age = 30;
let isIt = false;

character = 'Lee';
age = 25;
isIt = true;

const circ =  (diameter:number)=>{
  return diameter * Math.PI;
}

console.log(circ(20));


// array
let names =['abc','cde','ege','eahj'];
names.push('toa');

let mixed = ['LEE',4,'',8,'KIM',20,44,'CATH'];

mixed.push('ogog');
mixed.push(56);
mixed[0] = 2;

// object
let op = {
  name:'ppp',
  belt:'white',
  age:30
};
op.age = 10;
op.name='LEE';

op = {
  name:'PPP',
  belt:'purple',
  age: 20
};

// explicit types
let a1: string;
let a2: number;
let a3: boolean;

// arrays
let arr: string[];
arr = ['t','2'];
// arr.push(2);

// union types
let mixx: (string|number)[] =[];
mixx.push(20);
mixx.push('LEE');

let mixxx: string|number|boolean;
mixxx = 10;
mixxx = 'LEE';

//any
let oo: any=25;
oo = true;
oo = 'LEE';

let ppp: any[]=[];
ppp.push(1);
ppp.push('LEE');
ppp.push(false);

let ob: {name:any,age:any};
ob = {name:1,age:'lee'}
console.log(ob);

// function
let greet: Function;

greet = () => {
  console.log('hello, again');
}

const add = (a:number, b:number, c:number|string =10):void =>{//? optional, =10 default value  
  console.log(a + b);
  console.log(c);
}
add(5,2,30);

const minus = (a:number,b:number):number => {  // return type but automatically 
  return a + b;
}
let result = minus(10,5);

// Type Aliases
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum}

const logDetail = (uid: StringOrNum, item: StringOrNum) => {
  console.log(`${item} has a unit of ${uid}`);
}

const greett = (user: objWithName) =>{
  console.log(`${user.name} say hello`);
}

//Function signatures
let greet1: (a:string,b:string) => void;

greet1 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}



