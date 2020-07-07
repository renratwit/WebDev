const apiurl = 'http://acnhapi.com/v1/villagers/';

for(var i = 1; i <= 391; i++) {
var api = "http://acnhapi.com/v1/villagers/".concat(i);

fetch(api)
    .then(res => res.json())
    .then(data => {
        var main = document.getElementById('main');
        var villager = document.createElement('villager');

        var img = document.createElement("img");
        var name = document.createElement('name');
        name.innerHTML = data.name["name-USen"];
        

        img.src = data.image_uri;
        villager.appendChild(img);
        villager.appendChild(name);

        main.appendChild(villager);
        
        let hoverData = data.name["name-USen"];
        img.title = hoverData;

        img.onclick = function() {
            document.getElementById('name').innerHTML ="Name: "  + data.name["name-USen"];
            document.getElementById('personality').innerHTML = "Personality: " + data.personality;
            document.getElementById('birthday').innerHTML = "Birthday: " + data["birthday-string"];
            document.getElementById('gender').innerHTML = "Gender: " + data.gender;
        };

    });

}

function searchGender(gender){
    for(var i = 1; i <= 391; i++) {
        var api = "http://acnhapi.com/v1/villagers/".concat(i);

        fetch(api)
            .then(res => res.json())
            .then(data => {
                if(data.gender === gender) {
                    var img = document.createElement("img");
                    img.src = data.image_uri;
                    document.getElementById('main').appendChild(img);
                }
            })
    }
}

