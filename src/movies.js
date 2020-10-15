// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(movies) {
  let directors = movies.map(movie => movie.director);

  return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(m) {

  const movies = [
    {
      "title": "Saving Private Ryan",
      "year": 1998,
      "director": "Steven Spielberg",
      "duration": "2h 49min",
      "genre": [
        "Drama",
        "War"
      ],
      "rate": 8.6
    },
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "The Lord of the Rings: The Two Towers",
      "year": 2002,
      "director": "Peter Jackson",
      "duration": "2h 59min",
      "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
      ],
      "rate": 8.7
    },
    {
      "title": "One Flew Over the Cuckoo\"s Nest",
      "year": 1975,
      "director": "Milos Forman",
      "duration": "2h 13min",
      "genre": [
        "Drama"
      ],
      "rate": 8.7
    },

  ];

  function esStenven(movie) {
    return movie.director === "Francis Ford Coppola"
  }

  let result = movies.filter(esStenven);
  console.log(result);

  if (m.length === 0){
    result = 0

  }
  return result
};
howManyMovies();
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
