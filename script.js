document.getElementById("savebutton").addEventListener("click",save);
ducument.getElementById("lastbutton").addEventListener("click",lastEntry);
const returned = document.getElementById("returned")
//object
let person = {name:""}

//saving function
function save(){
    person.name = document.getElementById("personname").value
    console.log(person.name);
    stringname = JSON.stringify(person.name)
    localStorage.setItem("names", stringname);

}
function lastEntry(){
    retrieved = localStorage.getItem("names");
   returned.innerHTML = retrieved 
}


