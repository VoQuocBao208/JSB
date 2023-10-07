const loginform=document.getElementById("login")
loginform.addEventListener("submit",(event)=>{
    event.preventDefault();
    const text=document.getElementById("mail")
    const password=document.getElementById("word")
    console.log(text.value)
    console.log(password.value)
})