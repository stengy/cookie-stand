'use strict'

//Object constructor for storeHours

function Store(name, minCustomerHr, maxCustomerHr, avgSalesHr) {
  this.name = name;
  this.openTime = 6;
  this.closeTime = 20;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgSalesHr = avgSalesHr;
  this.hourlySales [];

}

// method to generate data for store constructor


Store.prototype.generateSalesData = function () {
  var numCustomer, numCookieSold;
  var customerHrRange = this.maxCustomerHr - this.minCustomerHr;

  for(var i = this.openTime; i < this.closeTime; i++){
    numCustomer = Math.random() * customerHrRange + this.minCustomerHr;
    numCookieSold = Math.floor(numCustomer * this.avgSalesHr);
    this.hourlySales.push(numCookieSold);
  }

}
