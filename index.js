const myApp = () => {
    console.log("I'm fine Thankyou");
}

const askname = () => {
    console.log("My name is Divyanshi")
}
const addressPucho = () => {
    console.log("I live in Garhwal , Uttrakhand")
}
const meetingPucho = () => {
    console.log("Yead Sure !") ;
}

const NumberPucho = () => {
    console.log("09290092342") ;
}


const Howudoin = () => {
    setTimeout(myApp , 3000) ;// It will run after 3 seconds 
}
const WhatIsName = () => {
    setTimeout(askname , 3000) ; //It will run after 3 seconds 
}
const AdressKyahaiAapka = () => {
    setTimeout(addressPucho , 3000) ; //It will run after 3 seconds
}
const CanweMeet = () => {
    setTimeout(meetingPucho , 3000) ; //It will run after 3 seconds
}
const WhatisyourNumber = () => {
    setTimeout(NumberPucho , 3000) ; //It will run after 3 seconds
}
console.log("What is your name ?");
console.log("Hello How are you ?");
console.log("Where do you live ?") ;
console.log("Whats your number ?") ;
console.log("Can we meet ?") ;

WhatIsName() ;
Howudoin() ;
AdressKyahaiAapka() ;
WhatisyourNumber() ;
CanweMeet() ;
