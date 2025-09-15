document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("fishy");
    console.log("break");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const newObject = {model: formData.get("model") , gears: formData.get("gears") , components: formData.get("components") , tirewidth: formData.get("tirewidth") , weight: formData.get("weight") };
       console.log(newObject);
        for(const [key, value] of formData.entries()){
            console.log(`${key}: ${value}`);
        }
        var mydata = JSON.parse(localStorage.getItem("data"));
        mydata.push(newObject);
        localStorage.setItem("data", JSON.stringify(mydata));
        alert("added new row: " + newObject.model);
        window.location.href = "index.html"
    });
});
