/* eslint no-restricted-globals: 'off' */






// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

    let total = movies.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rate;
    }, 0);

    let average = total / movies.length;

    return Number(average.toFixed(2));

}








// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(function (movie) {

        return movie.genre.includes('Drama');
    });

    if (dramaMovies.length == 0) {
        return 0;
    }

    average = ratesAverage(dramaMovies);
    return average;
}






// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)





function orderByDuration(movies) {

    let newMoviesArray = turnHoursToMinutes(movies);

    let sorted = newMoviesArray.sort(function (a, b) {
        
        if(a.duration != b.duration){
            return a.duration - b.duration;
        }
        
        else if (a.title < b.title)
            return -1;
        else if (a.title > b.title)
            return 1;
        else 
            return 0;

    });

    
    return sorted;

}








// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    let dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes('Drama');
    });

    let stevenSpielbergMovies = dramaMovies.filter(function (movie) {
        return movie.director == 'Steven Spielberg';
    });

    return stevenSpielbergMovies.length;
}






// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
    
        const movieTitles = movies.map(movie => movie.title);
        
        const sortedTitles = movieTitles.sort().splice(0,20);
        return sortedTitles;
    
}







// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {

    let newMoviesArray = movies.map(function (m) {
    
        let movie = { ...m }
        if (isNaN(movie.duration)) {
            let durationSplit = movie.duration.split(' ');
            let onlyMin = false;
            let onlyHr = false;
            let durationArray = [];
            let minutes;
            
            for(let i = 0; i < durationSplit.length; i++) {
                if(durationSplit[i].includes('h') && onlyHr === false){
                    onlyHr = true;
                } 
                if(durationSplit[i].includes('min') && onlyMin === false) {
                    onlyMin = true;
                }
            }

            for (let i = 0; i < durationSplit.length; i++) {
                durationArray.push(parseFloat(durationSplit[i]));
            }
           
            
            if(onlyHr && onlyMin) {
                minutes = Number(durationArray[0] * 60) + Number(durationArray[1]);
            } else if(onlyHr) {
                minutes = Number(durationArray[0] * 60);
            } else if(onlyMin){
                minutes = Number(durationArray[0]);
            }
           
            movie.duration = minutes;
        }
      
        return movie;
    })
 
    return newMoviesArray;

}








// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(movies){

    if(movies.length == 0){
        return null;
    }

    let movieYears = [...new Set(movies.map(movie => movie.year))];
    let arrayByYear = [];
    let averages = [];
    let currentBestAverage = 0;
    let currentBestYear = null;

    for(let i=0; i<movieYears.length; i++){
        arrayByYear[i] = movies.filter(function(movie){
            return movie.year == movieYears[i];
        })
        averages[i] = ratesAverage(arrayByYear[i]);

        if(averages[i]<currentBestAverage){
            continue;
        }
        else if(averages[i]>currentBestAverage){
            
            currentBestAverage = averages[i];
            currentBestYear = movieYears[i];
        }
        else if(averages[i] == currentBestAverage){
            if(movieYears[i] < currentBestYear){
                currentBestAverage = averages[i];
                currentBestYear = movieYears[i];
            }
        }
    }

    console.log('bestAverage: ', currentBestAverage);
    console.log('best year: ', currentBestYear);


    return `The best year was ${currentBestYear} with an average rate of ${currentBestAverage}`;



    


    
}
