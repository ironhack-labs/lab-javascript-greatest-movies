/* eslint no-restricted-globals: 'off' */
let movies = [
    {
      "title": "The Shawshank Redemption",
      "year": 1972,
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
      "title": "The Dark Knight",
      "year": 2008,
      "director": "Christopher Nolan",
      "duration": "2h 32min",
      "genre": [
        "Action",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rate": 9
    },
    {
      "title": "12 Angry Men",
      "year": 1957,
      "director": "Sidney Lumet",
      "duration": "1h 36min",
      "genre": [
        "Crime",
        "Drama"
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
    },
    {
      "title": "Kimi no na wa.",
      "year": 2016,
      "director": "Makoto Shinkai",
      "duration": "1h 46min",
      "genre": [
        "Animation",
        "Drama",
        "Fantasy",
        "Romance"
      ],
      "rate": 8.5
    },
    {
      "title": "Lawrence of Arabia",
      "year": 1962,
      "director": "David Lean",
      "duration": "3h 36min",
      "genre": [
        "Adventure",
        "Biography",
        "Drama",
        "History",
        "War"
      ],
      "rate": 8.3
    },
    {
      "title": "Double Indemnity",
      "year": 1944,
      "director": "Billy Wilder",
      "duration": "1h 47min",
      "genre": [
        "Crime",
        "Drama",
        "Film-Noir",
        "Mystery",
        "Thriller"
      ],
      "rate": 8.3
    },
    {
      "title": "Amadeus",
      "year": 1984,
      "director": "Milos Forman",
      "duration": "2h 40min",
      "genre": [
        "Biography",
        "Drama",
        "History",
        "Music"
      ],
      "rate": 8.3
    },
    {
      "title": "Eternal Sunshine of the Spotless Mind",
      "year": 2004,
      "director": "Michel Gondry",
      "duration": "1h 48min",
      "genre": [
        "Drama",
        "Romance",
        "Sci-Fi"
      ],
      "rate": 8.3
    },
    {
      "title": "Taxi Driver",
      "year": 1976,
      "director": "Martin Scorsese",
      "duration": "1h 53min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "To Kill a Mockingbird",
      "year": 1962,
      "director": "Robert Mulligan",
      "duration": "2h 9min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "Dunkirk",
      "year": 2017,
      "director": "Christopher Nolan",
      "duration": "1h 46min",
      "genre": [
        "Action",
        "Drama",
        "History",
        "Thriller",
        "War"
      ],
      "rate": 8.3
    },
    {
      "title": "Full Metal Jacket",
      "year": 1987,
      "director": "Stanley Kubrick",
      "duration": "1h 56min",
      "genre": [
        "Drama",
        "War"
      ],
      "rate": 8.3
    },
    {
      "title": "2001: A Space Odyssey",
      "year": 1968,
      "director": "Stanley Kubrick",
      "duration": "2h 29min",
      "genre": [
        "Adventure",
        "Sci-Fi"
      ],
      "rate": 8.3
    },
    {
      "title": "Singin\" in the Rain",
      "year": 1952,
      "director": "Stanley Donen",
      "duration": "1h 43min",
      "genre": [
        "Comedy",
        "Musical",
        "Romance"
      ],
      "rate": 8.3
    },
    {
      "title": "Toy Story 3",
      "year": 2010,
      "director": "Lee Unkrich",
      "duration": "1h 43min",
      "genre": [
        "Animation",
        "Adventure",
        "Comedy",
        "Family",
        "Fantasy"
      ],
      "rate": 8.3
    },
    {
      "title": "Toy Story",
      "year": 1995,
      "director": "John Lasseter",
      "duration": "1h 21min",
      "genre": [
        "Animation",
        "Adventure",
        "Comedy",
        "Family",
        "Fantasy"
      ],
      "rate": 8.3
    },
    {
      "title": "The Sting",
      "year": 1973,
      "director": "George Roy Hill",
      "duration": "2h 9min",
      "genre": [
        "Comedy",
        "Crime",
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "3 Idiots",
      "year": 2009,
      "director": "Rajkumar Hirani",
      "duration": "2h 50min",
      "genre": [
        "Adventure",
        "Comedy",
        "Drama",
        "Romance"
      ],
      "rate": 8.4
    },
    {
      "title": "Ladri di biciclette",
      "year": 1948,
      "director": "Vittorio De Sica",
      "duration": "1h 29min",
      "genre": [
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "Inglourious Basterds",
      "year": 2009,
      "director": "Quentin Tarantino",
      "duration": "2h 33min",
      "genre": [
        "Adventure",
        "Drama",
        "War"
      ],
      "rate": 8.3
    },
    {
      "title": "The Kid",
      "year": 1921,
      "director": "Charles Chaplin",
      "duration": "1h 8min",
      "genre": [
        "Comedy",
        "Drama",
        "Family"
      ],
      "rate": 8.3
    },
    {
      "title": "Snatch",
      "year": 2000,
      "director": "Guy Ritchie",
      "duration": "1h 44min",
      "genre": [
        "Comedy",
        "Crime"
      ],
      "rate": 8.3
    },
    {
      "title": "Monty Python and the Holy Grail",
      "year": 1975,
      "director": "Terry Gilliam",
      "duration": "1h 31min",
      "genre": [
        "Adventure",
        "Comedy",
        "Fantasy"
      ],
      "rate": 8.3
    },
    {
      "title": "Good Will Hunting",
      "year": 1997,
      "director": "Gus Van Sant",
      "duration": "2h 6min",
      "genre": [
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "Jagten",
      "year": 2012,
      "director": "Thomas Vinterberg",
      "duration": "1h 55min",
      "genre": [
        "Drama"
      ],
      "rate": 8.3
    },
    {
      "title": "Per qualche dollaro in più",
      "year": 1965,
      "director": "Sergio Leone",
      "duration": "2h 12min",
      "genre": [
        "Western"
      ],
      "rate": 8.3
    },
    {
      "title": "L.A. Confidential",
      "year": 1997,
      "director": "Curtis Hanson",
      "duration": "2h 18min",
      "genre": [
        "Crime",
        "Drama",
        "Mystery",
        "Thriller"
      ],
      "rate": 8.3
    },
    {
      "title": "Scarface",
      "year": 1983,
      "director": "Brian De Palma",
      "duration": "2h 50min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 8.3
    }
]

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArrayMovies = movies.slice();
	return newArrayMovies.sort(function(a, b) {
    	if (a.year > b.year) {
    		return 1;
     	}
    	else {
    		return -1;
     	}
    }); 
}

orderByYear(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
	let numOfMovies = 0;
	if (arr.director === "Steven Spielberg" && arr.genre.includes("Drama")) {
		numOfMovies = numOfMovies +1;
		return true;
	}
	else {
		return false;
	};
}

let onlyStevenDrama = movies.filter(howManyMovies);
console.log(onlyStevenDrama.length);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newOrder = arr.slice(0);
  let sorted = newOrder.sort(function (a, b) {
        if (a.title > b.title){
          return -1;
        }
        else {
          return 1;
        }
      }
  );
  return sorted.map(function (films) {
    return films.title}).slice(0, 20);
  
}

 orderAlphabetically(movies);


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let numOfMovies = 0;
	if (arr.genre.includes("Drama")) {
		numOfMovies = numOfMovies +1;
		return true;
	}
	else {
		return false;
	};
}

let onlyDrama = movies.filter(dramaMoviesRate);
console.log(onlyDrama.length);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
