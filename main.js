var bugsList = [];

//insert all bugs upon loading
var date = new Date();
var month = date.getMonth() + 1;

for(var i = 1; i <= 80; i++) {
    var api = "https://acnhapi.com/v1/bugs/".concat(i);  
    fetch(api)
        .then(res => res.json())
        .then(data => {
            bugsList.push(data);
            console.log("checking " + month + " and " + data.availability["month-array-northern"]);
            
            if(data.availability["month-array-northern"].includes(month)){
                console.log("yes " + data.name["name-USen"] + " is available now");
               //create the necessary HTML objects for each bug
                var main = document.getElementById('dailyBugs');
                var bug = document.createElement('div');
                bug.classList.add("bug");
                var img = document.createElement("img");
                var name = document.createElement('div');
                name.classList.add("name");

                //set the name and image of bug
                name.innerHTML = data.name["name-USen"];
                img.src = data.image_uri;

                //append the name and image to the bug element
                bug.appendChild(img);
                bug.appendChild(name);

                //append the bug to the main area of the page
                main.appendChild(bug);
            }

        });//end api fetch;
}
