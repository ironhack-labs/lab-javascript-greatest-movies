/* eslint no-restricted-globals: 'off' */

class imdbManager{

  turnDurationsToMinutes(arr) {

    function getHours(str) {
      let hours = str.slice(0, str.indexOf("h"));
      hours = parseInt(hours);
      return hours;
    }

    function getMins(str) {
      let mins = str.slice(str.indexOf(" ") + 1, str.indexOf("mins"));
      mins = parseInt(mins);
      return mins;
    }

    let newArr = arr.map(element => {
      let hours = getHours(element.duration);
      let mins = getMins(element.duration);
      let totalMins = hours*60 + mins;
      element.duration = totalMins;
      return element;
      });
    return newArr;
  }

  ratingAvg(arr) {
    let totalRating = arr.reduce( (sum, element) => sum + parseFloat(element.rate), 0);
    let avgRating = (totalRating / arr.length).toFixed(2);
    return avgRating;
  };

  ratingAvgByGenre(arr, genre) {
    let arrFiltered = arr.filter( element => element.genre.includes(genre) );
    let totalRating = arrFiltered.reduce( (sum, element) => sum + parseFloat(element.rate), 0);
    let avgRating = (totalRating / arrFiltered.length).toFixed(2);
    return avgRating;    
  }

  countByDirector(arr, director) {
    let arrFiltered = arr.filter(element => element.director === director); 
    let count = arrFiltered.length;
    return count;
  }

};


// Run things

imdbManager = new imdbManager();

var moviesCleaned = imdbManager.turnDurationsToMinutes(movies);
console.log("Changed all durations to minutes!")

var avgRating = imdbManager.ratingAvg(moviesCleaned);
console.log(`Average rating is: ${avgRating}`);

var genre = "Drama";
var ratingAvgByGenre = imdbManager.ratingAvgByGenre(moviesCleaned, genre);
console.log(`Average rating for ${genre} movies is: ${ratingAvgByGenre}`);

var director = "Steven Spielberg";
var countByDirector = imdbManager.countByDirector(moviesCleaned, director);
console.log(`Number of movies by ${director} is: ${countByDirector}`);




// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
