const apiurl = 'http://acnhapi.com/v1/villagers/';

for(var i = 1; i <= 391; i++) {
var api = "http://acnhapi.com/v1/villagers/".concat(i);

fetch(api)
    .then(res => res.json())
    .then(data => {
        var img = document.createElement("img");
        img.src = data.image_uri;
        document.getElementById('main').appendChild(img);
        let hoverData = data.name["name-USen"].concat("\n").concat(data.personality);
        console.log(hoverData);
        img.title = hoverData;
        
    });

}