// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    return arr.map( movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectorsUnique(arr){
    let directorsArray = [];
    arr.map( movie => !directorsArray.includes(movie.director) &&directorsArray.push(movie.director));
    return directorsArray;
}

//console.log("-------------------")
//let foo = getAllDirectorsUnique(movies); 
//console.log(foo);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    return arr.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if(arr.length !==0){
        return Number((arr.reduce( (totalRate, currentMovie) =>  typeof currentMovie.rate === "number" ? totalRate += currentMovie.rate : totalRate, 0) / arr.length).toFixed(2));
    }else{
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    if(arr.length !==0){
        let sumOfDramaRates = arr.reduce( (totalRate, currentMovie) =>  currentMovie.genre.includes("Drama") ? totalRate += currentMovie.rate : totalRate, 0);
        let nbOfDramaMovies = arr.filter( movie => movie.genre.includes("Drama")).length;
        return nbOfDramaMovies > 0 ? Number((sumOfDramaRates / nbOfDramaMovies).toFixed(2)) : 0;
    }else{
        return 0;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//I use this function for both orderByYear and orderAlphabetically
function compareTitle(title1,title2){
    if(title1 < title2){
        return -1;
    } else if((title1 > title2)){
        return +1;
    } else{
        return 0;
    }
}

function orderByYear(arr){
    let arrCopy = JSON.parse(JSON.stringify(arr));
    return arrCopy.sort( (firstMovie, secondMovie) => firstMovie.year - secondMovie.year !== 0 ? firstMovie.year - secondMovie.year : compareTitle(firstMovie.title, secondMovie.title));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    return arr.map( (currentMovie) => currentMovie.title).sort(compareTitle).splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    function convertStringToMinutes(str){
        let arrHours = str.match(/[0-9]+(?=h)/); //Array containing the digit for hours
        let arrMinutes = str.match(/[0-9]+(?=min)/); //Array containing the digit of minutes
        let nbHours = 0;
        let nbMinutes = 0;
        if(arrHours !== null){
            if(arrHours.length != 0){
                nbHours = Number(arrHours.join(""));
            }
        }
        if(arrMinutes !== null){
            if(arrMinutes.length != 0){
                nbMinutes = Number(arrMinutes.join(""));
            }
        }
        return (nbHours * 60) + nbMinutes;
    }
    
    let arrCopy = JSON.parse(JSON.stringify(arr));
    arrCopy.forEach( (currentMovie) => currentMovie.duration = convertStringToMinutes(currentMovie.duration));
    return arrCopy;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
    
    //If the array provided is empty, return null
    if(arr.length === 0){
        return null;
    } else {
        //I define and instanciate an array with the following object structure as elements {year: XXXX, avgRate: undefined}
        let yearsAverage = arr.reduce( (accuArray, currentMovie) => {
            let regExpYear = new RegExp("(?<=\"year\":)" + String(currentMovie.year));
            let yearNotIncluded = JSON.stringify(accuArray).match(regExpYear) === null; 
            if(yearNotIncluded){
                accuArray.push({year : currentMovie.year, avgRate : undefined});
            }
            return accuArray;
        }, [])
    
        //To calculate the average rates for each year, I use a reduce function on the movies array that uses the following function to calculate them
        function calcAverage({avg, nbMovies, currentYear}, movie){
            if( !(movie.year === currentYear)){
                return {avg, nbMovies, currentYear};
            } else {
                return {
                    avg: (movie.rate + nbMovies * avg) / (nbMovies + 1), //The formula is to calculate the average in only 1 loop of the array
                    nbMovies : nbMovies +1,
                    currentYear : currentYear
                };
            }
        }
    
        //For each year, I go through a reduce function on the movies array to calculate the average
        yearsAverage.forEach( (currentYearObject) => {
            let averageCalculationObject = arr.reduce( calcAverage , {avg : 0, nbMovies : 0, currentYear : currentYearObject.year});
            currentYearObject.avgRate = Number(averageCalculationObject.avg.toFixed(2));
        });
    
        //Function to filter by best rating and year if ratings are equal
        function filterYears(yearObject1, yearObject2) {
            if(yearObject2.avgRate - yearObject1.avgRate < 0){
                return -1;
            } else if(yearObject2.avgRate - yearObject1.avgRate > 0){
                return 1;
            } else {
                if(yearObject1.year - yearObject2.year < 0){
                    return -1;
                } else if(yearObject1.year - yearObject2.year > 0){
                    return 1;
                } else {
                    return 0;
                }
            }
        }
        
        yearsAverage = yearsAverage.sort(filterYears);
        console.log(yearsAverage);
    
        return `The best year was ${yearsAverage[0].year} with an average rate of ${yearsAverage[0].avgRate}`
    }
}