/* eslint no-restricted-globals: 'off' */

let arr1 = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    rate: 9.3
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    rate: 9
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    rate: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: 8.9
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rate: 8.9
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: 8.9
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Sergio Leone",
    duration: "3h 2min",
    genre: ["Western"],
    rate: 8.9
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rate: 8.8
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: 8.8
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    rate: 8.8
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.8
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rate: 8.8
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Adventure", "Drama", "Fantasy"],
    rate: 8.7
  },
  {
    title: 'One Flew Over the Cuckoo"s Nest',
    year: 1975,
    director: "Milos Forman",
    duration: "2h 13min",
    genre: ["Drama"],
    rate: 8.7
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Crime", "Drama"],
    rate: 8.7
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "Lana Wachowski",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    rate: 8.7
  },
  {
    title: "Shichinin no samurai",
    year: 1954,
    director: "Akira Kurosawa",
    duration: "3h 27min",
    genre: ["Adventure", "Drama"],
    rate: 8.7
  },
  {
    title: "Star Wars",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7
  },
  {
    title: "Cidade de Deus",
    year: 2002,
    director: "Fernando Meirelles",
    duration: "2h 10min",
    genre: ["Crime", "Drama"],
    rate: 8.7
  },
  {
    title: "Se7en",
    year: 1995,
    director: "David Fincher",
    duration: "2h 7min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rate: 8.6
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    duration: "1h 58min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.6
  },
  {
    title: 'It"s a Wonderful Life',
    year: 1946,
    director: "Frank Capra",
    duration: "2h 10min",
    genre: ["Drama", "Family", "Fantasy"],
    rate: 8.6
  },
  {
    title: "La vita è bella",
    year: 1997,
    director: "Roberto Benigni",
    duration: "1h 56min",
    genre: ["Comedy", "Drama", "War"],
    rate: 8.6
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    director: "Bryan Singer",
    duration: "1h 46min",
    genre: ["Crime", "Drama", "Mystery", "Thriller"],
    rate: 8.6
  },
  {
    title: "Léon",
    year: 1988,
    director: "Luc Besson",
    duration: "1h 50min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.6
  }
];

console.log("----------------------------");

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  if (arr.length == 0) {
    return [null];
  } else {
    arr.sort(function(a, b) {
      return a.year == b.year ? (a.title > b.title) - 0.5 : a.year - b.year;
    });
    return arr;
  }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let arr2 = [];
  let arr3 = [];
  if (arr.length === 0) {
    return 0;
  } else {
    arr2 = arr.filter(a => a.director == "Steven Spielberg");
    arr3 = arr2.filter(a => a.genre.indexOf("Drama") !== -1);
    return arr3.length;
  }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrNotMutated) {
  arrTemp = [...arrNotMutated];
  if (arrTemp.length == 0) {
    return [null];
  } else {
    arrTemp.sort(function(a, b) {
      return (a.title > b.title) - 0.5;
    });

    arrTemp.length >= 20 ? (arrTemp = arrTemp.slice(0, 20)) : arrTemp;

    var arrFinal = [];

    arrTemp.forEach(v => arrFinal.push(v.title));

    return arrFinal;
  }
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    sum = 0;
    arr.forEach(v => (!isNaN(v.rate) ? (sum += v.rate) : 1));
    return Math.round((sum / arr.length) * 100) / 100;
  }
}

// console.log (ratesAverage(([{ rate: 8 }, { rate: 8 }])));

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  if (arr.length == 0 || arr.filter(v => v.genre == "Drama").length == 0) {
    return 0;
  } else {
    var sum = 0;
    var count = 0;
    arr
      .filter(v => v.genre == "Drama")
      .forEach(v => {
        if (!isNaN(v.rate)) {
          sum += v.rate;
          count++;
        }
      });
    return Math.round((sum / count) * 100) / 100;
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function durationConvert(st) {
  hIndex = st.split("").indexOf("h");
  mIndex = st.split("").indexOf("m");

  if (mIndex == -1) {
    st = Number(st.slice(0, hIndex)) * 60;
  } else {
    if (hIndex == -1) {
      st = Number(st.slice(hIndex + 1, mIndex));
    } else {
      st =
        Number(st.slice(0, hIndex)) * 60 + Number(st.slice(hIndex + 1, mIndex));
    }
  }
  return st;
}

function turnHoursToMinutes(arrTemp) {
  const arr = [...arrTemp];
  if (arr.length === 0) {
    return null;
  } else {
    const arr2 = arr.map(v => {
      let newObj = {...v};
      newObj.duration=durationConvert(newObj.duration);
      return newObj;
    });
    return arr2;
  }
}

console.log(typeof turnHoursToMinutes(arr1)[0].duration);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (arr.length == 0) {
    return null;
  } else {
    var years = [];

    arr.forEach(v => {
      if (years.indexOf(v.year) == -1) {
        years.push(v.year);
      }
    });

    years.sort();

    max = 0;

    var averages = new Array(years.length);
    var count = new Array(years.length);

    years.forEach((v, i) => {
      arr2 = arr.filter(element => element.year == years[i]);
      averages[i] = arr2.reduce((acc, v2) => acc + v2.rate, 0);
      count[i] = arr2.length;
    });

    averages.forEach((v, i, arr) => (arr[i] = v / count[i]));

    daAverage = Math.max(...averages);
    daYear = years[averages.indexOf(daAverage)];

    return `The best year was ${daYear} with an average rate of ${daAverage}`;
  }
}

bestYearAvg(arr1);
