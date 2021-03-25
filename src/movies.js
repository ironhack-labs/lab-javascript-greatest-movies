// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (arr) => 
{   
    const directorsList = arr.map((films)=>{
    return films.director
  })
  return directorsList
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    const stevenFilms = arr.filter((films) => {
      return films.director === 'Steven Spielberg' && films.genre.includes('Drama')
    }) 
      return stevenFilms.length
  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if(arr.length === 0){return 0}
    const sumOfRatings = arr.reduce((counter, rates)=> {
        if(rates.rate) {return counter + rates.rate}
        else { return counter} }, 0)
    const average = sumOfRatings / arr.length
    const roundedDecimals = Math.round(average*100)/100
    return roundedDecimals
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies

    const dramaMoviesRate = (arr) => {
        let filteredDramaArray = arr.filter((movie) => 
        movie.genre.includes("Drama"));
        let average = filteredDramaArray.reduce((acc, movie) => 
        acc + movie.rate / filteredDramaArray.length, 0);
        return Number(average.toFixed(2));
    };
  
   
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    const newArr = arr.map((films)=>{
        return films
    })
    const alphabetical = newArr.sort((a, b) => {
      if (a.name >= b.name) return 1;
      if (a.name <= b.name) return -1
    })
    const order = alphabetical.sort((a, b) => {
      return a.year - b.year;
    })
    return order
    }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    const orderAlphabetically = (arr) => {
        const numberOfMovies = 20
        let onlyTitle = arr.map((arr) => arr.title).sort((a,b) => {
            if (a > b) return 1;
            if (a < b) return -1;
        })
        return onlyTitle.slice(0, numberOfMovies)
      }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
