// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr){
    return arr.map(movie=>movie.director);
}
function eraseDuplicates(arr){
    let uniqueDirectors=[];
    arr.forEach(function(director){if(uniqueDirectors.indexOf(director)===-1){uniqueDirectors.push(director);}});
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let movies = arr.filter(movie=>{return (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama")!==-1);});
    if (movies.length ===0){return 0;} else {return movies.length;}
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if (arr.length===0) {return 0;}
    let countEmpty = 0;
    let sumRates = arr.reduce((sum,movie)=>{
        if(movie.rate){
            return sum+movie.rate;
        } else {
            countEmpty++;
            return sum;
        }
    },0);
    return Math.round(100*sumRates/(arr.length))/100;
    // return Math.round(100*sumRates/(arr.length-countEmpty))/100;
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let dramaMovies = arr.filter(movie=>movie.genre.indexOf("Drama")!==-1)
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let orderedMovies = JSON.parse(JSON.stringify(arr));
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
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let orderedMovies = JSON.parse(JSON.stringify(arr));
    let titles = [];
    orderedMovies.map(movie=>titles.push(movie.title));
    titles.sort();
    return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    let minuteMovies = JSON.parse(JSON.stringify(arr));
    let resultMovies = JSON.parse(JSON.stringify(arr));
    minuteMovies.map((movie,index)=>{
        let horas = 0;
        let minutos = 0;
        let duration = movie.duration;

        duration_split = duration.split(" ");
        if (duration_split[0].includes("h")){horas = parseInt(duration_split[0].replace("h",""));}
        if (duration_split[0].includes("min")){minutos = parseInt(duration_split[0].replace("min",""));}
        if (duration_split.length>1){minutos = parseInt(duration_split[1].replace("min",""));}

        let duracionMins = minutos + horas*60;
        resultMovies[index].duration = duracionMins;
    });
    return resultMovies;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
    if (arr.length===0) {return null;}
    let maxRate = 0;
    let YearMaxRate = 0;
    let years =eraseDuplicates(getYearsList(arr));
    years.map(year=>{
        let moviesInYear = arr.filter(movie=>movie.year===year);
        let avgRate = ratesAverage(moviesInYear);
        if (avgRate>maxRate){
            maxRate = avgRate;
            YearMaxRate = year;
        } else if (avgRate===maxRate){
            if (year<YearMaxRate){
                maxRate = avgRate;
                YearMaxRate = year;
            }
        }
    });
    return `The best year was ${YearMaxRate} with an average rate of ${maxRate}`;
}

function getYearsList(arr){
    let years = arr.map(movie=>movie.year);
    return years;
}