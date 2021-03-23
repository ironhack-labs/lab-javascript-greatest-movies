// Iteration 1: All directors? - Get the array of all directors.

//declare function expression getAllDirectors that accepts an array, then use the map array method to create a new array where each element is an object {director : [director name] }
const getAllDirectors = arr => arr.map(movies => movies.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

//declare function expression unifiedDirectors that accepts an array
const unifiedDirectors = arr => {
  //declare func expression allDirectors that does the same as getAllDirectors (could just call that function, not sure if that's allowed for exercise though) 
    const allDirectors = arr.map(movies => movies.director);
  //declare function expression tidyDirectors
  // Use the filter method to iterate over the allDirectors, accepting both the current element (the director's name) and its index
    let tidyDirectors = allDirectors.filter((director, i) => allDirectors.indexOf(director) === i);
    // filter checks to see if indexOf director (indexOf checks the index of the first occurrence) is equal index, if director already exists in the tidyDirectors array, then the indexOf value and the index value are not equal and the condition check will return false (so the element is skipped / not pushed to the array), if the element is new,  indexOf and index match, the condition check is true and director is added to the array
  
    return tidyDirectors
  }
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// define a func that accepts an array of movies
const howManyMovies = arr => { 
    // defining an array spielbergDramas, then use filter method to filter out dramas directed by spielberg and store them in the array
    const spielbergDramas = arr.filter(({director, genre}) => director === "Steven Spielberg" && genre.includes('Drama'))   
    //return the length of the spielbergDramas array
    return spielbergDramas.length;
  };

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// define a func expression that accepts an array of movies
const ratesAverage = arr => {
  //if the array is empty return 0
    if (!arr.length) {return 0};
  //reduce iterates over the array, on first iteration, total is equal to 0, we check to see if the movie has a value for rate, if yes, we add the value of movie.rate to total, total is now equal to 0 plus movie.rate, if movie.rate has no value, total is equal to itself (still 0)  
    return parseFloat((arr.reduce((total, movie) => movie.rate ? total + movie.rate : total, 0)/ arr.length).toFixed(2));
  //after the entire array has been iterated over, it's divided by its own length, then we use toFixed to round it to the second decimal place, as toFixed returns a string, we then need to parseFloat the entire thing to return a number
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
// define a func expression that accepts an array of movies
const dramaMoviesRate = arr => {
  //declare a var to store the new array created by the filter method
  //use filter to iterate over each element the array and check (using .includes) to see if the element has a value of 'Drama' associated with the key 'genre', if the condition returns true, we add the element to the dramas array
    const dramas = arr.filter(movie => movie.genre.includes('Drama')); 

  // if the dramas array is empty, return 0 
    if (!dramas.length) {return 0}; 
  
  // Use reduce to reduce the dramas array down to the sum of all the ratings (elements) in the array , use toFixed to round it to the second decimal place, then parseFloat to convert it back to a number type
    return parseFloat((dramas.reduce((total, movie) => total + movie.rate, 0)/ dramas.length).toFixed(2));
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// define a func expression that accepts an array of movies
const orderByYear = arr => {
  //create a copy of the movies array using the map method
    const newMoviesArray = arr.map(movies => movies);

  // use sort to order the array, because sort orders by UTF-16 code units values we need to compare the elements as sort iterates over the array
    newMoviesArray.sort((movie1, movie2) => movie1.year != movie2.year ? movie1.year - movie2.year : movie1.title > movie2.title ? 1 : -1);
    //We use the ternary operator to check the the previous element (movie1) does not have the same value as the current element (movie2) 
    //if the check evaluates to true, we check if the value of movie1 is greater than that of movie2, if yes movie2 is arranged after movie one
    //if the first check evaluates to false then we check the movie title and sort based on that, if the value of movie1 is greater than that of movie2, if yes movie2 is arranged after movie one
    return newMoviesArray
  }
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// define a func expression that accepts an array of movies
const orderAlphabetically = arr => {
   //create a copy of the movies array populated with only movie titles using the map method
  const movieTitles = arr.map(movies => movies.title)
  //use sort to iterate over the array and sort it
    movieTitles.sort((movie1, movie2) => {
    //if the value of movie1 is greater than movie2, movie1 is placed first in the array
      if (movie1 > movie2)
      return 1;
    //if the value of movie1 is less than movie2, movie2 is swapped with movie1 and placed before it in the array
      if (movie1 < movie2)
      return -1;
    //if the value is the same nothing changes
      return 0;
    });

    //use splice to return an array that's only 20 elements long
    movieTitles.splice(20);

    return movieTitles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// define a func expression that accepts an array of movies
const turnHoursToMinutes = arr => {
  //use JSON stuff 乁| ･ 〰 ･ |ㄏ to create a deep copy of the movies array
    const convertedMovies = JSON.parse(JSON.stringify(arr));
    
    //loop over each element of the array
    convertedMovies.forEach(movie => {
        if (!movie.duration.includes('h')) {
      //if the movie doesn't have an h, use parseInt to convert the number part of the value into a number type

            movie.duration = parseInt(movie.duration);
        } else if (!movie.duration.includes('min')) {
      //if the movie doesn't have a min, use parseInt to convert the number part of the value into a number type, then multiply it by 60 to convert the hour to minutes

            movie.duration = parseInt(movie.duration) * 60;
        } else {
      //if the movie has an h and min, use parseInt to convert the hour number part of the value into a number type, then multiply by 60, and use slice to slice out the minutes part of the value, parse it into a number type, then add it to the converted hours

            movie.duration = parseInt(movie.duration) * 60 + parseInt(movie.duration.slice(2));
        }
    }); 
    
    return convertedMovies;
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
// define a func expression that accepts an array of movies
const bestYearAvg = arr => {
  //check if array is empty, return null if true
  if (!arr.length) {return null};

  //copy the movie array, mapping each element containing an object with movie year and rating
  let movieYearAndRating = arr.map(movie => movie = {year : movie.year, rate : movie.rate});
  //initialize an empty movie object
  let movieObj = {};
  //loop over each element in the movieYearAndRating array
  for (movie of movieYearAndRating) {
    //destructure each object element so that we can use just year and rate, yay!
    let {year, rate} = movie;
    // console.log(`movie! ${year} : ${rate}`) -> checking to see this works!
    // if year is a key in the movieObj, push rate onto the year array 
    if (year in movieObj) {
      movieObj[year].push(rate)
    } else {
    //if year is not yet a key in the movieObj, create a new key called year in the movie object and give it a value of empty array
    movieObj[year] = []; 
    //push the value of rate into the movieObj[year] array!
    movieObj[year].push(rate);
    }
    // console.log(movieObj)
  } 

  //declare a var highestYear to store the year of the movie with the highest avg and a var highestAvgRate, initialized with value of 0 to store the highest avg rate
  let highestYear;
  let highestAvgRate = 0;
  //loop over each element in the movieObj
  for (currYear in movieObj) {
    //initialize a var currAvgRate, use reduce to sum the elements of the array value in each of the object elements in the movie object, then divide that value by the length of the array and store that value in the currAvg array
    let currAvgRate = movieObj[currYear].reduce((total, currVal) => total += currVal) / movieObj[currYear].length;
    
    // then, for each element in the movieObj, check if currAvgRate is higher than highestAvg rate
    if (currAvgRate > highestAvgRate) {
      //if check is true, assign value of currAvgRate to highestAvgRate
      highestAvgRate = currAvgRate;
      //if check is true, assign val of currYear to highestYear 
      highestYear = currYear;
    }
    
  }

  //return string including highestYear and highestAvgRate

  return `The best year was ${highestYear} with an average rate of ${highestAvgRate}`
  // i would prefer to return an object, oh well :P return {[highestYear] : parseFloat(highestAvgRate.toFixed(1))};

}
