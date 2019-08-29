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
        // else
        //     return a.title - b.title;
    });

    
    return sorted;

}








// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    let dramaMovies = movies.filter(function (movie) {
        return movie.genre.includes('Drama');
    });

    dramaMovies.filter(function (movie) {
        return movie.director == 'Steven Spielberg';
    });
}






// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {

}







// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {
    console.log('hi', movies);
    let newMoviesArray = movies.map(function (movie) {
        console.log('here');
        console.log('duration:' + movie.duration)
        if (isNaN(movie.duration)) {
            let durationSplit = movie.duration.split(' ');
            let durationArray = [];
            let minutes;

            for (let i = 0; i < durationSplit.length; i++) {
                durationArray[i] = parseFloat(durationSplit[i]);
                // durationArray.push(parseFloat(durationSplit[i]));
            }

            minutes = Number(durationArray[0] * 60) + Number(durationArray[1]);
            movie.duration = minutes;
        }

        return movie;




        // console.log(movie);
        //return movie.title
        // let minutes = [];

        // for(let i=0; i<newMoviesArray.length; i++){

        //     let durationSplit = newMoviesArray[i].duration.split(' ');
        //     console.log(durationSplit.length);
        //     let durationArray = [];

        //     for(let j=0; j<durationSplit.length; j++){

        //         durationArray[j] = parseFloat(durationSplit[j]);
        //         console.log(durationArray);
        //     }
        //      minutes[i] = (Number(durationArray[0]*60))+Number(durationArray[1]);
        //      newMoviesArray[i].duration = minutes[i]
        // }    
    })
    //console.log(newMoviesArray)

    return newMoviesArray;

}








// BONUS Iteration: Best yearly rate average - Best yearly rate average
