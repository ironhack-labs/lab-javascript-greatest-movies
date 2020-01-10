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
	  }
]

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(x) {
	return x.sort(function(a, b) {
    	if (a.name > b.name) {
    		return -1;
     	}
    	else {
    		return 1;
     	}
    }); 
}

orderByYear(movies)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(x) {
	let numOfMovies = 0;
	if (x.director === "Steven Spielberg" && x.genre.includes("Drama")) {
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

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
