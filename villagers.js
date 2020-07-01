const apiurl = 'http://acnhapi.com/v1/villagers/1';

async function getData() {
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
}

getData();