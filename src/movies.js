// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){

    var newArray = JSON.parse(JSON.stringify(arr));
    const mapped = newArray.map(function(movie){
        return movie.director;
    });
    return mapped
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDoublons(arr){
    const noDuplicate = getAllDirectors(arr).filter(function (director,index){
        return getAllDirectors(arr).indexOf(director) === index;
    });
     return noDuplicate;
}
 
//OTHER SOLUTION WITH .reduce()
/* function removeDoublons(arr){
    const noDuplicate = getAllDirectors(arr).reduce(function (unique,director){
        return unique.includes(director) ? unique :[...unique,director]}, []);
    return noDuplicate;
} */


console.log(removeDoublons(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
    let total=0;
    const movieSteven = arr.filter(function(movie){
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            return total += 1;
        }
    })
    return total;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length ===0){
        return 0;
    }
    const sum=arr.reduce(function(acc,movie){
        if(!movie.rate){
            return acc;
        }
        return acc + movie.rate;
    },0);
    let average= sum/(arr.length);
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){

    const dramaMovies = arr.filter(function(movie){
        if (movie.genre.includes('Drama')){
            return true;
        } else {
            return false;
        }
    });

    return ratesAverage(dramaMovies);
}

console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let newArr=JSON.parse(JSON.stringify(arr));
    const orderYear = newArr.sort(function(year1,year2){
        if(year1.year === year2.year){
            return year1.title.localeCompare(year2.title);
        }
        return year1.year - year2.year;  
    });
    return orderYear;
}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

    var newArray = JSON.parse(JSON.stringify(arr));
    const mapped = newArray.map(function(movie){
        return movie.title;
    });
    const orderAlpha = mapped.sort(function(a,b){
        return a.localeCompare(b);
    })

    if (orderAlpha.length>20) return orderAlpha.splice(0,20);
    return orderAlpha;
}

console.log(orderAlphabetically(movies));



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//function turnHoursToMinutes()  


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

