/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (movies) => {
    const rateSum = movies.reduce((acc, value) => acc + value.rate, 0);
    return rateSum / movies.length;

}

/* function ratesAverage(movies) {
    const sum = movies.reduce((rates, movie) => {
      return (movie.rate + rate);
    }, 0);
    return sum / movies.length;
  } */










// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    //filter alle dramen
    const dramaMovies = movies.filter((dramaMovie) => dramaMovie.genre.includes("Drama"));

    const sum = dramaMovies.reduce((acc, value) => acc + value.rate, 0);
    if (dramaMovies.length === 0) {
        return 0;
    }
    /* console.log(sum);
    console.log(parseFloat(sum/dramaMovies.length)) */
    return Number((sum / dramaMovies.length).toFixed(2));
}










// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByYear = (movies) => {
    movies.sort((a, b) => {
        if (Number(a.year) !== Number(b.year)) {
            return Number(a.year) - Number(b.year)
        };
        return (a.title).localeCompare(b.title)
    });
    return movies;
};

/* const orderByYear = (movies) => {
    movies.sort((a, b) => {
        if (Number(a.year) !== Number(b.year)) {
            return Number(a.year) - Number(b.year)
        }

        else if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        }
        return 0

        // return (a.title).localeCompare(b.title)
    });
    return movies;
};
 */










// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (movies) => {
    const spielbergMovies = movies.filter((film) => film.director === 'Steven Spielberg').filter((film) => film.genre.includes('Drama'));
    return spielbergMovies.length
}










// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    const alphabeticMovies = movies.sort((a, b) => {
        return (a.title).localeCompare(b.title)
    }).map((film) => film.title);
    return alphabeticMovies.splice(0, 20)
}

/* const orderAlphabetically = (movies) => {
    const alphabeticMovies = movies.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        } else if (a.title > b.title) {
            return 1;
        }
        return 0
        // return (a.title).localeCompare(b.title)
    }).map((film) => film.title);
    return alphabeticMovies.splice(0, 20)
} */










// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


const turnHoursToMinutes = (movies) => {

    const newMovies = JSON.parse(JSON.stringify(movies)).map((movie) => movie);
    // console.log(movies[0].duration===newMovies[0].duration);

    const newDurations = newMovies.map((movie) => {
        const hours = Number(movie.duration.match(/\d+(?=h)/));
        const minutes = Number(movie.duration.match(/\d+(?=min)/));
        if (hours) {
            movie.duration = hours * 60 + minutes;
            return movie
        };
        movie.duration = minutes
        return movie;
    });

    newMovies.forEach((element, pos) => {
        element.duration = newDurations[pos].duration
    });

    return newMovies
};

// x(?=y) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
// Steht für die Zeichen "x", jedoch nur wenn "x" vor "y" steht. Dies wird als lookahead (vorausschauen) bezeichnet.
// Zum Beispiel passt /Mustermann(?=Max)/ auf "Mustermann" nur dann, wenn "Max" dahinter steht. Der Ausdruck /Mustermann(?=Max|Erika)/ passt auf "Mustermann" nur dann, wenn dahinter "Max" oder "Erika" steht. Doch weder "Max" noch "Erika" ist Teil des übereinstimmenden Ergebnisses.

// \d  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<	
// Steht für Ziffern und ist äquivalent zu [0-9].

// Zum Beispiel passt /\d/ oder /[0-9]/ auf "2" in "B2 ist die Zimmernummer."

// match <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Eine Methode von String, die eine Suche nach einer Übereinstimmung in einer Zeichenkette durchführt. Sie gibt ein Array zurück oder null bei keinem Treffer.



//WILLIAMs CODE
/* return JSON.parse(JSON.stringify(movies)).map((movie) => {
    const hours = movie.duration.match(/\d+(?=h)/g);
    const minutes = movie.duration.match(/\d+(?=min)/g);
    if (hours) {
        movie.duration = (Number(hours) * 60 + Number(minutes));
        return movie;
    }
    movie.duration = Number(minutes);
    return movie;
}) */



//Pariss CODE -----------> doesnt work because: mp-mv is NO DEEPCOPY of mv
// function turnHoursToMinutes(mv) {
//     /* let newMovies = JSON.parse(JSON.stringify(mv));
//     let mp_mv = newMovies.map ======>>>>>> Thats what it needed to say in order to work*/
//     let mp_mv = mv.map(a => {
//         let num = a.duration
//         if ((num.includes('h'))&&(num.includes('min')))
//         {
//             let n = num.split(' ')
//             num = parseFloat(n[0])*60 + parseFloat(n[1])
//         }
//         else if (num.includes('h'))
//             num = parseFloat(num)*60
//         else if (num.includes('min'))
//             num = parseFloat(num)
//         a.duration = num
//         return a
//     })
//     return mp_mv
// }
//------------------------------------------------>>>>>>>>>>>>>>>>><

// const turnHoursToMinutes = (movies) => {
//     const newMovies = JSON.parse(JSON.stringify(movies)).map((movie)=>movie)










// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = (movies) => {

    //First: checking if there are no movies or only one in the array!
    if (movies.length === 0) {
        return null
    }


    //creating an array that only contains all years in the order they appear in the original list
    const allYears = movies.map(movie => movie.year);
    //creating an array with every year sorted and only appearing once
    const sortedYears = allYears.filter((year, pos, arr) => pos === arr.lastIndexOf(year)).sort();


    //creating an empty array to later push the movies sorted by year into
    const sortedMovies = [];
    //iterating through all the years in the sorted array and matching/filtering/separating the movies in seperate arrays, sorted by years
    for (year of sortedYears) {
        const moviesOfYear = movies.filter((movie) => {
            return movie.year === year
        });
        sortedMovies.push(moviesOfYear);
    };


    //creating an array with each element being the average movie rate for each year
    const collectedAverageRates = [];
    // iterating through all the sorted movies, returning the average movie-rate of each year - and pushing it into the collection array above
    for (year of sortedMovies) {
        const sumRateYear = year.reduce((acc, movie) => {
            return acc + Number(movie.rate)
        }, 0);
        collectedAverageRates.push(Number((sumRateYear / year.length).toFixed(1)))
    };



    // assigning the best year and the best rate to variables
    let maxBestRate = Math.max(...collectedAverageRates);
    let oldestBestYear = sortedYears[collectedAverageRates.indexOf(maxBestRate)];


    //final return-statement

    return `The best year was ${oldestBestYear} with an average rate of ${maxBestRate}`
}