// function logger(name,age,school){
//     console.log("my name "  + name)
//     console.log("I am " +age+ " years old")
//     console.log( school+ " school")


// }
// logger("Bao", Math.sqrt(16)+3,"NH");


// mua=(rainy)=>{return!rainy?"di choi":"o nha"}
// console.log("di choi hay o nha: ",mua(true))
// console.log("di choi hay o nha: ",mua(false))


// const clickMebtn = document.getElementById("btn");
// const logger=()=>{
//     console.log("Hello")
// }
// clickMebtn.addEventListener("click",logger)


const username = document.getElementById("username")
const password = document.getElementById("password")

const submitbtn = document.getElementById("submitbtn")
  submitbtn.addEventListener("click",() => {
    if( username.value==="quocbao"&& password.value==="12345"){
        alert("dang nhap thanh cong")
    }
    else{
        alert("dang nhap that bai")
    }
  })
