/* eslint no-restricted-globals: 'off' */
// import movies from "./data"
//Iteration 1: All rates average - Get the average of all rates with 2 decimals 

const ratesAverage = (array) => {
    const sumRatings = array.reduce((acc, el) =>{ 
        return Number(acc) + Number(el.rate);
    }, 0)
    return sumRatings/array.length;
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    const dramaRating = arr.filter(el => {
        return el.genre.includes('Drama')
    })
    if(dramaRating.length===0) return 0;
    return Number(ratesAverage(dramaRating).toFixed(2));
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


const orderByYear = (array) => {
    const sortedArray = [...array].sort((a, b) => {
        if(Number(a.year)===Number(b.year)) {
            return a.title.localeCompare(b.title);
        };
        return Number(a.year) - Number(b.year);
    })
    return sortedArray;
} 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (array) => {
    const dramaMovies = array.filter(el => {
        return el.genre.includes('Drama');
    })
    const spielbergMovies = dramaMovies.filter(el => {
        return el.director === 'Steven Spielberg';
    })
    return spielbergMovies.length
} 

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    let arraySorted = [...arr].sort((a,b) => {
        return a.title.localeCompare(b.title)
    })
    arraySorted = arraySorted.map(el => el.title)
    if(arraySorted.length <= 20) return arraySorted
    return arraySorted.slice(0,20)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    const arrayCopy= JSON.parse(JSON.stringify(arr))
    return arrayCopy.map(el => {
        const duration = el.duration.split(' ')
        let time = 0;
        if(duration.length == 1){
            if(duration[0].match(/.min/)) el.duration = parseInt(duration[0])
            else if(duration[0].match(/.h/)) el.duration = parseInt(duration[0])*60   
        } else {
            el.duration = parseInt(duration[0])*60 + parseInt(duration[1]) 
        }
        return el
    })
}
// const a = [{
//     "title":"The Shawshank Redemption",
//     "year":"1994",
//     "director":"Frank Darabont",
//     "duration":"2h 22min",
//     "genre":["Crime","Drama"],
//     "rate":"9.3"
//   }]
var movieTry = [{ duration: "2h" }];
// var movieTry = [{ duration: "54min" }];
console.log(turnHoursToMinutes(movieTry))
console.log(movieTry)

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = (arr) => {
    const sorted = orderByYear(arr);
    const rateMoviePerYear = [];
    sorted.map((movie, idx, arr) => {
        let tempYear = movie.year;
        let ratePerYear = 
        arr.reduce((acc, el) => {
            while(tempYear === el.year){
                console.log(el.rate)
                return acc + Number(el.rate);
            }
        }, 0)
        rateMoviePerYear.push(ratePerYear)
    })
    return `The best year was 2007 with an average rate of ${Math.max(rateMoviePerYear)}`;
} 

// console.log(bestYearAvg(movies));