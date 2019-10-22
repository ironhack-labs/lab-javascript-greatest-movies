let movies = [
  {
    title: "The Shawshank Redemption",
    year: "1994",
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: "9.3"
  },
  {
    title: "Saving Private Ryan",
    year: "1998",
    director: "Steven Spielberg",
    duration: "2h 49min",
    genre: ["Drama", "War"],
    rate: "8.6"
  },
  {
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: "9.2"
  }
];

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {


console.log(ratesAverage(movies));











/* const sum = arr.reduce((acc,movie) => {
  acc = acc + Number(movie.rate)
  return  acc;
},0)
const avg = sum / arr.length
return Number(avg.toFixed(2));
} */

// Iteration 2: Drama movies - Get the average of Drama Movies
function avgDrama(arr) {
  var onlyDrama = arr.map(elem => elem.genre.filter(item => item === "Drama"));
  return ratesAverage(onlyDrama);
}

//2 façons : index of renvoie -1 => l'élément n'existe pas

/* function dramaMoviesRate (arr) {
  const dramaMovies = arr.filter(movie => {
    return movie.genre.includes("Drama")
  });
  if (dramaMovies.length === 0) return 0;
  const avg = ratesAverage(dramaMovies)
}*/

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order) =>sort()

function orderByYear(arr) {
  return arr.sort((a, b) => a.duration < b.duration);
}

/* function OrderByYear(arr) {
  return arr.sort((movie1,movie2) => movie2.year - movie1.year)
  )
} 

OR

return arr.sort((movie1,movie2) => {
 // si pas égal à 0; return !movie1.year - movie2.year === 0 ? movie.year - movie2.year :
})

if (a.year - b.year === 0) {
  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
}
return a.year - b.year;
})

*/

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct => reduce()

function howManyMovies(arr) {
  var res = arr.reduce((sum, currentValue) => {
    if (currentValue.director === "Steven Spielberg") sum + 1;
  }, 0);
  return res;
}

console.log(howManyMovies(movies)); // My result is 0 and I should have 1, why does it don't work ?

/* 
function howManymovies(arr) {
  const stevenDrama = arr.filter(movie => {
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  })
return stevenDramaMovies.length;
}
*/

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderByTitle(arr) {
  var res = arr.sort((a, b) => a.title < b.title);
  return res.splice(0, 21);
}

/* 
function orderAlph(arr {
 return arr.map(movie => movie.title)
}).sort((a,b) => {
  if (a > b) return 1;
  if (a > b) > return -1;
  return 0;
}).slice(0,20)
*/

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes => map()

/* function turnHourstoMinute(arr) {
  const clone = JSON.parse(JSON.stringify(arr));
  clone.forEach(movie => {
    const splitted = movie.duration.split("");
    if (splitted.length ===1) {
      let hourstominute = splittedTime[0];
      if (splitted[0].includes("h")) {
        duration = parseFloat(spplited[0]) *60;
        movie.duration = duration;
        return;
      }
      if (hoursorminute.includes("min")) {
        movie.duration === parseFloat(hourstominute);
        return;
      })
    }
    let hours = parseFloat(splitted[0] *60);
    let minutes = parseFloat(splitted[1]);
    movie.duration = hours + minutes;
  })
  return clone;
} */

// BONUS Iteration: Best yearly rate average - Best yearly rate average filter()

/* function bestAverage(arr) {
  const groupedYears = arr.reduce((acc, movie) => {
    if (acc[movie.year]) acc[movie.year].push(movie.rate);
    else acc[movie.year] = [movie.rate];
    return acc;
  });
  for (let year in groupedYears) {
    let avg = ratesAverage(groupedYears[year]);
  }
} */
