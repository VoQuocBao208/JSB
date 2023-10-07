// bai1
// function min(a,b){
//     return Math.min(a,b)
// }
// const result1 = min(2,5);
// console.log(result1)
// function min(c,d){
//     return Math.min(c,d)
// }
// const result2 = min(4,-1);
// console.log(result2)
// function min(e,f){
//     return Math.min(e,f)
// }
// const result = min(3,3);
// console.log(result)


// bai2

// const showsearchadvanced=document.getElementById("show_search_advance")
//    showsearchadvanced.addEventListener("click",()=>{ 
//       showsearchadvanced.style.display
     
// })


// bai3

const rows=document.querySelectorAll(".row")
const btnrow=document.querySelectorAll(".btn_row")
console.log(btnrow)
for (let i = 0; i < btnrow.length; i++) {
   btnrow[i].addEventListener("click" , () => {
       rows[i].remove()
   } ) 

   }
   

