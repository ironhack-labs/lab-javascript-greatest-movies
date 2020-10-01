// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

let getAllDirectors = movies.map(function(dir){
    return dir.director;
})

console.log(getAllDirectors)

let getAllDirectors.filter((el,index))=> getAllDirectors.indexOf(el) === index)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies = movies.filter(function(movies){
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    
    }).length
    //console.log(howManyMovies)
    
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage=(movies.reduce(function(acc,curr){
    return (acc + curr.rate )
  },0))/ movies.length;
  
  console.log(ratesAverage.toFixed(2))

// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMovies = movies.filter(function (movies) {
    return movies.genre.includes('Drama');
  });
  console.log(dramaMovies);
  
  let dramaSum = dramaMovies.reduce(function (acc, curr) {
    return acc + curr.rate;
  }, 0);
  console.log(dramaSum);
  
  let avgDrama = (dramaSum / dramaMovies.length).toFixed(2);
  console.log(avgDrama);
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = movies.sort(function(a,b){
    if (a.year > b.year){
        return 1
    }else if(a.year < b.year){
        return -1
    }else{
       return 0
    }
})

console.log(orderByYear)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (obj) {
        return obj.title;
      });

    let moviesTitleSort = moviesTitle.sort();
    
    return moviesTitleSort.slice(0, 20);

}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
