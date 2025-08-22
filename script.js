document.getElementById("savebutton").addEventListener("click",save);
document.getElementById("returnbutton").addEventListener("click",retrieve);
document.getElementById("maketablebutton").addEventListener("click",createTable);
const returned = document.getElementById("returned");
//object
let person = {name:""}

//saving function
function save(){
    person.name = document.getElementById("personname").value;
    
    console.log("Before saving: ", person.name);
    stringname = JSON.stringify(person.name);
    localStorage.setItem("names", stringname);

}
function retrieve(){
    retrieved = JSON.parse(localStorage.getItem("names"));
    
   returned.innerHTML = retrieved;
   console.log("After retrieving: ", retrieved);

}
function createTable(){
  //this is a variable which finds the biketab tag
  const tbody = document.getElementById("biketab");
  console.log(tbody)
  //cycle through the data set
  for(let i = 0; i < data.length; i++){
    //this creates a floating element called row with a tr tag name <tr>
    let row = document.createElement("tr");
    //this creates a floating element called indexCell with a td tag name <td>
    let indexCell = document.createElement("td");

      indexCell.innerHTML = i + 1;

      let modelCell = document.createElement("td");
      modelCell.innerHTML = data[i].model;

      let gearsCell = document.createElement("td");
      gearsCell.innerHTML = data[i].gears;

      let componentsCell = document.createElement("td");
      componentsCell.innerHTML = data[i].components;

      let tireWidthCell = document.createElement("td");
      tireWidthCell.innerHTML = data[i].tireWidth;

      let weightCell = document.createElement("td");
      weightCell.innerHTML = data[i].weight;

      row.appendChild(indexCell);
      row.appendChild(modelCell);
      row.appendChild(gearsCell);
      row.appendChild(componentsCell);
      row.appendChild(tireWidthCell);
      row.appendChild(weightCell);


      tbody.appendChild(row);
  }
}
