// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = moviesArr => {
    console.log('here')
    let getDirectors = moviesArr.map(el => el.director);
    return getDirectors;
   
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let directors = getAllDirectors()

const filteredDirectors = directors.filter((director, index) => directors.indexOf(director) === index);

console.log(filteredDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = moviesArr => {
    let filteredDrama = moviesArr.filter(function (movie) { return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg' })
    return filteredDrama.length;
};
howManyMovies();
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
    let theSum = movies.reduce((accum, currValue) => accum + currValue.rate, 0);
  
    let theAvg = theSum / movies.length;
    
    return theAvg.toFixed(2)
  
  };
  ratesAverage()


// Iteration 4: Drama movies - Get the average of Drama Movies
const avgDramaRate = moviesArr => {
    let filteredDrama2 = movies.filter(function (movie) { return movie.genre.includes('Drama') });
    let theSum2 = filteredDrama2.reduce((accum, currValue) => accum + currValue.rate, 0);

     let theAvg2 = theSum2 / filteredDrama2.length;
  
  return theAvg2.toFixed(2)
    
};
avgDramaRate();


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arr => {

	let sortedArray = movies.slice().sort(function(a, b){
		if (a.year == b.year){
			return -1
		}
		else{
			return  a.year - b.year
	}
	})
	return sortedArray
}
orderByYear()

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
orderAlphabetically = arr => {
    let orderedArr = movies.slice().sort((a,b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
    });
    let shortArray = orderedArr.slice(0,20);
    return shortArray;
    };
    orderAlphabetically()

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
    let getDurationArr = movies.map(el => el.duration.match(/\d+/g).map(Number)
    );
    let hrToMinArr = getDurationArr.map(time => {
      if(time.length >= 2)
      return `${(time[0] * 60) + time[1]} min`
  
      else
      return `${time[0] * 60} min`
    });
    
   
  return hrToMinArr
    // let final = moviesInMinutes.map(el.duration => hrToMinArr.duration);
     
  };
  turnHoursToMinutes()
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
