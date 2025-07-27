// To DO APP
let btnEl = document.querySelector("button");
let inpEl = document.querySelector("input");
let ulEl = document.querySelector("ul");


btnEl.addEventListener("click",function(){



    let iteam = document.createElement("li");
    iteam.innerText = inpEl.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
   
    ulEl.appendChild(iteam);
    iteam.appendChild(delBtn)
    //pEl.innerText = inpEl.value 
    //console.log(inpEl.value)
    inpEl.value = "";
})


ulEl.addEventListener("click" , function(event){
    
    if(event.target.nodeName == "BUTTON"){
        let ListIteam = event.target.parentElement;
        ListIteam.remove();
        console.log("Deleted")
   
    }

})
