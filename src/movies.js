// THIS IS WHERE YOU PUT THE CODE !!!!! RIGHT?!

/* eslint no-restricted-globals: 'off' */
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

//Create a function orderByYear() that receives an array as parameter and returns a new sorted array.
//If two movies have the same year, order them in alphabetical order by their title! 


list = ["lion king", "jumanji", "husbandStopMakingNoise"];
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
      "title": "a bab person",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "a goob person",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime"
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
    }
            ];

//console.log(movies);


function orderByYear(filmArr) {
    const copyFilms = [...filmArr];
    const sorted = copyFilms.sort( function(filmA, filmB) {
        if (filmA.year < filmB.year) {
            return -1;
        }
        else if (filmA.year > filmB.year) {
            return 1;
        }
        // and if the year is same:
        // else block would start here but i dont wanna use it if 4 if statements work fine :D
        if ( filmA.title.toLowerCase() > filmB.title.toLowerCase() ) { // yes??? yes.
            return 1; // 
        }
        else if ( filmA.title.toLowerCase() < filmB.title.toLowerCase() ) {
            return -1;
        }
                                    //return filmA.title > filmB.title;
                                    //const alphSorted = sorted.sort(); can't make tihs work?? ???? 
                                    //return 0; // actually sort them alphab..

    } );
    return sorted; //
}
//films = orderByYear(movies);
//console.log(films);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
//One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies 
//that are on our list, but we want to know how many of them are there.
//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter the array 
//so we can have only the drama movies where Steven Spielberg is the director.
function howManyMovies(filmArr) 
{
    const stevens = filmArr.filter( film => film.director === "Steven Spielberg" ) // director: 'Steven Spielberg'
    return stevens.length; // why limit yourself to just drama ?
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
//Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. 
//Return only the title of each movie, and 
//if the array you receive has less than 20 movies, return all of them.

function orderAlphabetically(filmArr) {

    const mutableFilms = [...filmArr];
    const titles = [];
    mutableFilms.forEach( (film) => titles.push(film.title) )
    orderedTitles = titles.sort();
    return orderedTitles.splice(0,20);
}

console.log(orderAlphabetically(movies));

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
//Create a ratesAverage() function that receives an array as a parameter and solves the challenge.
//display it on the console. The rate must be returned rounded to 2 decimals!

function ratesAverage(filmArr) {
    const ratings = [];
    filmArr.forEach( (film) => ratings.push(film.rate) ) // rip out all the ratings and put them in 1 array
    //console.log(ratings);
    avg = (ratings.reduce( (totalRatings, nextRating) => totalRatings + nextRating )) / (ratings.length);
    //console.log(avg); 
    return avg;
    //return ratings;
}
ratesAverage(movies);


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(filmArr) {
    // filter together drama films
    const dramas = filmArr.filter( film => film.genre.includes("Drama")  ) // if film genre is drama, add it to dramas array
    //console.log(dramas);
    dramaAvg = ratesAverage(dramas);
    //console.log("dramaAvg", dramaAvg); UNCOMMENT THIS TO GET AVERAGE CONSOLE LOGGED!
    return dramaAvg;
}
dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
