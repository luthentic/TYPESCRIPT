import {Hasformatter} from '../Interfaces/Hasformatter.js';
//class & Access Modifer 
export class Invoice implements Hasformatter{
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