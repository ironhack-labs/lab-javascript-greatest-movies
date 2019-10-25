/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    //interate through objects array to find sum
  let avg = movies.reduce((sum, eachMovie) => {
      return sum + eachMovie.rate;
    }, 0) / movies.length;

  return Number(avg.toFixed(2)) || 0 ;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    //filter through movies to find drama movies
    const dramaMovies = movies.filter(function (eachMovie){
        if(eachMovie.genre.includes('Drama')){
            return true;
            }
    })
    //return average of drama movies filter using ratesAverage function created in interation 1
    return ratesAverage(dramaMovies);

}


// Iteration 3: Ordering by year - 

function orderByYear(movies) {

 let moviesByYear = movies.sort((a,b) => {
    //sort through movies.
    //if year a is greater than year b, return answer to the right
    if(a.year > b.year){
        return 1 
    } 
    //if year a is less than than year b, return answer to the left
    if (a.year < b.year){
        return -1
    } 
    if(a.title > b.title){
        return 1
    } 
    if (a.title < b.title){
        return -1
    }

    //if equal return list
    return 0

  })
    return moviesByYear;

}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    
    //Old Long form
    // let stevenMovies = [];
    // for(i=0; i < movies.length; i++){
    //     if(movies[i].genre.includes('Drama') && movies[i].director==='Steven Spielberg') {
    //         stevenMovies.push(movies[i]);
    //     }
    // }
    
    //ES5 form is 
    //let stevenMovies = movies.filter(function(eachMovie){
    //   if (eachMovie.genre.includes('Drama') && eachMovie.director === ('Steven Spielberg')) {
    //     return true;
    //    }
    // })

    //ES6 arrow shorter form.... can go one line .. possibly
    let stevenMovies = movies.filter(eachMovie => eachMovie.genre.includes('Drama') && eachMovie.director === ('Steven Spielberg'))

    return stevenMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(movies){

        let moviesByAlpha = movies.sort(function(a, b){
            
                if(a.title > b.title){
                    return 1
                }
                if(a.title < b.title){
                    return -1
                }
                return 0
        });

        return moviesByAlpha.slice(0,20).map(listOfMovies => listOfMovies.title);
    }



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    
    let durationArray = movies.map(function(eachMovie){
        return eachMovie.duration.split(', ');
    });

    // let removeH = String(durationArray).replace(/h/g,'');
    // let removeMin = removeH.replace(/min/g,'');
    

    let newDurationArray = durationArray.map(function(n){
        return parseInt(n);
    });

    // for (i=0; i < durationArray.length; i++){
    //     if(durationArray[i].length % 2 === 0){
    //      newDuration.push(durationArray[i]);
    //     }
    // }
    
    console.log(newDurationArray);
    // if (durationArray.includes('h')) {
    // let hours = durationArray.map(function(eachHour){
    //     return eachHour
    // });
    // return hours;
    // }   

    return newDurationArray;
}
 
console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average

