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
    title: "Lock, Stock and Two Smoking Barrels",
    year: "1998",
    director: "Guy Ritchie",
    duration: "1h 47min",
    genre: ["Comedy", "Crime"],
    rate: "8.2"
  },
  {
    title: "The Godfather",
    year: "1972",
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: "9.2"
  },
  {
    title: "The Matrix",
    year: "1999",
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    rate: "8.7"
  }
];

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  var sum = arr.reduce((acc, movie) => {
    acc += Number(movie.rate);
    return acc;
  }, 0);
  return (sum / arr.length).toFixed(2);
}

console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies
function avgDrama(arr) {
  const drama = arr.filter(movie => {
    return movie.genre.includes("Drama");
  });
  return ratesAverage(drama);
}

console.log(avgDrama(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order) =>sort()
function orderByYear(arr) {
  arr.sort((a, b) => {
  if (a.year - b.year === 0) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  }
  console.log(a.year - b.year)
 }
}

console.log(orderByYear(movies)); // I don't understand why it doesn't work ??

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct => reduce()

function howManyMovies(arr) {
    var filtered = arr.filter(movie => {
      return movie.director === "Steven Spielberg";
      const drama = arr.filter(movie => {
        return movie.genre.includes("Drama");
      });
    });
    return filtered.length;
  }
  
  console.log(howManyMovies(movies));

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderByTitle(arr) {
    var titleArr = arr.map(movie => {
      return movie.title;
    });
    var titleOrdered = titleArr.sort((a, b) => {
      if (a.startsWith("the") || b.startsWith("the")) {
        return a.slice(0, 3, "the") || b.slice(0, 3, "the");
      }
      if (a < b) return -1;
      if (b > a) return 1;
      return 0;
    });
    if (titleOrdered.length < 20) return titleOrdered.slice(0, 19);
    return titleOrdered;
  }
  
  console.log(orderByTitle(movies)); // I didn't find how to not take into account the "the" ? Could I have some tips ?