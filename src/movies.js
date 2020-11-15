//document.writeln("<script type='text/javascript' src='data.js'></script>");

// Iteration 1: All directors? - Get the array of all directors.


const getAllDirectors = (movies) => movies.map(function(movie) {
    return movie.director;
});

console.log(getAllDirectors);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let moviesNum = movies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return moviesNum.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    var rates = movies.reduce(function(total, currentValue) { 
      let ratesTotal = total + parseInt(currentValue.rate);
    
        return ratesTotal;
    }, 0); 
    
    var avg = (rates / movies.length).toFixed(2)
    if (movies.length === 0) {
      return 0;
    } 
      return parseFloat(avg);
    }
console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    var drama = movies.filter(movie => {
        return  movie.genre.includes("Drama")
      })

    var rates = drama.reduce(function(total, currentValue) { 
      let ratesTotal = total + parseInt(currentValue.rate);
    
        return ratesTotal;
    }, 0); 
    
    var avg = (rates / movies.length).toFixed(2)
    if (movies.length === 0) {
      return 0;
    } 
    return parseFloat(avg);
    }

console.log(dramaMoviesRate(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) { 

    var modifiedBrandNewArray = movies.map(function(movies) {
        let copiedProduct = {...movies};
     
         return copiedProduct.year;
     });
     
      var resultArray = modifiedBrandNewArray.sort(function(numbA, numbB) {
             return numbA - numbB;  
         }); 
         return resultArray;
    };
    console.log(orderByYear(movies));
     

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies){
    var newArray = movies.map(function(movies) {
        let copiedProduct = {...movies};
     
         return copiedProduct.title;
     });
     
     var modifiedSlicedArray = 
     newArray.slice(0 ,20);
    
    var endResult = modifiedSlicedArray.sort(function(a,b){
        return a.localeCompare(b);
      
    });
    return endResult;
    }
    console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
