document.getElementById("saveeditbutton").addEventListener("click",saveEdits);
document.getElementById("canceleditbutton").addEventListener("click",cancelEdits);
document.getElementById("goToEditScreen").addEventListener("click",editScreen);

const queryString = window.location.search;

const arrayOfTypes = ["model", "gears", "components", "tirewidth", "weight"];

const parts = document.getElementById("parts");

const edits = document.getElementById("edits");

// Parse it using URLSearchParams
const parameters = new URLSearchParams(queryString);

// Example: Get a query parameter named 'id'
const id = parameters.get('id');

//const stringedits = JSON.stringify(data);




let fish = JSON.parse(localStorage.getItem("data"));

for(let i = 0; i<data.length; i++){
    if(i == id){
        document.getElementById("detailinfo").innerHTML = "Model: " + fish[id].model
         + "<br/>Gears: " + fish[id].gears
         + "<br/>Components: " + fish[id].components
         + "<br/>Tire Width: " + fish[id].tireWidth
         + "<br/>Weight: " + fish[id].weight;
 
    }
}

function saveEdits(){
    
    console.log(localStorage);


    for(let c = 0; c < arrayOfTypes.length; c++){
        if(parts.value == arrayOfTypes[c]){

            console.log (arrayOfTypes[c]);

            //changed is the thing to be changed from the dropdown menu.
            changed = arrayOfTypes[c];
            console.log(typeof changed);
            //change is the type from the data set of that object. ex. Model-013
            change = data[id][changed];
//            console.log(change);

 //           console.log(edits.value);

//            data[id][changed] = edits.value;
//            console.log (data[id][changed]);


            tobechanged = JSON.parse(localStorage.getItem("data"));
            tobechanged[id][changed] = edits.value;

            newdata = tobechanged;
            newnewdata = JSON.stringify(newdata)
            localStorage.setItem("data", newnewdata);
            console.log(localStorage);

            


        }
    }

}
function cancelEdits(){
    document.getElementById("edits").value = ""
}

function editScreen(){
    editing = document.getElementById("editItem");
    console.log(editing);
    if(editing.style.display === "none"){
        editing.style.display = "block"

    }else{
        editing.style.display = "none"
    }

}