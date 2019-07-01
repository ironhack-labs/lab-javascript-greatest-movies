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

  ratingAvgForGenre(arr, genre) {
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

  topNAlphabetically(arr, n) {
    let arrTitles = arr.map(element => element.title);
    let arrTitlesSorted = arrTitles.sort((a,b) => {
      if (a < b) {return -1};
      if (a > b) {return 1};
      if (a === b) {return 0};
    });
    let arrTopNTitlesSorted = arrTitlesSorted.slice(0, n);
    return arrTopNTitlesSorted;
  }

  ratingByYear(arr) {

    // Create object containing keys (years), and their values (an array of movie objects) 
    
    let moviesByYear = {};

    for(let i=0; i<arr.length; i++) {
      let year = arr[i].year;
      let movieObj = arr[i];

      // Check if year already exists in moviesByYear. If it does, just push the extra movie ...
      // ... if it doesn't, create a new key (the year), with value as an array with first movie in
      if(moviesByYear[year]) {
        moviesByYear[year].push(movieObj);
        } else {
        moviesByYear[year] = [movieObj];
      };
    };

    // Now go through each year, and calculate the average rating
    let avgRatingsByYear = {};
    for(let i=0; i<Object.keys(moviesByYear).length; i++) {
      avgRatingsByYear[Object.keys(moviesByYear)[i]] = this.ratingAvg(moviesByYear[Object.keys(moviesByYear)[i]]);  // Q: Simpler way to do this??
    }

    // Now find the year with the top rating

    let topYear = Object.keys(avgRatingsByYear).reduce((a, b) => avgRatingsByYear[a] > avgRatingsByYear[b] ? a : b);
    let topRating = avgRatingsByYear[topYear];

    let answer = [topYear, topRating]; // Better way of outputting here?

    return answer;

  };

};


// Run things

imdbManager = new imdbManager();

var moviesCleaned = imdbManager.turnDurationsToMinutes(movies);
console.log("Changed all durations to minutes!")

var avgRating = imdbManager.ratingAvg(moviesCleaned);
console.log(`Average rating is: ${avgRating}`);

var genre = "Drama";
var ratingAvgForGenre = imdbManager.ratingAvgForGenre(moviesCleaned, genre);
console.log(`Average rating for ${genre} movies is: ${ratingAvgForGenre}`);

var director = "Steven Spielberg";
var countByDirector = imdbManager.countByDirector(moviesCleaned, director);
console.log(`Number of movies by ${director} is: ${countByDirector}`);

var n = 10;
topNAlphabetically = imdbManager.topNAlphabetically(moviesCleaned, n);
console.log(`Top ${n} movies alphabetically are:`);
for(let i=0; i<topNAlphabetically.length; i++) {
  console.log(topNAlphabetically[i]);
};

var topYearAndRating = imdbManager.ratingByYear(moviesCleaned);
console.log(`The top year was ${topYearAndRating[0]}, with a rating of ${topYearAndRating[1]}`);