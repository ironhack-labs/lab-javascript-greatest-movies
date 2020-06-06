// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = movies => movies.map (movie => movie.director)

        // so i understand what i did later:
        //
        // const getAllDirectors = movies => {
        //     return movies.map (movie => {
        //         return movie.director
        //     });
        // }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const directorsList = getAllDirectors(movies)
const cleanList = directorsList.filter ((name, i) => directorsList.indexOf(name) === i)
        // filters name by name, name is only included when its first occurance (indexOf) 
        // equals to index of the current element being checked

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = array => {
    if (array.length == 0) return 0;
    return array.filter (movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
    const moviesAverage = array.reduce ((acc,val) => {
      return acc + (val.rate || false) / array.length
    }, 0);
    return Math.round(moviesAverage*100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array => {
    const dramaMovies = array.filter (movie => movie.genre.includes('Drama'));
    const dramaAverage = dramaMovies.reduce ((acc,val) => {
      return acc + val.rate / dramaMovies.length // i had to create the array dramaMovies so the array.length for the average calculation was correct on this one, but i feel like it was a dumb solution, check what else i could do
    }, 0);
  return Math.round(dramaAverage*100)/100 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array => {
    const orderedByYear = [...array]; 
    return orderedByYear.sort((a, b) => {
      if (a.year === b.year)  return a.title < b.title ? -1 : a.title > b.title ? 1 : 0; // ternary for "if first title < second title, sort to the left" and so on - but why couldn't i just use "a.title - b.title"?
      else return a.year - b.year
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array => {
    const orderedTitles = array.map (movie => movie.title).sort(); // ternary + cleaning up syntax when you only have a return value
    if (orderedTitles.length > 20) return orderedTitles.slice (0,20);
    else return orderedTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = array => {
    const updatedMovies = [...array];
    for (let movie of updatedMovies) {
      movie.duration = movie.duration.split(" ");
      if (movie.duration.length === 2){ 
      movie.duration[0] = Number(movie.duration[0][0])*60;
      movie.duration[1] = Number(movie.duration[1].substring(0,2));  
      movie.duration = movie.duration[0] + movie.duration[1]}
    }
    return updatedMovies;
}
        // ...

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = array => {
}

        // ...