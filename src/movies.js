
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    return array.map((element) =>{
        return {director: element.director}
    })
}

// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsClean(array){
    let directorsArray = getAllDirectors(array)
    for(let i = 0; i<directorsArray.length; i++){
        for(let j = 0; j<array.length; j++){
            if(array[j].director === directorsArray[i].director && i !== j){
                directorsArray.splice(j,1);            }
        }
    }
    return directorsArray;
}

// console.log(getAllDirectorsClean(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    return array.filter((element) =>{
        return element.director === "Steven Spielberg" && element.genre.includes('Drama') 
    })
}

// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    return Math.round(((array.reduce((acc, element) =>{
        return acc + element.rate;
    }, 0))/array.length)*100)/100;
}

// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    return ratesAverage(array.filter((element) =>{
        return element.genre.includes('Drama')
    }))
}

// console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let newArray = [];
    return newArray = array.sort(function compareYear(a,b){
        if(a.year === b.year){
            if(a.title > b.title){
                return 1;
            }else {
                return -1;
            };
        }
        return a.year - b.year;
    })
}
// console.log(orderByYear(movies))
// console.log(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(array){
    return ((array.map((element) =>{
        return element.title;

    })).sort(function compareTitle(a,b){
        if(a>b){
            return 1;
        }else {
            return -1;
        };
    })).filter((element, index) =>{
        return index < 20;
    })
}


// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(array){
//     let minutesArray = [];
//     return minutesArray = array.map((element)=>{
//         element.duration = 
//         // return element.duration 
//     })
// }

// console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
 