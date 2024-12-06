// let modebtn = document.querySelector("#btn1")
// let currmode = "light";
// let body = document.querySelector("body")


// modebtn.addEventListener("dblclick", () => {
//     if (currmode === "light") {
//         currmode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
//     }
//     else {
//         currmode = "light"
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currmode)
// })

let btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("black")
    
})
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("red")
    
})
let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("green")
    
})
let btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("gray")
    
})
let btn5 = document.querySelector("#btn5")
btn5.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("pink")
    
})
let btn6 = document.querySelector("#btn6")
btn6.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("blue")
    
})
let btn7 = document.querySelector("#btn7")
btn7.addEventListener("click", () =>{
    document.querySelector("body").style.backgroundColor = ("pink")
    
})
