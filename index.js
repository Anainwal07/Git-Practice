const myApp = () => {
    console.log("THis is my App");
}
const Place = () => {
    setTimeout(myApp , 3000) ;// It will run after 3 seconds 
}

console.log("Where r we ? ");

Place() ;