"use strict";
//DOM & Type Casting
var form = document.querySelector('.new-item-form');
//input
var type = document.querySelector('#type');
var toform = document.querySelector('#toform');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
//class & Access Modifer 
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('LEE', 'making a web', 100);
var invTwo = new Invoice('LEEE', 'making a web', 200);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invTwo.client= 'KIM';
console.log(invOne, invTwo);
