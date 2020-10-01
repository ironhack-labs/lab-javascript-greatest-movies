// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
let directores = movies.map(function(nameDirectors){
        return nameDirectors.director
    })
    return directores
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let dramaMovies = movies.filter (function (dramaTotal){
      return (dramaTotal.genre.includes("Drama") && dramaTotal.director === "Steven Spielberg");
    });
    return dramaMovies.length}

  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
if(movies.length ===0){
    return 0
}
let countEmpty = 0; 

    let avgRate =
    movies.reduce(function (sum, movie) {
          if(movie.rate){
              return sum + movie.rate;
          }else{
              countEmpty ++;
              return sum;
          }
      }, 0) / (movies.length-countEmpty);
    return Math.round(avgRate * 100) / 100;
  }

//countEmpty porque hay un vacío. Si tengo que hacer una average de todas, tengo que restar las que no tienen rate.
  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    
    let dramasPeliculas = movies.filter(movies => movies.genre.includes("Drama"));
    if(dramasPeliculas.length ===0){
        return 0
    }
    //let averageDramas = dramasPeliculas.reduce((total, avg) => total +avg.rate, 0) / dramasPeliculas.length;
    //return Math.round (averageDramas *100 )/100;
    let dramaRate = ratesAverage (dramasPeliculas)
    return dramaRate
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie){
    let orderedMovies = JSON.parse(JSON.stringify(movie));
    orderedMovies.sort(function(a,b){
        if(a.year>b.year){
            return 1;
        } else if (a.year<b.year){
            return -1;
        } else{
            return a.title.localeCompare(b.title);
        }
    });
    return orderedMovies; 

   


   //let totalYears = movies.filter(movies => movies.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 
function orderAlphabetically(movie){
    let orderedMovies = JSON.parse(JSON.stringify(movie));
    let titles = [];
    orderedMovies.map(movie=>titles.push(movie.title));
    titles.sort(function(a,b){
        return a.localeCompare(b);});
        return titles.slice(0,20);
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
