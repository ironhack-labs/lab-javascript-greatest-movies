/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    const newDB = JSON.parse(JSON.stringify(array));
    newDB.sort((a,b) => {
      if (a.year === b.year){
        if (a.title < b.title){
          return -1;
        }else if (a.title > b.title){
          return 1;
        }else{
          return 0;
        }
      }else{
        return a.year - b.year;
      }
    });
    return newDB;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
    if(!array.length){
    return 0;
    }

    let moviesSpielberg = array.filter(function(movies){
    return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    });
    return moviesSpielberg.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    // if(!array.length){
    // return 0
    // }

    
    // let newArray=JSON.parse(JSON.stringify(array));
    let newArray= array.map((movie) => {
        return movie.title
    });

    let a=newArray.sort()
    return a.slice(0,20);  

    // Paula's Solution
    // return titles
    // .sort()
    // .slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if(!array.length){
        return 0
        }
    

        let rateArray = array.map((movie) => {
            return movie.rate
        }); 
        
        let reducedrateArray = rateArray.reduce((accumulator,number) => {
            return accumulator + number}, 0);
        let rateAverage = reducedrateArray / rateArray.length;
        let avg=Math.round(rateAverage * 10 ** 2) / 10 ** 2
        return avg

        
        
}


// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
