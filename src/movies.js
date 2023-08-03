// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) 
{
    let directorArray = moviesArray.map(e => e.director);

    // Bonus:
    let deleteDuplicates = directorArray.filter((e, index) => directorArray.indexOf(e) === index)

    return directorArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) 
{
    return moviesArray.filter(e => e.director === "Steven Spielberg" && e.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray)
{
    if(moviesArray.length === 0) return 0;

    return Number((moviesArray.reduce((acc, e) => 
    {
       return (e.score ? acc + e.score : acc)

    }, 0) / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray)
{
    let dramaMovies = moviesArray.filter(e => e.genre.includes("Drama"));

    if(dramaMovies.length === 0) return 0;

    return Number((dramaMovies.map(e => e.score).reduce((acc, e) => acc + e) / dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) 
{
    let newMoviesArray = moviesArray.slice();

    const alfabetical = newMoviesArray.sort((a, b) => a.title < b.title ? - 1 : a.title > b.title ? 1 : 0);

    return newMoviesArray.sort((a, b) => a.year === b.year ? alfabetical : a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) 
{
    return moviesArray.map(e => e.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray)
{
    let newArray = moviesArray.slice();
    
    let newMovies = [];

    function getRightTime(array)
    {
        let durationArray = array.map(e => e.duration);
        let hours = durationArray.map(e => Number(e.slice(0, 1)));
        let minutes = durationArray.map(e => Number(e.slice(2, -3)));

        for(let [i, k] of array.entries())
        {
            newMovies.push(
            {
                "title": k.title,
                "year": k.year,
                "director": k.director,
                "duration": hours[i] * 60 + minutes[i],
                "genre": k.genre,
                "score": k.score
            })
        }
    }

    getRightTime(newArray)

    return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray)
{
    if(moviesArray.length === 0) return null;

    

    return `The best year was <YEAR> with an average score of <RATE>`
}
