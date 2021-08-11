' use strict';


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function localstoreg() {

    localStorage.setItem('key', JSON.stringify(donator.all));
}

function update() {

    let getArr = JSON.parse(localStorage.getItem('key'));

    if (getArr !== null) {

        for (let i = 0; i < getArr.length; i++) {
            new donator(getArr[i].name, getArr[i].amount, getArr[i].age);


        }
    }
}

donator.all = [];

function donator(name, amount, age) {
    this.name = name;
    this.amount = amount;
    this.age = age;
    this.render();
    donator.all.push(this);
   
} 
localStorage(),
let tabel= Document.getElementById('tabel');
let tr;
let td1;
let td2;
let td3;
donator.prototype.render = function () {

    tr=document.createElement('td');
    tabel.appenChild(tr),

    td1=document.createElement('td');
    tr.appendChild(td1);

    td2=document.createElement('td');
    tr.appendChild(td2);

    td3=document.createElement('td');
    tr.appendChild(td3);


    td1.textContent = this.name;
    td2.textContent = this.amount;
    td3.textContent = this.age;

}

let form = document.getElementById('form');
form.addEventListener('submit', handel);

function handel(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let amount = event.target.amount.value;
    console.log(event);

   new donator(name,amount,age);
}

update();


let cleardata=document.getElementById('clear data');
cleardata.addEventListener('clear data');

function clear(){
    localStorage.clear();

}

