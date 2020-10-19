//just for debugging purposes
let movies = [
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
    "director": "Steven Spielberg",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "title": "Schindler\"s List",
    "year": 1993,
    "director": "Steven Spielberg",
    "duration": "3h 15min",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "rate": 8.9
  },
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
  }
]

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = arr =>{
  let movieDirectorsList= arr.map(name => name.director);
  return movieDirectorsList;
}
getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// const getAllDirectors = (moviesList) => {
//     const movieDirectorsList = moviesList.map((movie) => movie.director);
//     const removedDuplicates = movieDirectorsList.reduce((acc, currentValue) => {
//       if (acc.includes(currentValue)) {
//         return acc;
//       } else {
//         return [...acc, currentValue];
//       }
//     }, []);
//     return removedDuplicates;
//   };

//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//x is used even it does not make sense for now, it made me understand iteration better
const howManyMovies = moviesList => {
  let stevenDramaMovie= moviesList.filter((x) => x.director === "Steven Spielberg" && x.genre.includes("Drama"));
  return stevenDramaMovie;
}
howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr =>{
  if(arr.length ===0) {return 0};
  let collectRate= arr.map(num=> num["rate"]);
  let sumRate= collectRate.reduce((acc, curr) => acc + curr);
  let averageRate= ((sumRate/arr.length).toFixed(2));
  console.log(averageRate);
}
ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr =>{
  let dramaMovies= arr.map(film =>film["genre"].includes("Drama"));
  if (dramaMovies.length === 0){return 0};
  let collectDramaMovies= dramaMovies.map(film =>film["rate"]);
  let average= collectDramaMovies.reduce((a,b)=> a+b);
  let dramaAverageRate=((average/arr.length).toFixed(2));
  console.log(dramaAverageRate);
}
ratesAverage(movies);
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr =>{
  let onlyYear= arr.map(date =>date.year);
  let sortYear= onlyYear.sort((a,b)=> b-a);
  return sortYear;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr =>{
  let moviesTitle = arr.map(name => name.title)
  let titleArray = moviesTitle.sort()
  //from 0 to 20
  let slicedTitleArray = titleArray.slice(0, 20)
  return slicedTitleArray;
}
orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average