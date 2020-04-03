/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  let orderYear = movies.slice().sort((a, b) => {
    if (a.year < b.year) return -1;
    else if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  return orderYear;
}

/*
    
    //
    unction orderByYear(movies) {
    const newMovieArr = [...movies];
    let sortedArr = [...movies];
    sortedArr.sort((a,b)) =>  {
        if(a.year === b.year) {
            if(a.title < b.title) {
                return -1
            }
            else if (
                
            )
        }
    }
} */

//console.log(orderByYear(movies.year))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const stevenFilms = movies.filter(function(movies) {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  });
  return stevenFilms.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
/*function orderAlphabetically(movies) {
    const sortArr = movies.title.sort((a, b) => {
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
      });
    
      console.log(sortArr.title);
    
      return sortArr;
*/

function orderAlphabetically(movies) {
  let orderedYear = movies.slice().sort(function(a, b) {
    if (a.title.localeCompare(b.title) > 0) {
      return 1;
    } else {
      return -1;
    }
  });

  return orderedYear.slice(0, 20).map(elemen => {
    return elemen.title;
  });
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let sum = 0;
    if (arr.length === 0) {
        return 0;
    }

    for (i = 0; i < arr.length; i++) {
    sum += arr[i].rate 
} 
let average = sum / arr.length;
return parseFloat(average.toFixed(2));


}

//average previous lab. split by the elements
//split by length of array



// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
