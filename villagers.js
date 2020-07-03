const apiurl = 'http://acnhapi.com/v1/villagers/';


// async function getData() {
//     const response = await fetch(apiurl);
//     const data = await response.json();
//     console.log(data.image_uri);

//     Document.getElementById('image').src = data.image_uri;
//     // var myDiv = Document.getElementById('image');
//     // myDiv.innerHTML.src = data.image_uri;
    
// }

// getData();
for(var i = 1; i <= 391; i++) {
var api = "http://acnhapi.com/v1/villagers/".concat(i);
fetch(api)
    .then(res => res.json())
    .then(data => {
        var img = document.createElement("img");
        img.src = data.image_uri;
        document.getElementById('main').appendChild(img);
    });

}