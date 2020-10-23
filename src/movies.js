// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    return movies.map(function(movie){
        return movie.director;
    })
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
 function cleanArray(arr){
     let cleanArr=[arr[0]];
     for(let i=1;i<arr.length;i++){
         if(!cleanArr.includes(arr[i])) {
            cleanArr.push(arr[i]);
         }
     }
     return cleanArr;
 }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const filteredMovies= movies.filter(function(movie){
        return (movie.director==='Steven Spielberg' && movie.genre.indexOf('Drama')!==-1);
    });
    return filteredMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){

    if(movies.length===0){
        return 0;
    }

    const ratesUnfiltered=movies.map(function(movie){
        return movie.rate?movie.rate:0;
    });

    const rates=ratesUnfiltered.filter(function(rate){
        return rate!==0;
    });
    const sum=rates.reduce(function(acc,rate){
        return acc+rate;
    },0);
    return Math.round((sum/movies.length)*100)/100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramaMovies= movies.filter(function(movie){
        return movie.genre.indexOf('Drama')!==-1;
    });
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (movies){
    const copy=movies.slice();
    return copy.sort((a,b)=>(a.year>b.year)?1:-1);
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const titles=movies.map(function(movie){
        return movie.title;
    });
    return titles.sort().splice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    const durationInMinutes=movies.map(function(movie){

        let duration=0;
        if(movie.duration.indexOf('h')!==-1){
            duration=+movie.duration.slice(3,movie.duration.indexOf('m'))+(+movie.duration[0])*60;
        }else{
            duration=+movie.duration.slice(0,movie.duration.indexOf('m'));
        }

        return {
            "title":movie.title,
            "year":movie.year,
            "director":movie.director,
            "duration": duration,
            "genre":movie.genre,
            "rate":movie.rate
        }
        // return (+movie.duration[0])*60+(+movie.duration.slice(3,movie.duration.indexOf('m')));
    });

    return durationInMinutes;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function rateOfTheYear(movies,year){
    
    const moviesOfTheYear=movies.filter((movie)=>movie.year===year);

    if(moviesOfTheYear.length===1){
        return moviesOfTheYear[0].rate;
    }

     let sum= moviesOfTheYear.reduce(function(acc,movie){
         return acc+movie.rate;
     },0);
    return Math.round((sum/moviesOfTheYear.length)*10)/10;

}


function orderByRate (movies){
    const copy=movies.slice();
    return copy.sort((a,b)=>(a.rate>b.rate)?-1:1);
}


function bestYearAvg(movies){

    if (movies.length===0){
        return null;
    }

    const years=movies.map((movie)=>movie.year);
    const uniqueYears=cleanArray(years);
    const yearsAndAverages=[];


    uniqueYears.forEach((year)=>yearsAndAverages.push(
        {
            year:year,
            rate:rateOfTheYear(movies,year)
        }
    ));

    const orderedMovies=orderByRate(yearsAndAverages);

    const bestRate=orderedMovies[0].rate;
    
    const sameRate=orderedMovies.filter((movie)=>movie.rate===bestRate);

    const bestYear=orderByYear(sameRate)[0].year;
    return `The best year was ${bestYear} with an average rate of ${bestRate}`;
}


