const api = "https://acnhapi.com/v1/songs/";

for(var i = 1; i <= 95; i++) {
    fetch(api.concat(i))
        .then(res => res.json())
        .then(data => {
            var list = document.getElementById('songs');
            var song = document.createElement("div");
            var image = document.createElement("img");

            var photo = data.image_uri;
            image.src = photo;

            song.append(image);
            song.classList.add("song");
            list.append(song);

            var cover = document.getElementById('cover');
            cover.src = photo;

            image.addEventListener("click", function(){
                cover.src = image.src;
                document.getElementById('music').src = data.music_uri;
            });

            
        })
}