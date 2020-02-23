/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayUnsorted){
    const arraySorted = [...arrayUnsorted].sort((element1,element2) => {
        if(element1["year"]>element2["year"]){
            return 1;
        }
        else if(element1["year"]<element2["year"]){
            return -1;
        }
        else if(element1["year"]==element2["year"]){

            if(element1["title"]>element2["title"]){
                return 1;
            }
            else{return -1;}
        }
    } );
    return arraySorted;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieArray){
        const specificDirector = movieArray.filter(elementInArray => elementInArray["director"] === "Steven Spielberg" && elementInArray["genre"].indexOf("Drama")>-1);
        return specificDirector.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(unsortedArray){
    const sortedArray = [...unsortedArray].sort((myArray1,myArray2)=>{
        if(myArray1["title"]<myArray2["title"]){
            return -1;
        }
        if(myArray1["title"]>myArray2["title"]){
            return 1;
        }
    });

    if(sortedArray.length<20){
        return sortedArray.map(movie=>{
            return movie.title;
        });
    }
    else{
        return [...sortedArray.slice(0,20)].map(movie=>{
            return movie.title;
        });
    }
    
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length!=0){
    const total= movies.reduce((accumulator,number)=>{
        if(number.rate>0 && number.rate <10)
        return accumulator+number.rate;
        else{return accumulator+0;}
        
    },0);
    return Math.round(100*total/movies.length)/100;
}
else return 0;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArray){

   const dramaMovies= movieArray.filter(movie => {
        return movie.genre.includes("Drama");
    });
    return ratesAverage(dramaMovies);

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray){
    let myHours=0;
    let myMinutes=0;
    const arrayDurationInMinutes=movieArray.map(movie => {

        if(movie.duration.includes("h") && movie.duration.includes("m")){ console.log("Case where there are hours and minutes");
            myHours= parseInt(movie.duration.slice(0,movie.duration.indexOf("h")));
            myMinutes=parseInt(movie.duration.slice(movie.duration.indexOf("h")+2,movie.duration.indexOf("m")));
        }
        else if(movie.duration.includes("h")){                                     console.log("includes hours only");
            myHours=parseInt(movie.duration.slice(0,movie.duration.indexOf("h")));
        }
        else if (movie.duration.includes("m")){                                    console.log("includes only minutes");
            myMinutes=parseInt(movie.duration.slice(0,movie.duration.indexOf("m")));
    } 
    movie.duration=60*myHours+myMinutes
    return movie;
         
        
});
    return arrayDurationInMinutes;

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
