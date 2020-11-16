/*let movies = [
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
          "title": "Pulp Fiction",
          "year": 1994,
          "director": "Quentin Tarantino",
          "duration": "2h 34min",
          "genre": [
            "Crime",
            "Drama"
          ],
          "rate": 8.9
        },
        {
          "title": "The Lord of the Rings: The Return of the King",
          "year": 2003,
          "director": "Peter Jackson",
          "duration": "3h 21min",
          "genre": [
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "rate": 8.9
        },
        {
          "title": "Il buono, il brutto, il cattivo",
          "year": 1966,
          "director": "Sergio Leone",
          "duration": "3h 2min",
          "genre": [
            "Western"
          ],
          "rate": 8.9
        },
        {
          "title": "Fight Club",
          "year": 1999,
          "director": "David Fincher",
          "duration": "2h 19min",
          "genre": [
            "Drama"
          ],
          "rate": 8.8
        },
        {
          "title": "The Lord of the Rings: The Fellowship of the Ring",
          "year": 2001,
          "director": "Peter Jackson",
          "duration": "2h 58min",
          "genre": [
            "Adventure",
            "Drama",
            "Fantasy"
          ],
          "rate": 8.8
        },
        {
          "title": "Forrest Gump",
          "year": 1994,
          "director": "Robert Zemeckis",
          "duration": "2h 22min",
          "genre": [
            "Comedy",
            "Drama",
            "Romance"
          ],
          "rate": 8.8
        },
        {
          "title": "Star Wars: Episode V - The Empire Strikes Back",
          "year": 1980,
          "director": "Irvin Kershner",
          "duration": "2h 4min",
          "genre": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "rate": 8.8
        },
        {
          "title": "Inception",
          "year": 2010,
          "director": "Christopher Nolan",
          "duration": "2h 28min",
          "genre": [
            "Action",
            "Adventure",
            "Sci-Fi",
            "Thriller"
          ],
          "rate": 8.8
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
        {
          "title": "Goodfellas",
          "year": 1990,
          "director": "Martin Scorsese",
          "duration": "2h 26min",
          "genre": [
            "Crime",
            "Drama"
          ],
          "rate": 8.7
        },
        {
          "title": "The Matrix",
          "year": 1999,
          "director": "Lana Wachowski",
          "duration": "2h 16min",
          "genre": [
            "Action",
            "Sci-Fi"
          ],
          "rate": 8.7
        },
        {
          "title": "Shichinin no samurai",
          "year": 1954,
          "director": "Akira Kurosawa",
          "duration": "3h 27min",
          "genre": [
            "Adventure",
            "Drama"
          ],
          "rate": 8.7
        },
        {
          "title": "Star Wars",
          "year": 1977,
          "director": "George Lucas",
          "duration": "2h 1min",
          "genre": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi"
          ],
          "rate": 8.7
        },
        {
          "title": "Cidade de Deus",
          "year": 2002,
          "director": "Fernando Meirelles",
          "duration": "2h 10min",
          "genre": [
            "Crime",
            "Drama"
          ],
          "rate": 8.7
        }]*/
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(toto) {
var result = toto
.map(function(toto) {
const copiedArray = {...toto};
return copiedArray.director;
});
return result;
}
console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(horse) {
    var Steven = horse.filter(function(horse) {
        return horse.director === "Steven Spielberg" && horse.genre.includes("Drama");
        });
        return Steven.length;
}

console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    var ratesTotal = array.reduce((acc, cur) => {
    return acc + cur.rate;
},0);
    let average = ratesTotal / array.length;
    
    let average2 = Math.round(average * 100) / 100 || 0;

    return average2;
}
/*var filteredArray = array.filter(function(array) {
    return array.rate !== undefined;
    });
    return filteredArray;*/
// If object does not have rate, return average FILTER BEFORE REDUCING
console.log(ratesAverage(movies));


// Iteration 
//4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (array) {
    var dramaOnly = array
    .filter(function(array) {
        return array.genre.includes("Drama");
    })
    .reduce((acc, cur) => {
        return acc + cur.rate;
    },0);
    var averageDrama = dramaOnly / array.length;
    var averageDrama2 = Math.round(averageDrama * 100) / 100;

    return averageDrama2;
}
console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
const ordered = array
.map(function(order) {
    return order;
})
.sort(function(a, b) {
    return a.year - b.year;
    });
return ordered;
}
console.log(orderByYear(movies));
   
   
  /* - === a first, + === b first, 0 === equal*/
   
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
const alphabetic = array
.map(function(alpha) {
    return alpha.title;
})
.sort(function(a, b) {
    if(a < b) {
        return -1;
    }
    if(a.title > b.title) {
        return 1;
    }
    return 0;
})
const first20 = alphabetic.slice(0,20);


return first20;

}
console.log(orderAlphabetically(movies));
