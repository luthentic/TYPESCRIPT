export{};
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
