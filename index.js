const myApp = () => {
    console.log("I'm fine Thankyou");
}
const Howudoin = () => {
    setTimeout(myApp , 3000) ;// It will run after 3 seconds 
}
const WhatIsName = () => {
    setTimeout(askname , 3000) ; //It will run after 3 seconds 
}

console.log("What is your name");
console.log("Hello How are you");


Howudoin() ;