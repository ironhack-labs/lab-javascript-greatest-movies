/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/***************************************
 * 
 * Using Regex
 * 
 ****************************************/

function turnHoursToMinutes(movieArray) {
    let movies = movieArray.map(function (oneMovieObject) {

        // Spread notation to make a copy of the object 
        let newMovieObjects = { ...oneMovieObject };

        // 
        let durationArray = newMovieObjects.duration.match(/\d+/g);

        // 
        if (newMovieObjects.duration.includes("h") === false) {

            newMovieObjects.duration = parseInt(durationArray[0]);
            console.log(durationArray[0]);

        } else if (newMovieObjects.duration.includes("min") === false) {

            newMovieObjects.duration = parseInt(durationArray[0] * 60);
            console.log(durationArray[0]);

        }
        else {
            newMovieObjects.duration = parseInt(durationArray[0] * 60) + parseInt(durationArray[1]);
        }
        return newMovieObjects;

    });

    return movies;


}

// Get the average of all rates with 2 decimals 
function ratesAverage(anArray) {

    // sum var holds value (starting from 0) adding each 
    //rate value in each object in the array
    let sum = anArray.reduce(function (accumulator, currentRating) {

        //convert rate to number in order to add 
        return accumulator + Number(currentRating.rate);
    }, 0)

    //avg rounded to 2 decimal spaces
    avg = (sum / anArray.length).toFixed(2);
    console.log(avg);

}

ratesAverage(movies);

// Get the average of Drama Movies

function dramaMoviesRate(anArray) {
    let sum = 0;

    // create var to hold new array 
    let dramaMovies = anArray.filter(function (movie) {

        // if the rate value is an array
        if (Array.isArray(movie.genre)) {
            // turn the array into a string
            let listGenres = movie.genre.join();

            //if the string contains drama 
            if (listGenres.includes("Drama")) {
                //Add the rate of this movie to our sum for later
                sum += Number(movie.rate);

                // return (send it to) the new array we are making  
                return movie.genre;
            }

        }

        if (movie.genre === "Drama") {
            //Add the rate of this movie to our sum for later
            sum += Number(movie.rate);
        }

        // if value of rate is Drama,return (send it to) the new array we are making 
        return movie.genre === "Drama";

    });

    //outside of filter
    console.log(sum);

    //avg will be the sum divided by the # of movies in filtered array
    let avg = (sum / dramaMovies.length).toFixed(2);
    console.log(avg);

    // if i need to see filter worked properly 
    return dramaMovies;

}

dramaMoviesRate(movies);

// Order by time duration, in growing order
function turnHoursToMinutes(arrayOfMovies)
  {
      let newArray = arrayOfMovies.map((eachMovie)=>{

        let newMovieObject = {...eachMovie};
        let stringOfTime = newMovieObject.duration;

        if(stringOfTime.includes('h') && stringOfTime.includes('min')){

        let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
        let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
        let numberOfMinutes = parseInt(arrayWithHoursAndMinutesSeparately[1]);
        newMovieObject.duration = numberOfHours*60 + numberOfMinutes;
        } else if (stringOfTime.includes('h'))
        {

        let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
        let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
        newMovieObject.duration = numberOfHours*60
        } else {
          newMovieObject.duration = parseInt(stringOfTime);
        }
        return newMovieObject
      })
      return newArray;
  }

  function orderByDuration(anArray)
  {

      let updatedMovies = turnHoursToMinutes(anArray);
      updatedMovies.sort((a,b)=>{
      if(a.duration < b.duration){
          return -1
        } else if (b.duration < a.duration){
          return 1
        } else {
          return 0
        }

      })

    return updatedMovies;
  }


// How many movies did STEVEN SPIELBERG
function howManyMovies(anArray) {

    // create var to hold new array 
    let dramaMovies = anArray.filter(function (movie) {

        // if the rate value is an array
        if (Array.isArray(movie.genre)) {
            // turn the array into a string
            let listGenres = movie.genre.join();

            //if the string contains drama 
            if (listGenres.includes("Drama")) {
                // return (send it to) the new array we are making  
                return movie.genre;
            }

        }
 
        return movie.genre === "Drama";

    });

    let dramaSpeilMovies = dramaMovies.filter(function(movie) {

        // if the rate value is an array
        if (Array.isArray(movie.director)) {
            // turn the array into a string
            let listDirectors = movie.director.join();

            //if the string contains drama 
            if (listDirectors.includes("Steven Spielberg")) {
                // return (send it to) the new array we are making  
                return movie.director;
            }

        }
 
        return movie.director === "Steven Spielberg";

    });
    // if i need to see filter worked properly 
    return dramaSpeilMovies.length;

}

howManyMovies(movies);

// Order by title and print the first 20 titles


// Best yearly rate average
