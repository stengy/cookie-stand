'use strict'

//First store object


var operatingHours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']

var pikeStore = {

  storeName: '1st and Pike',
  salesHr: [],
  minCustomerHr: 23,
  maxCustomerHr: 65,
  avgSalesHr: 6.3,

// Calculates random number of customers, which a loop is then used
//loop runs to calculate number of sales based on random customer output
  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr)) + this.minCustomerHr;
  },

  hourlySales: function() {
    for (var i = 0; i < operatingHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];

    }
  },
}

//keyvalue pairs stored in objects & sales data calculated above
//are assigned to variables


var generateSalesData = pikeStore.hourlySales();
var getHourlycookieSales = pikeStore.salesHr;

//DOM is used to interact with the IDs assigned in HTML

var StoreName = document.getElementById('storeNameOne');
StoreName.textContent = pikeStore.storeName;

var storeHours = document.getElementById('hrCookieSalesOne');

//loop and DOM used to populate list of data above

var storeHoursLi;
for (var i = 0; i < operatingHours.length; i++ ){

  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = operatingHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Second store object

var airportStore = {

  storeName: 'SeaTac Airport ',

  salesHr: [],
  minCustomerHr: 3,
  maxCustomerHr: 24,
  avgSalesHr:1.2,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr)) + this.minCustomerHr;
  },

  hourlySales: function() {
    for (var i = 0; i < operatingHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
      // console.log(this.salesHr);
    }
  },
}

var generateSalesData = airportStore.hourlySales();
var getHourlycookieSales = airportStore.salesHr;

var StoreName = document.getElementById('storeNameTwo');
StoreName.textContent = airportStore.storeName;

var storeHours = document.getElementById('hrCookieSalesTwo');

var storeHoursLi;
for (var i = 0; i < operatingHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = operatingHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Third store object

var seaCenterStore = {

  storeName: 'Seattle Center',

  salesHr: [],
  minCustomerHr: 11,
  maxCustomerHr: 38,
  avgSalesHr:3.7,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr)) + this.minCustomerHr;
  },

  hourlySales: function() {
    for (var i = 0; i < operatingHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var generateSalesData = seaCenterStore.hourlySales();
var getHourlycookieSales = seaCenterStore.salesHr;

var StoreName = document.getElementById('storeNameThree');
StoreName.textContent = seaCenterStore.storeName;

var storeHours = document.getElementById('hrCookieSalesThree');

var storeHoursLi;
for (var i = 0; i < operatingHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = operatingHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fourth store object
var capHillStore = {

  storeName: 'Capitol Hill',

  salesHr: [],
  minCustomerHr: 20,
  maxCustomerHr: 38,
  avgSalesHr:2.3,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr)) + this.minCustomerHr;
  },

  hourlySales: function() {
    for (var i = 0; i < operatingHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var generateSalesData = capHillStore.hourlySales();
var getHourlycookieSales = capHillStore.salesHr;

var StoreName = document.getElementById('storeNameFour');
StoreName.textContent = capHillStore.storeName;

var storeHours = document.getElementById('hrCookieSalesFour');

var storeHoursLi;
for (var i = 0; i < operatingHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = operatingHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fifth store object
var alkiStore = {

  storeName: 'Alki Beach',

  salesHr: [],
  minCustomerHr: 2,
  maxCustomerHr: 16,
  avgSalesHr:4.6,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr - this.minCustomerHr)) + this.minCustomerHr;
  },

  hourlySales: function() {
    for (var i = 0; i < operatingHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var generateSalesData = alkiStore.hourlySales();
var getHourlycookieSales = alkiStore.salesHr;

var StoreName = document.getElementById('storeNameFive');
StoreName.textContent = alkiStore.storeName;

var storeHours = document.getElementById('hrCookieSalesFive');

var storeHoursLi;
for (var i = 0; i < operatingHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = operatingHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}
