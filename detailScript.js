const queryString = window.location.search;

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
