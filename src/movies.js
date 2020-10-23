// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(movies){

   return movies.map((movie)=>movie.director);
 

   
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies){
    return  movies
    .filter((value) => value.director === "Steven Spielberg")
    .filter((value) => value.genre.indexOf("Drama") >= 0)
    .length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length){
        let avg = movies.reduce(function(acc,value){
                if(typeof value.rate === "number"){
                    return acc + value.rate;
                }else{
                    return acc;
                }
 
        },0)/movies.length;
        return parseFloat(avg.toFixed(2));
    }else{
        return 0;
    }

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter((movie) => movie.genre.indexOf("Drama") >= 0);
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    let title = "";
    return movies.map(function(movie){
        if(movie.title !== undefined){
             return {
                "title": title = movie.title.toLowerCase(),
                "year": movie.year
                }
            }else{
                return {
                    "year": movie.year
                }
            }
        
       
    })
    .sort(function(a, b){return ( +(a.title > b.title) || +(a.title === b.title) - 1)})
    .sort(function(a,b){return  a.year - b.year});
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(movies){
    return movies.map((movie)=>movie.title).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function(movie){
        if(movie.duration.indexOf("h")>=0){
            hours = parseInt(movie.duration.slice(0,movie.duration.indexOf("h")));
            if(movie.duration.indexOf("m") >=0) {
                minutes = parseInt(movie.duration.substring(movie.duration.indexOf(" "),movie.duration.length-3));
            }else{
                minutes = 0;
            }    
        }else{
            hours = 0;
            minutes = parseInt(movie.duration.substring(0,movie.duration.length-3));
        }
    
        return {
            "title": movie.title,
            "year": movie.year,
            "director": movie.director,
            "duration": hours*60+minutes,
            "genre": movie.genre,
            "rate": movie.rate
            };
    });
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(movies){
    if(movies.length){
    let avg = [];
        let years = movies.map(function(movie){
        return {"year":movie.year,"rate":movie.rate}}).sort((a,b)=>(a.year-b.year));
    

    let year = 0;
    let rate = 0;
    let cont = 1;

    years.forEach(function(element){
        if(element.year === year){
            rate += element.rate;
            cont++;
        }else{
            avg.push({"year": year, "rate": rate/cont})
            year = element.year;
            rate = element.rate;
            cont = 1;
        }
    });  

    avg.sort((a,b)=>b.rate-a.rate)
   
    return `The best year was ${avg[0].year} with an average rate of ${avg[0].rate}`;
}else{
    return null;
}
}