/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
//movies= [8,8]

function ratesAverage(array) {
    return (Math.round((array.reduce((accu, element) => {
        return accu + parseFloat(element.rate);
    }, 0) / array.length) * 100) / 100)
}

/* function ratesAverage(array) {
    let sumOfRatings = array.reduce((accu, element) => {
        const rating = element.rate;
        if(element.rate === "")
        return accu + parseFloat(rating);
    }, 0)
    return Math.round((sumOfRatings/ array.length) * 100) / 100

} */



//ratesAverage(movies)

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    return (Math.round(array.filter(element => {
        let result = element.genre.indexOf("Drama");
        if (result === -1) {
            return false
        } else {
            return true;
        }
    }).reduce((acc, val, index, array) => {
        if (val.rate === "") {
            if (index + 1 === array.length) {
                return acc / array.length
            }
            return acc
        }
        if (index + 1 === array.length) {
            return (acc + parseFloat(val.rate)) / array.length
        }
        return acc + parseFloat(val.rate)
    }, 0) * 100) / 100)

}

 /*function dramaMoviesRate(array) {
    if(array === []) return 0;
    const dramaMovies = array.filter(movie => {
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaMovies)
}*/


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)




function orderByDuration(array) {
    array.sort((a, b) => (a.duration > b.duration) ? 1 : (a.duration === b.duration) ? ((a.title > b.title) ? 1 : -1) : -1)
    return array

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


function howManyMovies(movies) {
    let x = movies.filter(function (movie) {
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    });
    return x.length
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let onlyTitles = movies.map(function (element) {
        return element.title;
    });
    let sortedArray = onlyTitles.sort(function (a, b) {
        return a.localeCompare(b);
    })
    if (sortedArray.length > 20) {
        sortedArray = sortedArray.splice(0, 20);

    }
    return sortedArray
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(array) {

    let array2 = []

    let f = array.map(x => {
        if (x.duration.length === 7) {
            return (parseInt(x.duration[0]) * 60 + parseInt(x.duration[3]))
        } else if (x.duration.length === 8) {
            return (parseInt(x.duration[0]) * 60 + parseInt(x.duration[3]) * 10 + parseInt(x.duration[4]))
        } else if (x.duration.length === 2) {
            return (parseInt(x.duration[0]) * 60)
        } else {
            return (parseInt(x.duration[0]) * 10 + parseInt(x.duration[1]))
        }


    })
    for (i = 0; i < f.length; i++) {
        array2[i]={
            title: array[i].title,
            year: array[i].year,
            director: array[i].director,
            duration: f[i],
            genre: array[i].genre,
            rate: array[i].rate,
        }

    }

    console.log(f)
    return array2;
    
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {
if (array == []) {
return 0 }


}