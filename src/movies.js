/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// not gettting this!!!

function orderByYear(arr) {
    let newArr = arr.slice().sort((a, b) => {
        if (a.year < b.year) {
            console.log("<", a.year, b.year);
            return -1;
        } else if (a.title < b.title) {
            console.log("===", a.year, b.year);
            return -1;
        } else {
            return 1;
        }
    });
    return newArr;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
/*
function howManyMovies(arr) {
    let howManySpielbergMovies = [];
    const spielbergMovies = arr.filter(function(movie) {
       if(arr.director === "Steven Spielberg" ) {
        h
        return 
       }
    } )

    return howManySpielbergMovies = spielbergMovies.length;
}*/
/*
function howManyMovies(movieArr){
    let spielbergMovies = [];
    let spielbergDramas = [];
    for(let i=0; i<movies.length; i++) {
      if (movieArr.length === 0) {
        return 0;
      } else if (movies[i].director !== "Steven Spielberg") {
        return 0;
      } else if (movies[i].director === "Steven Spielberg") {
          spielbergMovies.push(movies[i]);
          return spielbergMovies.length;
        }
        else if (movies[i].director === "Steven Spielberg" && movies[i].genre.includes("Drama")) {
            spielbergDramas.push(movies[i]);
            return spielbergDramas.length;
      }
  }
}
*/
/*function howManyMovies(arr) {

    const spielbergMovies = arr.filter(movie => arr.director === "Steven Spielberg")
  
    return howManySpielbergMovies = spielbergMovies.length;
  }*/

/*
function howManyMovies(arr) {
    for (let i = 0; i < movies.length; i++) {
        if (arr.length === 0) {
            return 0;

            const spielbergMovies = arr.filter(function (movie) {
                    return movie.director === "Steven Spielberg");
            });
        if (movie.genre.includes("Drama")) {
            spielbergMovies.forEach(function (spielbergMovie) {
                const spielbergDramas = arr.filter(function (drama) {
                    return drama.genre === "Drama";
                });
                return spielbergDramas.length;
            })

        }
    })

return spielbergMovies.length;
}


*/

function howManyMovies(arr) {
    const spielbergMovies = arr.filter(function (movie) {
        return movie.director === "Steven Spielberg";
    });
    return spielbergMovies.length;
}


//LOGIC CHAIN= movies ARRAY > film OBJECTS > director property (STRING) & genre property (ARRAY)

// console.log(movies[1].genre[0])

/*function howManyMovies(arr) {

    const spielbergMovies = arr.filter(movie => arr.director === "Steven Spielberg")
  
    return howManySpielbergMovies = spielbergMovies.length;
  }*/


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const onlyTitles = [];
    for (let i = 0; i < movies.length; i++) {
        onlyTitles.push(movies[i].title);
    } 
    const first20 = onlyTitles.sort();
    let twentyFirst = [];
    for (let i = 0; i < 20; i++) {
        twentyFirst.push(first20[i]);
    }
    return twentyFirst;
};

if (onlyTitles.charAt(0) === 'number') {

}
/* function orderAlphabetically(movies) {
    const onlyTitles = [];
    for (let i = 0; i < movies.length; i++) {
        onlyTitles.push(movies[i].title);
    }
    const first20 = onlyTitles.sort();
    let twentyFirst = [];
    for (let i = 0; i < 20; i++) {
        twentyFirst.push(first20[i]);
    }
    return twentyFirst;
};
*/
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    const sum = movies.reduce(function (acc, val) {
        if (val.rate) {
            return acc + val.rate;
        } else {
            return acc;
        }
    }, 0);
    return sum / movies.length
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(movie => movie.genre[1] === "Drama")
    const sumOfAlRates = dramaMovies.reduce(function (acc, movie) {
        return acc += dramaMovies.rate
    })
    return acc / dramaMovies.length
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let hoursInMinutes = arr[i].duration[0] * 60;
        let minutesTogether = arr[i].duration[3] + arr[i].duration[4];
        let completeLength = hoursInMinutes + +minutesTogether;
        newArray.push(completeLength)
    }
    return newArray
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average