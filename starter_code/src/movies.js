/* eslint no-restricted-globals: 'off' */
let films = [{
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": "30min",
        "genre": [
            "Crime",
            "Drama"
        ],
        "rate": 10
    },
    {
        "title": "The Godfather",
        "year": 1994,
        "director": "Francis Ford Coppola",
        "duration": "2h",
        "genre": [
            "Crime",
            "Drama"
        ],
        "rate": 11
    },
    {
        "title": "Saving Private Ryan",
        "year": 1998,
        "director": "Steven Spielberg",
        "duration": "1h 15min",
        "genre": [
          "Drama",
          "War"
        ],
        "rate": 12
      },
]
 

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    if (arr.length === 0) {
        return {}
    } else {
         arr.sort((a, b) => {
            if (a.year === b.year) {
                if (a.title > b.title) return 1;
                else if (a.title === b.title) return 0;
                else if (a.title < b.title) return -1;
            } else {
                return a.year - b.year;
            }
        });

        return arr 
    }
}

//console.log(orderByYear(films));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

//function howManyMovies(arr) {
//    let arr2 = [];
//
//    if (arr.length === 0) {
//        return 0
//    }
//   else {
//        arr2 = arr.filter((a) => a.director === "Steven Spielberg" && a.genre ==="Drama");
//        return arr2.length;
//    }
//}

function howManyMovies(arr) {
    let arr2 = [];
    let arr3 = [];

    if (arr.length === 0) {
        return 0
    }
    else {
        arr2 = arr.filter(function(a) {return a.director === "Steven Spielberg"}) ;
        arr3 = arr2.filter(function(a) {return a.genre.indexOf("Drama") !== -1});
        
        return arr3.length;
    }
}

//console.log(howManyMovies(films));


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (arr) {
    let newArr = [...arr];
    newArr = newArr.sort(function(a,b) {
        if (a.title > b.title) return 1; 
        if (a.title === b.title) return 0; 
        if (a.title < b.title) return -1;
    }
    )
    newArr2 = newArr.slice(0, 20);
    newArr3 = newArr2.map(x => x.title)
    return newArr3;
}

//console.log(orderAlphabetically(films));

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    let arr2 = [];
    let sumRates = 0;
    let avg = 0;
    if (arr.length === 0) return 0;
    else {
        arr2 = arr.filter(a => !isNaN(a.rate)) 
        sumRates = arr2.reduce((acc, x) => acc + x.rate, 0)
        avg = (sumRates / arr.length).toFixed(2);
        return Number(avg);
    }
    };

//console.log(ratesAverage(films));


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramaMovies = [2];
    let sumDramaRate = 0;
    let avgDrama = 0;
    if (arr.length === 0) return 0;
    else {
        dramaMovies = arr.filter(a => a.genre.indexOf("Drama") !== -1);
        if (dramaMovies.length === 0) return 0;
        sumDramaRate = dramaMovies.reduce((acc, x) => acc += x.rate, 0);
        avgDrama = (sumDramaRate / dramaMovies.length).toFixed(2);
        return Number(avgDrama);
    }
}

//console.log(dramaMoviesRate(films));


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertSt(st) {
    let indexH = st.indexOf("h");
    let indexM = st.indexOf("m");
    if (st.includes("h")) {
    return Number(st.slice(0, indexH)*60) + Number(st.slice(indexH+2,indexM)); 
    }
    else {
        return Number(st.slice(0, indexM));
    }
}
//console.log(convertSt("2h"));

function turnHoursToMinutes(arr) {
    newArr = [];
    newArr = arr.reduce((acc, x) => acc += convertSt(x.duration), 0);
    return (newArr);
}

console.log(turnHoursToMinutes(films));

// BONUS Iteration: Best yearly rate average - Best yearly rate average

/*function GroupBy (arr, year) {
    return arr.reduce(function(acc, obj)) {
        acc += obj
        if(!acc[cle]){
            acc[cle] = [];
          }
          acc[cle].push(obj);
          return acc;
        }
    }
var filmsPerYear = GroupBy(films, year);



function bestYearAvg(arr) {
    let moviesPerYear = [];
    let avgRatePerYear = 0;
    if (!arr.length) return 0;
    else {
        moviesPerYear = arr.filter(a => a.year === a.year);
        avgRatePerYear = moviesPerYear.reduce((acc,x) => acc =+ arr.rate, 0, moviesPerYear)
        return Number(avgRatePerYear);
    }
}*/

//console.log(bestYearAvg(films));