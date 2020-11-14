const data = [
  {
    "title": "The Shawshank Redemption",
    "year": 1993,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Great Escape",
    "year": 1963,
    "director": "Frank Darabont",
    "duration": "2h 52min",
    "genre": [
      "Adventure",
      "Drama",
      "History",
      "Thriller",
      "War"
    ],
    "rate": 8.2
  },
  {
    "title": "Ikiru",
    "year": 1952,
    "director": "Frank Darabont",
    "duration": "2h 23min",
    "genre": [
      "Drama"
    ],
    "rate": 8.3
  },
  {
    "title": "Chinatown",
    "year": 1974,
    "director": "Roman Polanski",
    "duration": "2h 10min",
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rate": 8.2
  },
  {
    "title": "El laberinto del fauno",
    "year": 2006,
    "director": "Guillermo del Toro",
    "duration": "1h 58min",
    "genre": [
      "Drama",
      "Fantasy",
      "War"
    ],
    "rate": 8.2
  },
  // {
  //   "title": "Tonari no Totoro",
  //   "year": 1988,
  //   "director": "Hayao Miyazaki",
  //   "duration": "1h 26min",
  //   "genre": [
  //     "Animation",
  //     "Family",
  //     "Fantasy"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Incendies",
  //   "year": 2010,
  //   "director": "Denis Villeneuve",
  //   "duration": "2h 11min",
  //   "genre": [
  //     "Drama",
  //     "Mystery",
  //     "War"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Ran",
  //   "year": 1985,
  //   "director": "Akira Kurosawa",
  //   "duration": "2h 42min",
  //   "genre": [
  //     "Action",
  //     "Drama"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "The Gold Rush",
  //   "year": 1925,
  //   "director": "Charles Chaplin",
  //   "duration": "1h 35min",
  //   "genre": [
  //     "Adventure",
  //     "Comedy",
  //     "Drama",
  //     "Family"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "El secreto de sus ojos",
  //   "year": 2009,
  //   "director": "Juan José Campanella",
  //   "duration": "2h 9min",
  //   "genre": [
  //     "Drama",
  //     "Mystery",
  //     "Romance",
  //     "Thriller"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Inside Out",
  //   "year": 2014,
  //   "director": "Pete Docter",
  //   "duration": "1h 35min",
  //   "genre": [
  //     "Animation",
  //     "Adventure",
  //     "Comedy",
  //     "Drama",
  //     "Family",
  //     "Fantasy"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Judgment at Nuremberg",
  //   "year": 1961,
  //   "director": "Stanley Kramer",
  //   "duration": "3h 6min",
  //   "genre": [
  //     "Drama",
  //     "War"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "On the Waterfront",
  //   "year": 1954,
  //   "director": "Elia Kazan",
  //   "duration": "1h 48min",
  //   "genre": [
  //     "Crime",
  //     "Drama",
  //     "Thriller"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Hauru no ugoku shiro",
  //   "year": 2004,
  //   "director": "Hayao Miyazaki",
  //   "duration": "1h 59min",
  //   "genre": [
  //     "Animation",
  //     "Adventure",
  //     "Family",
  //     "Fantasy"
  //   ],
  //   "rate": 8.2
  // },
  {
    "title": "The Bridge on the River Kwai",
    "year": 1957,
    "director": "David Lean",
    "duration": "2h 41min",
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "rate": 8.2
  },
  {
    "title": "Room",
    "year": 2015,
    "director": "David Lean",
    "duration": "1h 58min",
    "genre": [
      "Drama"
    ],
    "rate": 8.2
  },
  {
    "title": "Det sjunde inseglet",
    "year": 1957,
    "director": "David Lean",
    "duration": "1h 36min",
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "rate": 8.2
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
  // {
  //   "title": "Schindler\"s List",
  //   "year": 1993,
  //   "director": "Steven Spielberg",
  //   "duration": "3h 15min",
  //   "genre": [
  //     "Biography",
  //     "Drama",
  //     "History"
  //   ],
  //   "rate": 8.9
  // },
  // {
  //   "title": "Saving Private Ryan",
  //   "year": 1998,
  //   "director": "Steven Spielberg",
  //   "duration": "2h 49min",
  //   "genre": [
  //     "Drama",
  //     "War"
  //   ],
  //   "rate": 8.6
  // },
  // {
  //   "title": "Sen to Chihiro no kamikakushi",
  //   "year": 2001,
  //   "director": "Hayao Miyazaki",
  //   "duration": "2h 5min",
  //   "genre": [
  //     "Animation",
  //     "Adventure",
  //     "Family",
  //     "Fantasy",
  //     "Mystery"
  //   ],
  //   "rate": 8.6
  // },
  // {
  //   "title": "L.A. Confidential",
  //   "year": 1997,
  //   "director": "Curtis Hanson",
  //   "duration": "2h 18min",
  //   "genre": [
  //     "Crime",
  //     "Drama",
  //     "Mystery",
  //     "Thriller"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "The Third Man",
  //   "year": 1949,
  //   "director": "Carol Reed",
  //   "duration": "1h 44min",
  //   "genre": [
  //     "Film-Noir",
  //     "Mystery",
  //     "Thriller"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Bacheha-Ye aseman",
  //   "year": 1997,
  //   "director": "Majid Majidi",
  //   "duration": "1h 29min",
  //   "genre": [
  //     "Drama",
  //     "Family"
  //   ],
  //   "rate": 8.4
  // },
  // {
  //   "title": "Scarface",
  //   "year": 1983,
  //   "director": "Brian De Palma",
  //   "duration": "2h 50min",
  //   "genre": [
  //     "Crime",
  //     "Drama"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "The Apartment",
  //   "year": 1960,
  //   "director": "Billy Wilder",
  //   "duration": "2h 5min",
  //   "genre": [
  //     "Comedy",
  //     "Drama",
  //     "Romance"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Metropolis",
  //   "year": 1927,
  //   "director": "Fritz Lang",
  //   "duration": "2h 33min",
  //   "genre": [
  //     "Drama",
  //     "Sci-Fi"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Jodaeiye Nader az Simin",
  //   "year": 2011,
  //   "director": "Asghar Farhadi",
  //   "duration": "2h 3min",
  //   "genre": [
  //     "Drama",
  //     "Mystery"
  //   ],
  //   "rate": 8.4
  // },
  // {
  //   "title": "Rashômon",
  //   "year": 1950,
  //   "director": "Akira Kurosawa",
  //   "duration": "1h 28min",
  //   "genre": [
  //     "Crime",
  //     "Drama",
  //     "Mystery"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Indiana Jones and the Last Crusade",
  //   "year": 1989,
  //   "director": "Steven Spielberg",
  //   "duration": "2h 7min",
  //   "genre": [
  //     "Action",
  //     "Adventure",
  //     "Fantasy"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "All About Eve",
  //   "year": 1950,
  //   "director": "Joseph L. Mankiewicz",
  //   "duration": "2h 18min",
  //   "genre": [
  //     "Drama"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Yôjinbô",
  //   "year": 1961,
  //   "director": "Akira Kurosawa",
  //   "duration": "1h 50min",
  //   "genre": [
  //     "Action",
  //     "Drama",
  //     "Thriller"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Babam ve Oglum",
  //   "year": 2005,
  //   "director": "Çagan Irmak",
  //   "duration": "1h 48min",
  //   "genre": [
  //     "Drama"
  //   ],
  //   "rate": 8.5
  // },
  // {
  //   "title": "Up",
  //   "year": 2009,
  //   "director": "Pete Docter",
  //   "duration": "1h 36min",
  //   "genre": [
  //     "Animation",
  //     "Adventure",
  //     "Comedy",
  //     "Family"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Batman Begins",
  //   "year": 2005,
  //   "director": "Christopher Nolan",
  //   "duration": "2h 32min",
  //   "genre": [
  //     "Action",
  //     "Adventure",
  //     "Thriller"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Some Like It Hot",
  //   "year": 1959,
  //   "director": "Billy Wilder",
  //   "duration": "2h 1min",
  //   "genre": [
  //     "Comedy",
  //     "Romance"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "The Treasure of the Sierra Madre",
  //   "year": 1980,
  //   "director": "John Huston",
  //   "duration": "2h 6min",
  //   "genre": [
  //     "Adventure",
  //     "Drama",
  //     "Western"
  //   ],
  //   "rate": 8.3
  // },
  // {
  //   "title": "Unforgiven",
  //   "year": 1995,
  //   "director": "Clint Eastwood",
  //   "duration": "2h 10min",
  //   "genre": [
  //     "Drama",
  //     "Western"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Der Untergang",
  //   "year": 2004,
  //   "director": "Oliver Hirschbiegel",
  //   "duration": "2h 36min",
  //   "genre": [
  //     "Biography",
  //     "Drama",
  //     "History",
  //     "War"
  //   ],
  //   "rate": 0
  // },
  // {
  //   "title": "Die Hard",
  //   "year": 1980,
  //   "director": "John McTiernan",
  //   "duration": "2h 11min",
  //   "genre": [
  //     "Action",
  //     "Thriller"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Raging Bull",
  //   "year": 1980,
  //   "director": "Martin Scorsese",
  //   "duration": "2h 9min",
  //   "genre": [
  //     "Biography",
  //     "Drama",
  //     "Sport"
  //   ],
  //   "rate": 8.2
  // },
  // {
  //   "title": "Heat",
  //   "year": 1995,
  //   "director": "Michael Mann",
  //   "duration": "2h 50min",
  //   "genre": [
  //     "Action",
  //     "Crime",
  //     "Drama",
  //     "Thriller"
  //   ],
  //   "rate": 8.2
  // },
];


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  return array.map(movie => movie.director);
}

