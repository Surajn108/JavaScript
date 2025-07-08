
let count = 0 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function inc(){
    count +=1 
    console.log(count)
    countEl.textContent = count
    console.log(count)
}

function save(){
    let countStr = count +"-"
    saveEl.textContent += countStr
    
    count = 0


}