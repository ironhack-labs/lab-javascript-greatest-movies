/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let sortedByYear = [...array].sort((a, b) => {
            if(a.year < b.year) {
              return -1
            }
            else if(a.year > b.year) {
              return 1
            }
            else if(a.year === b.year) {
        
                    if(a.title < b.title) {
                        return -1
                      }
                      if(a.title > b.title) {
                        return 1
                }
            }
          });
    
          // console.log(sortedByYear);
    return sortedByYear;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// ------ ----PAULA'S SOLUTION

/* function howManyMovies(array) {
    
    let filteredByDirector = array.filter(movie => {return movie.director === "Steven Spielberg"}).filter(movie => {return movie.genre.includes("Drama");});
    return filteredByDirector.length;
} */

function howManyMovies (array){
    let newArray = array.filter(movie => {
        return (
            movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
        });

    return newArray.length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let newArray = [...array].sort((a, b) => {
        if(a.title < b.title) {
            return -1
        }
        if(a.title > b.title){
            return 1
        }
    })
    let titles = newArray.map((movie) => {return movie.title})
    //console.log(titles.slice(0,20));
    return titles.slice(0, 20)
}


// ----------PAULA'S SOLUTION

/* function orderAlphabetically(array){
    let titles = array.map(movie => {
        return movie.title;
    });
    
    return titles.sort().slice(0,20);
} */

//even shorter way - solution chained

/* function orderAlphabetically(array){
    return array
    .map(movie => movie.title)
    .sort()
    .slice(0,20);
}
 */


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

/* function ratesAverage(array){

    if (array.length === 0){
        return 0;
    }

    let mapArray = array.map(movie => {return movie.rate});
    let reducedArray = mapArray.reduce((a,b) => {
        return a + b;
    }, 0);

    let arrayAvg = reducedArray / array.length;

    return Math.round(arrayAvg * 10 ** 2) / 10 ** 2;
}

console.log(ratesAverage(movies)); */



// ----------PAULA'S SOLUTION

function ratesAverage(array){
    
    if (array.length === 0){
        return 0;
    }else{
        let total = array.reduce ((accumulator, current) => {
            if (current.rate){
                return accumulator + current.rate;
            } else{
                return accumulator;
            }
        }, 0);

        let average = total / array.length;
        return Math.round(average * 100) / 100;
        // return Number(average.toFixed(2));
        // return parseFloat(average.toFixed(2));
    }
}






// Iteration 5: Drama movies - Get the average of Drama Movies

// ----------PAULA'S SOLUTION

function dramaMoviesRate(array){
    const dramaMovies = array.filter(movie => {
        return movie.genre.includes("Drama");
    });

    return ratesAverage(dramaMovies);
} 

/* // OTHER WAY

function dramaMoviesRate(array){

    let dramaMovies = [];
    array.map(movie => {
        if (movie.genre.includes("Drama")){
            dramaMovies.push(movie);
        }
    });

    return ratesAverage(dramaMovies);
}; */





// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(array){
//     let duration = array.map(movie => movie.duration);

//     const reHours = /[hmin]\s*/
    
//     let durationNumbers = duration.map(duration => duration.split(reHours));
    
//     let filteredDurationNumbers = durationNumbers.filter(duration => {return duration.splice(2)});

//     let toNumber = filteredDurationNumbers[0].map(Number);

//     let hoursToMinutes = toNumber[0]*60;

//     let newTime = [hoursToMinutes, toNumber[1]]

//     let reduceToMinutes = newTime.reduce((accumulator, number) => {return accumulator + number}, 0 )

//     console.log(reduceToMinutes);
//     return reduceToMinutes;
// }

// turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// function bestYearAvg(array){
//     if (array.length === 0){
//         return null;
//     }else{
        
//         let sortedByYear = [...array].sort((a, b) => {
//             if(a.year === b.year) {
//                 const filterYear = array.filter(movie => {
//                     if (
//                 });
//             }
//             if(a.title > b.title){
//                 return 1
//             }
//         })


        
//     }
// }