// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    const directors = movies.map(function(arr){
    return arr.director;
})
return directors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const moviesOfSt = movies.filter(function(mov){
        count = 0;
    if((mov.director === 'Steven Spielberg') && ((mov.genre[1]==='Drama')||mov.genre[0]==='Drama'||mov.genre[2]==='Drama'))
        return movies;
    })
    return moviesOfSt.length;
}

// // Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length === 0) return 0;
    const num = movies.reduce(function(acc,val){
        if(val.rate) {
        return acc + val.rate;
        }else{ 
        return acc
    }
    },0)
    const avr = num/movies.length;
    return Number(avr.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    //filter the Drama movie
    let dramaMovies = movies.filter(function(movie){
        return movie.genre.includes("Drama")
    })
    // get the average of dramaMovies
    return ratesAverage(dramaMovies);
}

// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    const newArray = movies.sort(function(a,b){
        if(a.year === b.year) return (a.title.localeCompare(b.title))
        else return a.year-b.year;
    })
   return newArray;
}

// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//const titleArray = movies.map(function(a){ return a.title; });
function orderAlphabetically(movies){
    const titleArray = movies.map(function(a){ return a.title;});
    const sortedArray = titleArray.sort(function(a,b){
        return  a.localeCompare(b);
    })
    if (sortedArray.length <= 20) return sortedArray 
    else {
    const newArray =[];
   for(let i=0;i<20;i++){
       newArray.push(sortedArray[i]);
   }
   return newArray;
}
}
// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//  function turnHoursToMinutes(movies){
//      const newArr = movies.map(function(a){
//         const min = a.duration.slice(-5,-3);
//         const hr = a.duration.split('h');
//         a.duration = (hr*60)+min;
//      })
//      return newArr;
//  }
//  const timeArr = newArr.sort(function(a,b){
//      return b.duration-a.duration
//  })
//  return 


// // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
