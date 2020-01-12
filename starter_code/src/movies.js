/* eslint no-restricted-globals: 'off' */
let movies = [{
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
    },
    {
        "title": "Se7en",
        "year": 1995,
        "director": "David Fincher",
        "duration": "2h 7min",
        "genre": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "rate": 8.6
    },
    {
        "title": "The Silence of the Lambs",
        "year": 1991,
        "director": "Jonathan Demme",
        "duration": "1h 58min",
        "genre": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "rate": 8.6
    },
    {
        "title": "It\"s a Wonderful Life",
        "year": 1946,
        "director": "Frank Capra",
        "duration": "2h 10min",
        "genre": [
            "Drama",
            "Family",
            "Fantasy"
        ],
        "rate": 8.6
    },
    {
        "title": "La vita è bella",
        "year": 1997,
        "director": "Roberto Benigni",
        "duration": "1h 56min",
        "genre": [
            "Comedy",
            "Drama",
            "War"
        ],
        "rate": 8.6
    },
    {
        "title": "The Usual Suspects",
        "year": 1995,
        "director": "Bryan Singer",
        "duration": "1h 46min",
        "genre": [
            "Crime",
            "Drama",
            "Mystery",
            "Thriller"
        ],
        "rate": 8.6
    },
    {
        "title": "Léon",
        "year": 1988,
        "director": "Luc Besson",
        "duration": "1h 50min",
        "genre": [
            "Crime",
            "Drama",
            "Thriller"
        ],
        "rate": 8.6
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
        "title": "Sen to Chihiro no kamikakushi",
        "year": 2001,
        "director": "Hayao Miyazaki",
        "duration": "2h 5min",
        "genre": [
            "Animation",
            "Adventure",
            "Family",
            "Fantasy",
            "Mystery"
        ],
        "rate": 8.6
    },
    {
        "title": "American History X",
        "year": 1998,
        "director": "Tony Kaye",
        "duration": "1h 59min",
        "genre": [
            "Crime",
            "Drama"
        ],
        "rate": 8.5
    },
    {
        "title": "C\"era una volta il West",
        "year": 1968,
        "director": "Sergio Leone",
        "duration": "2h 44min",
        "genre": [
            "Western"
        ],
        "rate": 8.6
    },
    {
        "title": "Interstellar",
        "year": 2014,
        "director": "Christopher Nolan",
        "duration": "2h 49min",
        "genre": [
            "Adventure",
            "Drama",
            "Sci-Fi"
        ],
        "rate": 8.6
    },
    {
        "title": "Psycho",
        "year": 1960,
        "director": "Alfred Hitchcock",
        "duration": "1h 49min",
        "genre": [
            "Horror",
            "Mystery",
            "Thriller"
        ],
        "rate": 8.5
    },
]
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const result = arr;
    result.sort((a, b) =>
        a.year === b.year ?
        a.title.toLowerCase() < b.title.toLowerCase() ?
        -1 :
        a.title.toLowerCase() > b.title.toLowerCase() ?
        1 :
        0 :
        a.year - b.year
    );
    if (result.length === 0) return null;
    return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const result = arr.filter(
        currentValue =>
        currentValue.director === "Steven Spielberg" &&
        currentValue.genre.filter(arrayValue => arrayValue === "Drama").length ===
        1
    );
    return result.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const result = arr
        .map(element => element.title)
        .sort((a, b) =>
            a.toLowerCase() > b.toLowerCase() ?
            1 :
            a.toLowerCase() < b.toLowerCase() ?
            -1 :
            0
        )
        .filter((currentValue, i) => (i < 20 ? currentValue.toString() : false));
    return result;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) return 0;
    const result = arr.reduce(
        (acc, currentValue, i) =>
        typeof currentValue.rate === "number" ?
        (acc += currentValue.rate) :
        (acc += 0),
        0
    );
    return Math.round((result / arr.length) * 100) / 100;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const result = arr.filter((currentValue, i) =>
        currentValue.genre.includes("Drama")
    );
    return ratesAverage(result);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function durationStringToNumber(duration) {
    var total = 0;
    for (let i = 0; i < duration.length; i++) {
        const isNumber = parseInt(duration[i]);
        if (!isNaN(isNumber))
            duration[i + 1] === "h" ?
            (total += isNumber * 60) :
            duration[i + 2] === "m" ?
            (total += isNumber * 10 + parseInt(duration[i + 1])) :
            (total += 0);
    }
    return total;
}

function turnHoursToMinutes(arr) {
    // Deep cloning
    result = arr.map(element => {
        let newElement = {
            ...element
        };
        return newElement;
    });
    result.map(currentValue => {
        currentValue.duration = durationStringToNumber(currentValue.duration);
        return currentValue;
    }, []);
    return result;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
/*function bestYearAvg(arr) {
    if (arr.length === 0) return null;
    newArray = arr.map(element => {
        let newElement = {
            ...element
        };
        return newElement;
    });

    var newArray2 = newArray.reduce((acc, currentValue) => {
            acc.push({
                "year": currentValue.year,
                "averageRates": currentValue.rate
            });
            return acc
        }, [])
        .sort((a, b) => b.year - a.year);
    var result = newArray2
        /*result.map((element, i, arrayCall) => {
            //console.log(newArray2[i + 130].year);
            //console.log(arrayCall[i].year);
            var a = [i + 1];
            if (a > arrayCall.length - arrayCall.length + 1) {
                if ((element.year === arrayCall[i - 1].year)) {
                    return element.averageRates += element.averageRates;
                }
                //return element.averageRates
            }
            //else return element;
        });
.reduce((acc, currentValue, i) => {
            //console.log("");
            /*var a = [i + 1];
            if (a > arrayCall.length - arrayCall.length + 1) {
                //console.log(arrayCall[i - 1].year);
                if ((currentValue.year === arrayCall[i - 1].year)) {
                    var cumul = currentValue.averageRates + arrayCall[i - 1].averageRates;
                    acc.push({
                        "year": currentValue.year,
                        "averageRates": cumul
                    });
                } else {
                    var cumul = currentValue.averageRates
                    acc.push({
                        "year": currentValue.year,
                        "averageRates": cumul
                    });
                }
            }
            console.log(acc)
            //yearArray.push([]);
            //acc[currentValue.year].push(currentValue);
            return acc;
        }, []);
    return result

    //const result = arr.filter((currentValue, i) => currentValue.year === 1994);
    //return ratesAverage(result);

}*/

function bestYearAvg(arr) {
    if (arr.length === 0) return null;


    result = arr.reduce((acc, currentValue) => {

        if (typeof acc.currentValue === undefined) {
            acc.currentValue.year = {};
            //console.log(acc.year);
        } else {
            currentValue.year.movie = currentValue;
            //console.log(acc.year[currentValue.year]);
        }
        //acc.year.push(currentValue);

        //acc[currentValue.year] = acc[currentValue.year] || [];

        return acc;
    }, {});

}
console.log(bestYearAvg(movies));