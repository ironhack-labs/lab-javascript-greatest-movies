
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    let newArray = []
    return newArray = array.map((element) =>{
        return element.director
    })
}

// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsClean(array){
    let directorsArray = getAllDirectors(array)
    for(let i = 0; i<directorsArray.length; i++){
        for(let j = 0; j<directorsArray.length; j++){
            if(directorsArray[j].director === directorsArray[i].director && i !== j){
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
    }).length
}

// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if(array.length === 0){
        return 0;
    }
    return Math.round(((array.reduce((acc, element) =>{
        if(!element.rate){
            element.rate = 0;
        }
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

function turnHoursToMinutes(array){
    let minutesArray = array;
    let hour = 0;
    let minutes = 0;
    return minutesArray = minutesArray.map((element, index)=>{
        //only considers movies with up to 9 hours
        if(element.duration.includes('h')){
            hour = parseInt(element.duration.charAt(element.duration.indexOf('h')-1)*60, 10);
            if(element.duration.includes('m')){
                if(element.duration.length === 8){
                    minutes = parseInt(element.duration.slice(3,5))
                } else if(element.duration.length === 7){
                    minutes = parseInt(element.duration.slice(3,4))
                }
            }
        }
        if(element.duration.includes('m')){
            if(element.duration.length === 5){
                minutes = parseInt(element.duration.slice(0,2))
            } else if(element.duration.length === 4){
                minutes = parseInt(element.duration.slice(0,1))
            }
        }
        element.duration = hour+minutes
        return minutesArray
    })
}

// console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
 
function bestYearAvg(array){
    if(!array || array.length === 0){
        return null;
    }
    let yearRateArray = array.map((element)=>{
        return {year: element.year, rate: element.rate}
    })
    let avg = 0;
    let resultArray = [{resultYear: 0, resultAvg: 0}]
    let rateSum = 0;
    let count = 0;
    for(let i = 0; i<yearRateArray.length; i++){
        for(let j = 0; j<yearRateArray.length; j++){
            if(yearRateArray[i].year === yearRateArray[j].year){
                rateSum += yearRateArray[j].rate;
                count += 1;
            }
        }
        avg = rateSum/count;
        if(avg > resultArray[0].resultAvg){
            resultArray[0].resultAvg = avg;
            resultArray[0].resultYear = yearRateArray[i].year;
        }
        avg = 0;
        count = 0;
        rateSum = 0;
    }
    return `The best year was ${resultArray[0].resultYear} with an average rate of ${resultArray[0].resultAvg}`
}

console.log(bestYearAvg(movies))