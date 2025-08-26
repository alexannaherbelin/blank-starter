document.getElementById("saveeditbutton").addEventListener("click",saveEdits);
document.getElementById("canceleditbutton").addEventListener("click",cancelEdits);

const queryString = window.location.search;

const arrayOfTypes = ["model", "gears", "components", "tirewidth", "weight"];

const parts = document.getElementById("parts");

const edits = document.getElementById("edits");

// Parse it using URLSearchParams
const parameters = new URLSearchParams(queryString);

// Example: Get a query parameter named 'id'
const id = parameters.get('id');
console.log(id);

for(let i = 0; i<data.length; i++){
    if(i == id){
        document.getElementById("detailinfo").innerHTML = "Model: " + data[id].model
         + "<br/>Gears: " + data[id].gears
         + "<br/>Components: " + data[id].components
         + "<br/>Tire Width: " + data[id].tireWidth
         + "<br/>Weight: " + data[id].weight;
 
    }
}

function saveEdits(){



    for(let c = 0; c < arrayOfTypes.length; c++){
        if(parts.value == arrayOfTypes[c]){

            console.log (arrayOfTypes[c]);

            //changed is the thing to be changed from the dropdown menu.
            changed = arrayOfTypes[c];
            console.log(typeof changed);
            //change is the type from the data set of that object. ex. Model-013
            change = data[id][changed];
            console.log(change);

            console.log(edits.value);

            data[id][changed] = edits.value;
            console.log (data[id][changed]);
            
            


        }
    }

}
function cancelEdits(){

}