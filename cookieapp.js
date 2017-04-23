'use strict';


var salesTable = document.getElementById('salesTable');
var addStore = document.getElementById('addStore');

addStore.addEventListener('submit', createStore);

function createStore(event) {
  event.preventDefault();

  var form = event.target;

  var enteredName = form.enteredName.value;
  var addMinCustomerHr = parseInt(form.addMinCustomerHr.value);
  var addMaxCustomerHr = parseInt(form.addMaxCustomerHr.value);
  var avgSaleCustomer = parseInt(form.avgSaleCustomer.value);


  var addedStore = new Store (enteredName, addMinCustomerHr, addMaxCustomerHr, avgSaleCustomer);
  console.log('type of name', typeof name);
  addedStore.generateCookiesPerHour();
  addedStore.generateTableRows();

  form.reset();
}

//constructor object for any and all stores
function Store (name,minCustomerHr,maxCustomerHr,avgCookieHr) {
  this.name = name;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgCookieHr = avgCookieHr;
  this.hourlySales = [];
  this.hoursOpen = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
}

//generates number of customers
Store.prototype.generateRandomCustomers = function(){
  return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr +1) + this.minCustomerHr);
};

//generates cookies sold
Store.prototype.generateCookieSales = function() {
  return Math.ceil(Math.random()*(this.avgCookieHr * this.generateRandomCustomers()));
};

//stores cookies sold per hour into an array, note push command
Store.prototype.generateCookiesPerHour = function(){
  for(var i = 0; i < this.hoursOpen.length; i++){
    this.hourlySales.push(this.generateCookieSales());
  }
};

//following functions generate the table, prototype helps save memory
Store.prototype.generateTableRows = function() {

  var rowHours, showHoursRow, rowName;
  rowHours = document.createElement('tr');
  rowName = document.createElement('td');
  rowHours.appendChild(rowName);

  rowName.textContent = this.name;

  for(var i = 0; i < this.hoursOpen.length; i++){
    showHoursRow = document.createElement('td');
    showHoursRow.textContent = this.hourlySales[i];
    rowHours.appendChild(showHoursRow);
  }
  salesTable.appendChild(rowHours);
};

Store.prototype.generateTableHeading = function() {
  var tableHeadingRow = document.createElement('tr');
  var tableHeading = document.createElement('th');
  tableHeading.textContent = 'Store Name';
  tableHeadingRow.appendChild(tableHeading);

  for(var i = 0; i < this.hoursOpen.length; i++){
    var showHoursRow = document.createElement('th');
    showHoursRow.textContent = this.hoursOpen[i];
    tableHeadingRow.appendChild(showHoursRow);

    salesTable.appendChild(tableHeadingRow);
  }
};

//new store invoking functions to populate generated data
var pikeStore = new Store('1st and Pike', 12, 13, 3.4);
pikeStore.generateCookiesPerHour();
pikeStore.generateTableHeading();
pikeStore.generateTableRows();

var seaTacAirportStore = new Store('Sea-Tac Airport', 3, 24, 1.2);
seaTacAirportStore.generateCookiesPerHour();
seaTacAirportStore.generateTableRows();

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.generateCookiesPerHour();
seattleCenter.generateTableRows();

var capHillStore = new Store('Capitol Hill', 20, 38, 2.3);
capHillStore.generateCookiesPerHour();
capHillStore.generateTableRows();

var alkiStore = new Store('Alki Beach', 2, 16, 4.6);
alkiStore.generateCookiesPerHour();
alkiStore.generateTableRows();
