var btn = document.getElementById('btn');
var text = document.getElementById('query');
var poster = document.getElementsByTagName('img');
var info = document.getElementsByTagName('p');
var rating = document.getElementsByTagName('span');
btn.addEventListener('click',function(){
var title = text.value; 
var titleurl = title.replace(" ","+");
var url = "http://www.omdbapi.com/?t="+titleurl+"&apikey=547d4897";

$.get(url, function (data) {
    if (data.Response=='True') {
        
        if (data.Poster) {
            poster[0].src = data.Poster;
        }
        else{
            poster[0].src = '2.png';
        }

        if (data.Plot) {
            info[0].textContent = data.Plot;
        }

        if (data.imdbRating) {
            const inner = document.createElement('i');
            inner.setAttribute('class','fab fa-imdb');
            rating[0].appendChild(inner);
            rating[0].textContent = data.imdbRating;
        }
    } else {
        alert("Movie Not found. Try typing the name correcly");
    }
});

});