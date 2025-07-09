let a = 0
let b = 0


document.getElementById("teamA").textContent += a
document.getElementById("teamB").textContent += b

let AEl = document.getElementById("teamA")
let BEl = document.getElementById("teamB")

function incA(){
    
    a += 1
    document.getElementById("teamA").textContent = a
}

function incB(){
    b += 1
    document.getElementById("teamB").textContent = b
}

function reset(){
    document.getElementById("teamA").textContent = 0
    document.getElementById("teamB").textContent = 0

}