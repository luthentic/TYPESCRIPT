import {Hasformatter} from '../Interfaces/Hasformatter.js';
//class & Access Modifer 
export class Payment implements Hasformatter{
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
  readonly recipient:String,
  private details:String,
  public amount:Number
  ){}

  format(){
    return `${this.recipient} is owed ${this.amount} for ${this.details}`;
  }
}