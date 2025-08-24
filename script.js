document.getElementById("savebutton").addEventListener("click",save);
document.getElementById("returnbutton").addEventListener("click",retrieve);
document.getElementById("maketablebutton").addEventListener("click",createTable);
document.getElementById("removetablebutton").addEventListener("click",deleteTable);

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
  //console.log(tbody)
  //cycle through the data set

  for(let i = 0; i < data.length; i++){

    //this creates a floating element called indexCell with a td tag name <td>
    let indexCell = document.createElement("td");

    indexCell.innerHTML = i + 1;

    let linky = document.createElement("a");
    linky.href = "/detail.html?id=" + i
    linky.textContent = data[i].model;
    console.log(linky);

    let modelCell = document.createElement("td");
    modelCell.appendChild(linky);

    let gearsCell = document.createElement("td");
    gearsCell.innerHTML = data[i].gears;

    let componentsCell = document.createElement("td");
    componentsCell.innerHTML = data[i].components;

    let tireWidthCell = document.createElement("td");
    tireWidthCell.innerHTML = data[i].tireWidth;

    let weightCell = document.createElement("td");
    weightCell.innerHTML = data[i].weight;

    //this creates a floating element called row with a tr tag name <tr>
    let row = document.createElement("tr");

    row.appendChild(indexCell);
    row.appendChild(modelCell);
    row.appendChild(gearsCell);
    row.appendChild(componentsCell);
    row.appendChild(tireWidthCell);
    row.appendChild(weightCell);

    tbody.appendChild(row);
  }
}

function deleteTable(){
//  console.log("Hello World!");
  const tbody = document.getElementById("biketab");

  //console.log("Number of rows: ", tbody.childNodes.length);

  //console.log(tbody.childNodes.length);

  // keep the header row
  while (tbody.childNodes.length > 1) {
    tbody.childNodes[1].remove();
  }

}
