let movies = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    }
]

const h = movie => {
    let { duration } = movie;

    if(duration.split('').includes("h") && duration.split('').includes("m")){
        let hours = duration.split('h')[0] * 60;
        let minutes = duration.split("h")[1].slice(0, duration.split("h")[1].length - 3);
        let sum = hours + parseInt(minutes);
        movie.duration = sum;
        return movie;
    } else if(duration.split('').includes("h")) {
        let hours = duration.split('h')[0] * 60;
        movie.duration = parseInt(hours);
        return movie;
    } else if(duration.split('').includes("m")){
        let minutes = duration.slice(0, -3);
        movie.duration = +minutes;
        return movie;
    } else {
        movie.duration = 0;
        return movie;
    } 
}

movie = {duration: "2h 20min"};
// h(movie)
console.log(h(movie));

const turnHoursToMinutes = hoursIntoMinutesMovies => {
    arrayOfMovies = [...hoursIntoMinutesMovies]
    return arrayOfMovies.map( h );
}

console.log(turnHoursToMinutes(movies));