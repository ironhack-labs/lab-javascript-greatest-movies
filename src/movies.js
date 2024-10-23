// console.clear()

// const movies = [{
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   },
//   {
//     title: 'The Godfather',
//     year: 1972,
//     director: 'Francis Ford Coppola',
//     duration: '2h 55min',
//     genre: ['Crime', 'Drama'],
//     score: 9.2
//   },
//   {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     director: 'Christopher Nolan',
//     duration: '2h 32min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     score: 9
//   },
//   {
//     title: '12 Angry Men',
//     year: 1957,
//     director: 'Sidney Lumet',
//     duration: '1h 36min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   },
//   {
//     title: 'Schindler"s List',
//     year: 1993,
//     director: 'Steven Spielberg',
//     duration: '3h 15min',
//     genre: ['Biography', 'Drama', 'History'],
//     score: 8.9
//   },
//   {
//     title: 'Pulp Fiction',
//     year: 1994,
//     director: 'Quentin Tarantino',
//     duration: '2h 34min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   }]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectorsArray = moviesArray.map((movie)=>{
        return movie.director
    })
    allDirectorsArray.filter((director)=>{
        return director.indexOf() === director.lastIndexOf()
    })
    return allDirectorsArray
}
//BONUS PART:

function eliminateRepeatedDirectors(moviesArray){
    const notRepeatedDirectors = moviesArray.filter((director, index)=>{
        return moviesArray.indexOf(director) === index
    })
    return notRepeatedDirectors
}

//console.log(getAllDirectors(movies))
//console.log(eliminateRepeatedDirectors(getAllDirectors(movies)))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevensMovies = moviesArray.filter((movie)=>{
        if (movie.genre.includes("Drama")){
        return movie.director == "Steven Spielberg"
        } 
        return 
    })

    return stevensMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0
    } else {
        const sumScores = moviesArray.reduce((acc, cur)=>{
            return acc + (cur.score || 0)
        }, 0)

        const averageScore = sumScores / moviesArray.length

        return Number(averageScore.toFixed(2))
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

    const dramaMovies = moviesArray.filter((movie)=>{
        return movie.genre.includes("Drama")
    })

    if (dramaMovies.length === 0){ return 0 }
    const sumScores = dramaMovies.reduce((acc, cur)=>{
        return acc + (cur.score || 0)
    }, 0)
    const averageDramaScore = sumScores / dramaMovies.length
    return Number(averageDramaScore.toFixed(2))
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.map((movie)=>movie);

    sortedMovies.sort((a,b)=>{
        if (a.year === b.year){

            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (titleA > titleB){
                return 1
            } else if (titleA < titleB){
                return -1
            } else {
                return 0
            }
            
        } else {
            return a.year - b.year
        }
    });

    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const twentyMovies = structuredClone(moviesArray) //.slice(0,20);

    twentyMovies.sort((movieA, movieB)=>{
        const titleA = movieA.title.toLowerCase();
        const titleB = movieB.title.toLowerCase();

        if (titleA > titleB){
            return 1
        } else if (titleA < titleB){
            return -1
        } else {
            return 0
        }
    })
    

    return twentyMovies.slice(0, 20).map((movie)=>{return movie.title})
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
