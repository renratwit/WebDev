const apiurl = 'https://acnhapi.com/v1/bugs/';

var bugsList = [];

//insert all bugs upon loading
for(var i = 1; i <= 391; i++) {
    var api = "https://acnhapi.com/v1/bugs/".concat(i);    
    insertBugs(api);
}

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

            //set the name and image of villager
            name.innerHTML = data.name["name-USen"];
            img.src = data.image_uri;

            //append the name and image to the villager element
            bug.appendChild(img);
            bug.appendChild(name);

            //append the bug to the main area of the page
            main.appendChild(bug);
            
            //display infor when hovering
            let hoverData = data.name["name-USen"];
            img.title = hoverData;

            img.onclick = function() {
                console.log("image is clicked");
                document.getElementById('name').innerHTML ="Name: "  + data.name["name-USen"];
                document.getElementById('personality').innerHTML = "Price: " + data.price;
                document.getElementById('birthday').innerHTML = "Months: " + data.availability["month-northern"];
                document.getElementById('gender').innerHTML = "Time: " + data.availability["time"];
            };

        });//end api fetch;
        
}
