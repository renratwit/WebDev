const apiurl = 'http://acnhapi.com/v1/villagers/';
var apiData;
for(var i = 1; i <= 391; i++) {
var api = "http://acnhapi.com/v1/villagers/".concat(i);

fetch(api)
    .then(res => res.json())
    .then(data => {
        var img = document.createElement("img");
        img.src = data.image_uri;
        apiData = data;
        document.getElementById('main').appendChild(img);
        let hoverData = data.name["name-USen"].concat("\n").concat(data.personality);
        console.log(hoverData);
        img.title = hoverData;

        img.onclick = function() {
            document.getElementById('name').innerHTML = data.name["name-USen"];
            document.getElementById('personality').innerHTML = data.personality;
            document.getElementById('birthday').innerHTML = data["birthday-string"];
            document.getElementById('gender').innerHTML = data.gender;
        };

    });

}
