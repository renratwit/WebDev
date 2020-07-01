const apiurl = 'http://acnhapi.com/v1/villagers/1';


async function getData() {
    const response = await fetch(apiurl);
    const data = await response.json();

    var myDiv = Document.getElementById('image');
    myDiv.innerHTML = <img src= {data.image_uri}></img>
    console.log(data.image_uri);
}

getData();