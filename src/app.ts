import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import {Hasformatter} from './Interfaces/Hasformatter.js'



const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul) 

//DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();

  let values: [string,string,number];
  values = [toform.value,details.value,amount.valueAsNumber];
  let doc: Hasformatter;
  if(type.value === 'invoice'){
    doc = new Invoice(...values);
  }else{
    doc = new Payment(...values);
  }
 list.render(doc,type.value,'end');
});


//Generic & Enum
enum ResourceType { BOOK,BOX,AUTHOR,FILM,PERSON}

interface Resource<T> {
  uid:number;
  resource:ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid:1,
  resource: ResourceType.AUTHOR,
  data:{name:'OOGOG'}
}
const docFour: Resource<String[]> ={
  uid:2,
  resource:ResourceType.FILM,
  data:['1','2','3','4']
}

// tuples 
let arr = ['tpo',25,true];
arr[0] = false;
arr[1] = 'yohsi';

let tuple:[string,number,boolean] = ['Lee',25,true];
tuple[0] = 'KIM';
tuple[1] = 10;

let sutdd:[string,number];
sutdd = ['POB',20];
