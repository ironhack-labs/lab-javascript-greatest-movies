/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
    const averages = movies.reduce((sum, movies) => {
        return sum + movies.rate;
    }, 0);

    return (averages / movies.length)
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaFilter = movies.filter(themovies => themovies.genre.includes("Drama"))
        // console.log(dramaFilter);
    const dramaaverages = dramaFilter.reduce((sum, dramaFilter) => {
        return sum + dramaFilter.rate;
    }, 0);

    if (dramaFilter.length == 0) {
        return 0;
    }
    return Number((dramaaverages / dramaFilter.length).toFixed(2))
}





// }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    // const durationHour = []
    // const durationMinute = []


    // for (i = 0; i < movies.length; i++) {
    //     if (movies[i].duration.includes('h') && !movies[i].duration.includes('min')) {
    //         // console.log(Number(movies[i].duration.split('')[0]))
    //         let hours = Number(movies[i].duration.split('')[0]);
    //         durationHour.push(hours);
    //         // console.log(durationHour);
    //         // console.log(hours)
    //     } else if (movies[i].duration.includes('h') && movies[i].duration.includes('min')) {
    //         // console.log(Number(movies[i].duration.split('')[0]))
    //         let hourAndMinute = Number(movies[i].duration.split('')[0])
    //         durationMinute.push(hourAndMinute);
    //         // console.log(durationMinute)
    //         console.log(hourAndMinute)
    //     }
    //     const array = []
    //     array.push(durationHour);
    //     array.push(durationMinute);

    // }



    // conts fullDuration =
    //     array.sort(function(a, b) {
    //         return a.duration - b.duration
    //     })

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average