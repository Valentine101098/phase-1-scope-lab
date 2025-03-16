// Write your solution in this file!
var customerName = 'bob';
// var bestCustomer = 'not bob';
const leastFavoriteCustomer = 'val';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
  }


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'ben';
}
