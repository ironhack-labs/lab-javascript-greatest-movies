/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array => {
  let newArray = JSON.parse( JSON.stringify( array ) );
  newArray.sort( ( a, b ) => {
      if ( a.year > b.year ) {
          return 1;
      }
      if ( a.year < b.year ) {
          return -1
      } else {
          return a.title.localeCompare( b.title )
      }
  } )
  return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = array => array.filter( item => item.genre.includes( "Drama" ) && item.director === "Steven Spielberg" ).length;

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
  let newArray = JSON.parse( JSON.stringify( array ) )
  newArray.sort( ( a, b ) => a.title.localeCompare( b.title ) )
  return newArray.slice( 0, 20 ).map( element => element.title )
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = array => {
  let newArray = JSON.parse( JSON.stringify( array ) )

  if ( newArray == 0 ) {
      return 0
  } else {
      let avg = Number( ( newArray.filter( element => element.rate )
              .map( element => element.rate )
              .reduce( ( valorAcumulador, valorArray ) => valorAcumulador + valorArray ) / newArray.length ).toFixed( 2 ) );
      return avg
  }
}


// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) =>  ratesAverage(array.filter(element => element.genre.includes("Drama")));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average