// console.log(getAllDirectors(data));
console.log("------");

//Bonus
function clean(array) {

  const groupObjectByDirector = array.reduce(function (acc, obj) {
    let key = obj["director"];
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;

  }, {});

  // console.log(groupObjectByDirector)

  //loop through object 

  for (var key in groupObjectByDirector) {
    if (groupObjectByDirector.hasOwnProperty(key)) {

      groupObjectByDirector[key].forEach(each => {
        delete each.director;
      })
    }
  };

  return groupObjectByDirector;


}

console.log(clean(data));
console.log("------");

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const listOfMovies = array.filter(movie => movie.director == "Steven Spielberg");

  var countFilm = 0;

  listOfMovies.forEach(movie => {
    if (movie.genre.includes("Drama")) {
      countFilm += 1;
    }
  });
  return countFilm;

}
// console.log(howManyMovies(data));
console.log("------");


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
  if (array.length == 0) {
    return 0;
  }
  else {
    const average = array.reduce(function (accumulator, currentValue) {
      //check if movie doesn't have rate;
      if (currentValue.rate) {
        accumulator += (currentValue.rate);
      } else {
        accumulator += 0;
      }
      // accumulator += (currentValue.rate)?(currentValue.rate):0;

      return accumulator;
    }, 0
    )
    return +(average / array.length).toFixed(2);
  }
}


