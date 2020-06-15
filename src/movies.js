// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrayMovies) {
    const directorArray = arrayMovies.map(function(movie) {
        return movie.director;
    })
        return directorArray;
    }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array1) {

    if (array1.length === 0) {
        return 0;
      }

    const spielbergDrama = array1.filter(function(movie) {
      //checks to see if directore is Steven
      if(movie.director ==="Steven Spielberg") {
          //iterates over the genre key to see if drama
          for(let i = 0; i < movie.genre.length; i ++) {
            //returns movie if it is a drama
            if(movie.genre[i] === "Drama" ) {
              return movie;
            }
          }
      }
  
    })
    return spielbergDrama.length;
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array1) {

    if (array1.length === 0) {
      return 0;
    }
  
  const movieRating = array1.reduce(function(movieRating, current){
    
       return movieRating + current.rate;
 
  
  },0);
  let avgRating = movieRating / array1.length;
  
  return Number(avgRating.toFixed(2));
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {

    if (array.length === 0) {
      return 0;
    }
    //this array filters for movies that are drama and returns it
    const onlyDramaMovies = array.filter(function(movie) {
      if(movie.genre.indexOf('Drama') >= 0) {
        return movie;
      }
    });
    //tests to see if there are no drama movies

    if (onlyDramaMovies.length === 0) return 0;
  
    //this array reduces the drama movie ratings into onlyDramaMovies
    const dramaRating = onlyDramaMovies.reduce(function(accumu, currValue) {
        return accumu + currValue.rate;
  
    }, 0);
    let numOfDramaMovies = onlyDramaMovies.length;
    
    let avgRating = dramaRating / numOfDramaMovies;
  
   return Number(avgRating.toFixed(2));
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    if (array.length === 0) {
        return 0;
      }
    
      const sortedByYear = array.sort(function (movie1, movie2) {
        if(movie1.year === movie2.year) {
          if(movie1.title > movie2.title) return 1;
          if(movie1.title < movie2.title) return -1;
    
        }
        return movie1.year - movie2.year;
    
      });
    
      return sortedByYear;
    }
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let newArray = [];
    array.forEach(function(elem) {
      newArray.push(elem);
    })
    
      //sort the array alphabetically
      const sortedByAlpha = newArray.sort(function (movie1,movie2) {
        if(movie1.title < movie2.title) return -1;
        if(movie1.title > movie2.title) return 1;
    
      });
      const onlyTitles = sortedByAlpha.map(function(movie) {
        return movie.title;
      });
    
      if(sortedByAlpha.length > 20) {
        let array20 = [];
    
        for(let i = 0; i < 20; i ++) {
          array20.push(onlyTitles[i]);
        }
        return array20;
      } 
      else return onlyTitles;
    
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let newArray = [];
    array.forEach(function(elem) {  
    newArray.push(elem);
    })
    //filters out all the space/letters between the numbers in movies.duration
  const changedToMinutes = newArray.map(function(movie) {
    let numString = '';
    for(let i = 0; i < movie.duration.length; i ++) {
      if(movie.duration[i] === '1' || movie.duration[i] === '2' || movie.duration[i] === '3' || movie.duration[i] === '4' || movie.duration[i] === '5' || movie.duration[i] === '6' || movie.duration[i] === '7' || movie.duration[i] === '8' || movie.duration[i] === '9') {
        numString += movie.duration[i];
      }
      
    }
    return numString;
  });
  //takes the first digit, splices it out, converts it to a number, and multiplies it by 60 then adds it to the rest
  const firstDigitToNumber = changedToMinutes.map(function(movie) {
    //checks to see if it is a short movie of less than an hour
    if(movie.length < 3 && movie.length > 1) {
      let restOfNum = Number(movie);
      return restOfNum;
    }
    //checks to see if movie length is only in hours
    if(movie.length === 1) {
      let onlyHourslength = Number(movie) * 60;
    }
    let firstDigi = Number(movie[0]);
    let theRestOfNum = Number(movie.slice(1));
    return (firstDigi * 60) + theRestOfNum;
  
  });
  
  //constructs the final array with minutes as the duration
  let finalArray = [];
  array.forEach(function(elem) {  
    finalArray.push(elem);
    })
  
  for(let i = 0; i < finalArray.length; i++) {
    finalArray[i].duration = firstDigitToNumber[i];
  
  }
  
   return finalArray;
  }
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  if(array.length === 0) {
    return null;
  }
  //sorts the given array by year from oldest to newest
  let sortedByYear = array.slice().sort(function(movie1, movie2) {
    if(movie1.year < movie2.year) return 1;
    if(movie1.year > movie2.year) return -1;
    if(movie1.year === movie2.year) return 0; 
  });
  
  let highestRating = 0; //holds the highest rating for a given year
  let highestRatingYear = 0; //is the year with the highest rating
  let yearIndex = sortedByYear[0].year; // year index to sort through
  let tempArrayHolder = []; //temporary array which will hold all movie objects with a given year
  
  //iterates over the ordered movie object array
  for(let i = 0; i < sortedByYear.length; i ++) {
    // this if statement executes only on the last element of the ordered array
    if(sortedByYear[i + 1]=== undefined) {
      tempArrayHolder.push(sortedByYear[i]);
      console.log("this should follow through")
  
      let yearTotal = 0;
      let lengthArray = tempArrayHolder.length;
        tempArrayHolder.forEach(function(element) {
            yearTotal += element.rate;
        });
        let averageRating = yearTotal/lengthArray;
  
      if(averageRating >= highestRating) {
          highestRating = averageRating;
          highestRatingYear = sortedByYear[i].year;
          break;
        }
    }
    // this checks to see if the movies are of the same year
    // if they are of the same year, push movie object onto tempArray
      if(sortedByYear[i].year === yearIndex)  {
        tempArrayHolder.push(sortedByYear[i]);
      }
      //checks to see if there exists a next movie object in the array
      if(sortedByYear[i + 1] !== undefined) {
        //this if statement executes when the next movie has a different year, thus all
        //movies with the same year have been added to the tempArray
        if(sortedByYear[i].year !== sortedByYear[i + 1].year){
     
       //adds up the values of all the ratings from the same year
        let yearTotal = 0; //placeholder for the sum of all the ratings
        let lengthArray = tempArrayHolder.length;
          tempArrayHolder.forEach(function(element) {
            yearTotal += element.rate;
        });
        let averageRating = yearTotal/lengthArray; //this is the average rating for all the movies in a given year

      //checks to see if the average rating is higher than the temp
      //if it is, then sets newest high rating and year.
        if(averageRating >= highestRating) {
          highestRating = averageRating;
          highestRatingYear = sortedByYear[i].year;  
        }

        yearIndex = sortedByYear[i+1].year; //updates the year index to the next year
        tempArrayHolder = []; //clears out the tempArray after the movie rate average has been computed and checked
   
    }
    }
  }
  return `The best year was ${highestRatingYear} with an average rate of ${highestRating}`;
  }
  
  