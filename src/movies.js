
// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) =>  arr.map(object => object.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let notAllDirectors = getAllDirectors(movies);

notAllDirectors = notAllDirectors.filter((director, index) => notAllDirectors.indexOf(director) === index)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies =  (arr) => arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama')).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if(movies.length) {
      let result = movies.map(object => {
        if (object.rate === '' || Object.keys(object).length === 0) {
          return 0;
        }
        return object.rate
      })
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
      return parseFloat((result/movies.length).toFixed(2));
    }
  
    return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
      if(dramaMovies.length) {
        let result = dramaMovies.map(object => {
          if (object.rate === '' || Object.keys(object).length === 0) {
            return 0;
          }
          return object.rate
        })
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return parseFloat((result/dramaMovies.length).toFixed(2));
      }
    
      return 0;
  }

  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  const orderByYear = (movies) => {
    let sortedMovies = movies.slice();
    sortedMovies.sort((a,b) => {
        return a.year - b.year;
    });

    return sortedMovies.sort((a, b) => {
      console.log(a.year === b.year)
      if (a.year === b.year) {
        var x = a.title;
        var y = b.title;
        return x < y ? -1 : x > y ? 1 : 0;
        }
    });
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    return movies.map(object => object.title).sort().slice(0, 20);
 
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
    const newMovies = movies.slice();
      newMovies.map((movie) => {
          let temp = 0;
          const duration = movie.duration.split(' ');
          
          duration.forEach((d) => {
              if (d.indexOf('h') !== -1) {
              temp += parseInt(d.replace('h', ''))*60
              } else {
              temp+=parseInt(d.replace('min', ''));
              }
              movie.duration = temp;
          })
  
          return movie;    
      });
      console.log(movies);
      return newMovies;
  }


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (movies) => {
    if (movies.length === 0 ) {
      return null;
    }
    
    let yearMovie = movies.map(movie => movie.year);
    yearMovie = yearMovie.filter((el, index) => yearMovie.indexOf(el) === index);
    let bestYear = 0;
    let bestAvg = 0;
  
     for (let i = 0; i < yearMovie.length; i++) {
      let tempYear = yearMovie[i]
      let tempAvg = 0;
      let movieCount = 0;
       
       movies.forEach((movie) => {
         if (tempYear === movie.year) {
          tempAvg += movie.rate
          movieCount ++;
        }
       });
  
      tempAvg = tempAvg/movieCount;
  
      if (tempAvg > bestAvg) {
        bestAvg = tempAvg;
        bestYear = tempYear;
      } else if (tempAvg === bestAvg) {
           if (tempYear < bestYear) {
             bestAvg = tempAvg;
             bestYear = tempYear;
           }   
      }
     }
  
    return `The best year was ${bestYear} with an average rate of ${bestAvg}`
  }