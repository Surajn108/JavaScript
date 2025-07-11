let ranP = 0
console.log(ranP)


let genpassEL = document.getElementById("GenP-el")

function genPassword(){
    ranP = Math.floor(Math.random()*999999)
    genpassEL.textContent = ranP
}