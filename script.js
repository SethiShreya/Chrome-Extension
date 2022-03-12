fetch('http://api.quotable.io/random').then(data=>data.json())
    .then(jokeData=>{
        const jokeText= jokeData.content;
        const jokeElement= document.getElementById('JokeElement');
        jokeElement.innerHTML= jokeText;
        const head= document.getElementById('head');
        head.innerHTML= "QUOTE OF THE DAY";
    }
    )