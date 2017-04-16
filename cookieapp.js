'use strict'


var salesTable = document.getElementById('salesTable');

//Object constructor for storeHours

function Store(name, minCustomerHr, maxCustomerHr, avgSalesHr) {
  this.name = name;
  this.openTime = 6;
  this.closeTime = 20;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.avgSalesHr = avgSalesHr;
  this.hourlySales = [];
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

}

//generate data for stores

Store.prototype.generateRandomCustomer = function() {
  Math.floor(Math.random() * (this.maxCustomerHr - this.minCustomerHr + 1) + this.minCustomerHr);
};

Store.prototype.generateSalesHr = function(){
  Math.floor(Math.random() * (this.avgSalesHr * this.generateRandomCustomer()) );
};

Store.prototype.generateCookieHr = function(){
  for( var i = 0; i < this.hoursOpen.length; i++){
    this.hourlySales.push(this.generateSalesHr());
  }
};


Store.prototype.generateTableHeading = function() {
  var headingRow = document.createElement('tr');
  var heading = document.createElement('td');
  heading.textContent = 'Store Name';
  headingRow.appendChild(heading);

  for(var i = 0; i < this.hoursOpen.length; i++) {
    var rowShowHours = document.createElement('th');
    rowShowHours.textContent = this.hoursOpen[i];
    headingRow.appendChild(rowShowHours);
  }
};



//table creation for data

Store.prototype.generateTableRows = function() {
  var hoursRow, rowShowHours, storeNameRow;
  hoursRow = document.createElement('tr');
  storeNameRow = document.createElement('td');
  hoursRow.appendChild(storeNameRow);
  storeNameRow.textContent = this.name;

  for(var i = 0; i < this.hoursOpen.length; i++) {
    rowShowHours = document.createElement('td');
    rowShowHours.textContent = this.hourlySales[i];
    hoursRow.appendChild(rowShowHours);
  }
  // salesTable.appendChild(hoursRow);
};


var pikeStore = new Store ('1st and Pike', 12, 13, 3.4);
pikeStore.generateCookieHr();
pikeStore.generateTableHeading();
pikeStore.generateTableRows();
