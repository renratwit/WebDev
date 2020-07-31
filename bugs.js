var bugsList = [];

//insert all bugs upon loading
var count = 0;
for(var i = 1; i <= 80; i++) {
    var api = "https://acnhapi.com/v1/bugs/".concat(i);    
    insertBugs(api);
    count++;
}
console.log("total: " + count);

function insertBugs(api) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            bugsList.push(data);

            //create the necessary HTML objects for each bug
            var main = document.getElementById('main');
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
            
            //display info when hovering
            let hoverData = data.name["name-USen"];
            img.title = hoverData;

            img.onclick = function() {
                console.log("image is clicked");
                document.getElementById('name').innerHTML ="Name: "  + data.name["name-USen"];
                document.getElementById('price').innerHTML = "Price: " + data.price;
                document.getElementById('months').innerHTML = "Months: " + data.availability["month-northern"];
                document.getElementById('time').innerHTML = "Time: " + data.availability["time"];
            };

        });//end api fetch;
        
}

