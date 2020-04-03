/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let newMovies = [...arr]
        return newMovies.sort((a,b) =>{
    if(a.year === b.year) {
        return a.title.localeCompare(b.title) //string compare, sort by utseld will work with string and numbers but not more complex data
    }
    else {
        return a.year - b.year
    }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
    let sbMovies = arr.filter(obj => obj.director === "Steven Spielberg" && obj.genre.includes("Drama"));
    return sbMovies.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
    const orderAlphabetically = (arr) => {
        let copyOfArray = [...arr];
        copyOfArray.sort((a,b) => {
        return a.title.localeCompare(b.title) 
        })
        const movieOrder = copyOfArray.map((eachMovie) => {        // function (param) {return} is the same as (param) => {return } this can also be written as (param) => implied return code
        return eachMovie.title
        // return parameter -> eachMovie = each element of an arr; arr[i]
    })
    return movieOrder.slice(0,20)
    }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if(arr.length === 0) {
        return 0
    } else {
    let copyOfArray = [...arr]
    const sum = copyOfArray.map((eachMovie) => {
        return eachMovie.rate
    }, 0)
    let den = sum.length
    let avg = sum.reduce((a, b) => a + b, 0)/den
    return Number(avg.toFixed(2))
    }
}


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr, genre) => {
    let arrDrama = []
    let copyOfArray = [...arr] // copies original array 
    const count = copyOfArray.map((eachMovie) => {
        return eachMovie.genre.includes(genre)
    }) // creates a new array containing only 'true' values
    for (let i = 0; i < count.length; i++) { // establishes the indexes of true and then applies them as an index to arrDrama
      if(count[i] === true) { // if count[i] = true, then copyOfArray[i] is pushed into the rates average
        arrDrama.push(copyOfArray[i])
      }
    }
  return ratesAverage(arrDrama)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// function timeConverter(duration) {
//     let minutes = 0;
//     let array = duration.split("h");
//     if (array.length === 1) {
//       minutes += parseInt(array[0]);
//     } else if (array[1] === "") {
//       minutes += array[0] * 60;
//     } else {
//       minutes += array[0] * 60 + parseInt(array[1]);
//     }
//     return minutes;
//   }
  
//   function turnHoursToMinutes(movies) {
//     return movies.map(function (movie) {
//       let copyOfMovie = { ...movie };
//       copyOfMovie.duration = timeConverter(movie.duration);
//       return copyOfMovie;
//     });
//   }

// REVIEW CODE AND FIND A SOLUTION 
  

// BONUS Iteration: Best yearly rate average - Best yearly rate average
