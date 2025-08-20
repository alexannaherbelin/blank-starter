document.getElementById("savebutton").addEventListener("click",save);
document.getElementById("returnbutton").addEventListener("click",retrieve);
const returned = document.getElementById("returned")
//object
let person = {name:""}

//saving function
function save(){
    person.name = document.getElementById("personname").value
    
    console.log("Before saving: ", person.name);
    stringname = JSON.stringify(person.name);
    localStorage.setItem("names", stringname);

}
function retrieve(){
    retrieved = JSON.parse(localStorage.getItem("names"));
    
   returned.innerHTML = retrieved;
   console.log("After retrieving: ", retrieved);

}
