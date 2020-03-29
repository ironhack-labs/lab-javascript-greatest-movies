/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies){
    let ordered = movies.slice().sort(function(a,b){
        if (a.year===b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year-b.year;
    })
    return ordered;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    let count=0;
    let howMany = movies.slice().filter(function(drama){
     if (drama.director === "Steven Spielberg"&& drama.genre.indexOf("Drama")>-1){
         count ++;
         return true;
        };
    })
    return count;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let titles = movies.map(function(movie){
        return movie.title;
    });
    
    // let titles = [];
    // for (let i = 0; i < movies.length; i++) {
    //     let movie = movies[i];
    //     titles.push(movie.title);
    // }

    titles.sort(function(a,b){
        return a.localeCompare(b);
    });
    return titles.slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length > 0) {
        let sum= movies.reduce(function(sum,movie){
           if (movie.rate) {
                return sum+movie.rate;
           }
           else {return sum;}
        },0);
        const average = (sum/movies.length);
        const averageRounded = Math.round(average*100)/100;
        return averageRounded;
    } else {
        return 0;
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramaMovies= movies.filter(function(movie){
        // return movie.genre.indexOf("Drama")>-1; 
        return movie.genre.includes("Drama"); 
    });
    return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){ 
    // let hoursArr = movies[0].duration.split(" ");   
  let newArr=movies[0].duration.split(" ");
  console.log (newArr);
      


// BONUS Iteration: Best yearly rate average - Best yearly rate average

