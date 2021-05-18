//DOM & Type Casting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//input
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
  e.preventDefault();

  console.log(
    type.value,
    toform.value,
    details.value,
    amount.valueAsNumber
  );
})

//class & Access Modifer 
class Invoice{
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
  readonly client:String,
  private details:String,
  public amount:Number
  ){}

  format(){
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('LEE','making a web',100);
const invTwo = new Invoice('LEEE','making a web',200);
let invoices: Invoice[]= [];
invoices.push(invOne);
invoices.push(invTwo);

// invTwo.client= 'KIM';
console.log(invOne,invTwo);




