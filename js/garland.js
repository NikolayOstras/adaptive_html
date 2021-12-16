const density = 0.35;//плотность гирлянды 0-1
let led=document.getElementsByClassName("led");
ledWidth=led[0].offsetWidth;
var bottomRow=document.getElementById("garland__bottom_row");
var topRow=document.getElementById("garland__top_row");
var garlandWidth = document.getElementById("garland").offsetWidth;//ширина блока гирлянды
var amount = (garlandWidth*density)/ledWidth;//адаптивное колличество ламп
console.log(garlandWidth,ledWidth , amount);
var colors =["red", "green", "blue"];
//проверка на зацикливание
if (amount===Infinity){
    amount=10;
}
function addLed(parent){
    let led=document.createElement("span");
    parent.appendChild(led);
    led.classList.add("led");
    let randomColor = Math.floor(Math.random()*3);
    led.classList.add(colors[randomColor]);
}
for(let i =0; i<amount;i++){
    addLed(topRow)
}
for(let i =0; i<amount;i++){
    addLed(bottomRow)
}