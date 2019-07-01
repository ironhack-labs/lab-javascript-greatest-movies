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

  ratingByKeyValues(arr, key) {

    // Create array of key:value pairs, where the "keys" are the values for the key input above...
    // ... and the "value" is an array of movie objects 
    
    
    

    };

    
  }

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

var key = "year";
var ratingByKeyValues = imdbManager.ratingByKeyValues(moviesCleaned, key);
console.log(ratingByKeyValues);






// ratingByKeyValues(arr, key) {

//   // Get array of all values for the key
//   let arrOfValues = arr.map(element => element[key]);

//   // Get just unique values of the key
//   function onlyUnique(value, index, self) {   // Function returns true only on first instance of element in array
//     return self.indexOf(value) === index;
//   }
//   let arrOfValuesUnique = arrOfValues.filter(onlyUnique).sort((a,b) => a - b);

//   // For each value of the key, get the average rating, and store both
//   let avgRatingsByValue = [];

//   arrOfValuesUnique.forEach(element => {
    
//   });

  
// }