// console.log(ratesAverage(data));
console.log("------");

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  //check it is a drama film
  //average rate
  var listOfDramaFilms = [];
  array.forEach(movie => {
    if (movie.genre.includes("Drama")) {
      listOfDramaFilms.push(movie);
    }
  })
  return ratesAverage(listOfDramaFilms);

}

// console.log(dramaMoviesRate(data));
console.log("------");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {

  var newArray = [...array];

  const firstOrderByYear = newArray.sort(function (a, b) {
    //sorted year
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    //same year, sort title
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  });
  return firstOrderByYear;
}

// console.log(orderByYear(data));
console.log("------");


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  const newArray = [...array];
  const listTitle = [];

  const sortedArray = newArray.sort(function (a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
  })


  if (sortedArray.length < 20) {
    sortedArray.forEach(movie => listTitle.push(movie.title))

  } else {

    for (let i = 0; i < 20; i++) {
      listTitle.push(sortedArray[i].title);
    };
  }
  return listTitle;

}

// console.log(orderAlphabetically(data));
console.log("------");

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  // var newArray = array.map(movie => movie?movie:null);           ?????? array will be updated
  //var newArray = [...array]                                       ?????? array will be updated
  // var newArray = Object.assign([],array);                        ?????? array will be updated
  var newArray = JSON.parse(JSON.stringify(array));
  // var newArray =[];
  // array.forEach(movie =>{
  //   var newMovie = JSON.parse(JSON.stringify(movie));
  //   newMovie.duration = 1;
  //   newArray.push(newMovie);
  // })

  newArray.forEach(movie => {
    var changeTime = changeToMinute(movie.duration);
    movie.duration = changeTime;
  });


  return newArray;
}

function changeToMinute(time) {
  //remove whitespace before and after string, and extra whitespace between 2 words
  time = time.replace(/\s{2,}/g, ' ').trim();

  if (!time.includes("h") && time.includes("min")) {
    //format of time is a string: "4min"
    return Number(time.slice(0, time.length - 3));

  }
  else if (time.includes("h") && !time.includes("min")) {
    //format of time is a string: "3h"
    return Number(time.slice(0, time.length - 1)) * 60;

  } else {
    //format of time is a string: "3h 4min"
    let extractTime = time.split(' ');
    let hoursToMinutes = Number(extractTime[0].slice(0, extractTime[0].length - 1)) * 60;
    let convertAllToMinutes = hoursToMinutes + Number(extractTime[1].slice(0, extractTime[1].length - 3));

    return convertAllToMinutes;
  }

}


// console.log(turnHoursToMinutes(data));
console.log("------");

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(array) {
  if (array.length == 0) {
    return null;
  }
  else {
    const groupObjectsByYear = array.reduce(function (acc, obj) {

      let key = obj["year"];

      //  create new object which has property "year"
      //  new object has the ordering of the properties
      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(obj.rate);
      return acc
    }, {});

    //convert object to array

    const check = Object.entries(groupObjectsByYear);

    // calculate rate average of each year and put this average to the end of year array
    check.forEach(each => each.push(avgOfArray(each[1])));

    //sort by average
    const sortedByAverage = check.sort(function (a, b) {
      if (a[2] > b[2]) return -1
      if (a[2] < b[2]) return 1
    })

    return `The best year was ${sortedByAverage[0][0]} with an average rate of ${sortedByAverage[0][2]}`

  }
}

// console.log(bestYearAvg(data));

function avgOfArray(array) {
  if (array.length == 0) {
    return 0;
  } else {
    let sum = 0;
    array.forEach(element => sum += element);
    return +(sum / array.length).toFixed(2);
  }
}
