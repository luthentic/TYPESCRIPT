import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne:Hasformatter;
// let docTwo:Hasformatter;
// docOne = new Invoice ('LEE', 'Webwork', 100);
// docTwo = new Payment('DAEK', 'Playing', 200);
// let docs: Hasformatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//Interfaces
// interface IsPerson{
//   name:string;
//   age:number;
//   speak(a:string):void;
//   spend(a:number):number;
// }
// const me: IsPerson = {
//   name:'LEE',
//   age:25,
//   speak(text:string):void{
//     console.log(text);
//   },
//   spend(amount:number):number{
//     console.log('I spent',amount);
//     return amount;
//   }
// };
// const greetPerson = (person:IsPerson)=>{
//   console.log('HI',person.name);
// }
// greetPerson(me);
//DOM & Type Casting
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// const invOne = new Invoice('LEE','making a web',100);
// const invTwo = new Invoice('LEEE','making a web',200);
// let invoices: Invoice[]= [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invTwo.client= 'KIM';
// console.log(invOne,invTwo);
