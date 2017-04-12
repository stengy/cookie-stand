'use strict'

//First store object
var pikeStore = {

  storeName: '1st and Pike',
  storeHours: ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  salesHr: [],
  minCustomerHr: 23,
  maxCustomerHr: 65,
  avgSalesHr: 6.3,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr / this.minCustomerHr));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
      // console.log(this.salesHr);
    }
  },
}

var getStoreHours = pikeStore.storeHours;
var generateSalesData = pikeStore.hourlySales();
var getHourlycookieSales = pikeStore.salesHr;

var StoreName = document.getElementById('StoreName');
StoreName.textContent = pikeStore.storeName;

var storeHours = document.getElementById('CookieHourlySales');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){

  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Second store object

var airportStore = {

  storeName: 'SeaTac Airport ',
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  salesHr: [],
  minCustomerHr: 3,
  maxCustomerHr: 24,
  avgSalesHr:1.2,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr / this.minCustomerHr));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
      // console.log(this.salesHr);
    }
  },
}

var getStoreHours = airportStore.storeHours;
var generateSalesData = airportStore.hourlySales();
var getHourlycookieSales = airportStore.salesHr;

var StoreName = document.getElementById('StoreNameTwo');
StoreName.textContent = airportStore.storeName;

var storeHours = document.getElementById('CookieHourlySalesSecondStore');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Third store object

var seaCenterStore = {

  storeName: 'Seattle Center',
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  salesHr: [],
  minCustomerHr: 11,
  maxCustomerHr: 38,
  avgSalesHr:3.7,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr / this.minCustomerHr));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var getStoreHours = seaCenterStore.storeHours;
var generateSalesData = seaCenterStore.hourlySales();
var getHourlycookieSales = seaCenterStore.salesHr;

var StoreName = document.getElementById('StoreNameThree');
StoreName.textContent = seaCenterStore.storeName;

var storeHours = document.getElementById('CookieHourlySalesThirdStore');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fourth store object
var capHillStore = {

  storeName: 'Capitol Hill',
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  salesHr: [],
  minCustomerHr: 20,
  maxCustomerHr: 38,
  avgSalesHr:2.3,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr / this.minCustomerHr));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var getStoreHours = capHillStore.storeHours;
var generateSalesData = capHillStore.hourlySales();
var getHourlycookieSales = capHillStore.salesHr;

var StoreName = document.getElementById('StoreNameFourth');
StoreName.textContent = capHillStore.storeName;

var storeHours = document.getElementById('CookieHourlySalesFourthStore');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}

//Fifth store object
var alkiStore = {

  storeName: 'Alki Beach',
  storeHours: ['6am', '7am','8am','19am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  salesHr: [],
  minCustomerHr: 2,
  maxCustomerHr: 16,
  avgSalesHr:4.6,

  randomCustomerHr: function() {
    return Math.ceil(Math.random() * (this.maxCustomerHr / this.minCustomerHr));
  },

  hourlySales: function() {
    for (var i = 0; i < this.storeHours.length; i++){
      this.salesHr.push(Math.ceil(Math.random()*(this.avgSalesHr * this.randomCustomerHr())))[i];
    }
  },
}

var getStoreHours = alkiStore.storeHours;
var generateSalesData = alkiStore.hourlySales();
var getHourlycookieSales = alkiStore.salesHr;

var StoreName = document.getElementById('StoreNameFifth');
StoreName.textContent = alkiStore.storeName;

var storeHours = document.getElementById('CookieHourlySalesFifthStore');

var storeHoursLi;
for (var i = 0; i < getStoreHours.length; i++ ){
  storeHoursLi = document.createElement('li');
  storeHoursLi.textContent = getStoreHours[i] + ' : ' + getHourlycookieSales[i] + ' Cookies';
  storeHours.appendChild(storeHoursLi);
}
