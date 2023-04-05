const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    
    {
      title: 'La vita è bella',
      year: 1997,
      director: 'Roberto Benigni',
      duration: '1h 56min',
      genre: ['Comedy', 'Drama', 'War'],
      score: 8.6
    },
    {
      title: 'The Usual Suspects',
      year: 1995,
      director: 'Bryan Singer',
      duration: '1h 46min',
      genre: ['Crime', 'Drama', 'Mystery', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Léon',
      year: 1988,
      director: 'Luc Besson',
      duration: '1h 50min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.6
    },
    {
      title: 'Saving Private Ryan',
      year: 1998,
      director: 'Steven Spielberg',
      duration: '2h 49min',
      genre: ['Drama', 'War'],
      score: 8.6
    },
    {
      title: 'Sen to Chihiro no kamikakushi',
      year: 2001,
      director: 'Hayao Miyazaki',
      duration: '2h 5min',
      genre: ['Animation', 'Adventure', 'Family', 'Fantasy', 'Mystery'],
      score: 8.6
    },
    {
      title: 'American History X',
      year: 1998,
      director: 'Tony Kaye',
      duration: '1h 59min',
      genre: ['Crime', 'Drama'],
      score: 8.5
    },
    {
      title: 'C"era una volta il West',
      year: 1968,
      director: 'Sergio Leone',
      duration: '2h 44min',
      genre: ['Western'],
      score: 8.6
    },
    {
      title: 'Interstellar',
      year: 2014,
      director: 'Christopher Nolan',
      duration: '2h 49min',
      genre: ['Adventure', 'Drama', 'Sci-Fi'],
      score: 8.6
    },
    {
      title: 'Psycho',
      year: 1960,
      director: 'Alfred Hitchcock',
      duration: '1h 49min',
      genre: ['Horror', 'Mystery', 'Thriller'],
      score: 8.5
    },
    {
      title: 'The Green Mile',
      year: 1999,
      director: 'Frank Darabont',
      duration: '3h 9min',
      genre: ['Crime', 'Drama', 'Fantasy', 'Mystery'],
      score: 8.5
    },
    {
      title: 'Casablanca',
      year: 1942,
      director: 'Michael Curtiz',
      duration: '1h 42min',
      genre: ['Drama', 'Romance', 'War'],
      score: 8.5
    },
    {
      title: 'City Lights',
      year: 1931,
      director: 'Charles Chaplin',
      duration: '1h 27min',
      genre: ['Comedy', 'Drama', 'Romance'],
      score: 8.6
    },
    {
      title: 'Intouchables',
      year: 2011,
      director: 'Olivier Nakache',
      duration: '1h 52min',
      genre: ['Biography', 'Comedy', 'Drama'],
      score: 8.6
    },
    {
      title: 'Modern Times',
      year: 1936,
      director: 'Charles Chaplin',
      duration: '1h 27min',
      genre: ['Comedy', 'Drama', 'Family', 'Romance'],
      score: 8.5
    },
    {
      title: 'Raiders of the Lost Ark',
      year: 1981,
      director: 'Steven Spielberg',
      duration: '1h 55min',
      genre: ['Action', 'Adventure'],
      score: 8.5
    },
    {
      title: 'The Pianist',
      year: 2002,
      director: 'Roman Polanski',
      duration: '2h 30min',
      genre: ['Biography', 'Drama', 'Music', 'War'],
      score: 8.5
    },
    {
      title: 'The Departed',
      year: 2006,
      director: 'Martin Scorsese',
      duration: '2h 31min',
      genre: ['Crime', 'Drama', 'Thriller'],
      score: 8.5
    },
    {
      title: 'Gladiator',
      year: 2000,
      director: 'Ridley Scott',
      duration: '2h 35min',
      genre: ['Action', 'Adventure', 'Drama'],
      score: 8.5
    },
    {
      title: 'The Prestige',
      year: 1994,
      director: 'Christopher Nolan',
      duration: '2h 10min',
      genre: ['Drama', 'Mystery', 'Sci-Fi', 'Thriller'],
      score: 8.5
    },
    {
      title: 'The Lion King',
      year: 1994,
      director: 'Roger Allers',
      duration: '1h 28min',
      genre: ['Animation', 'Adventure', 'Drama', 'Family', 'Musical'],
      score: 8.5
    },
    
  ];
  


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(movies) {
    const moviesArray = movies.map(allDirector => allDirector.director);
    return moviesArray;
    }
    const result = getAllDirectors(movies);
    console.log(result);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaMoviesSteven = movies.filter((movies) => {

    const moviesSteven = movies.director === 'Steven Spielberg';

    const dramaMovie = movies.genre.indexOf('Drama') >=0;


  return moviesSteven && dramaMovie;

  });
  return dramaMoviesSteven.length

};

console.log(howManyMovies(movies));



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalScore = movies.reduce((counter, movies) => {
  if (movies.score) {
    return counter + movies.score;
  } else {
    return counter;
  }
  }, 0)
  const averageScore = totalScore/ movies.length;
  return averageScore.toFixed(2);
  };
  
  console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const genreDrama = movies.filter((counter) => {
    return counter.genre.includes('Drama');
  });
    averageTotal = average(genreDrama);
    return averageTotal.toFixed(2);
  };
  
  console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
return movies.sort((a, b) => a.year - b.year);
}
const resultYear = orderByYear(movies);
console.log(resultYear);






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const titles = movies.map((element) => movies.title);
  titles.sort((a,b) => a - b);

  const twentyMovies = titles.splice(0, 5);
  return twentyMovies;
  

};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
