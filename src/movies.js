// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directorsArray = moviesArray.map((element) => element.director);

    let directorsNotRepeated = [];

    directorsArray.forEach((element) => {

        if(!directorsNotRepeated.includes(element))
        {
            directorsNotRepeated.push(element)
        }
    }); 

    return directorsArray;
    
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaSteven = moviesArray.filter((movie) => {
        
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')

    })

    return dramaSteven.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length == 0) return 0

    let averageScores = 0

    const totalScores = moviesArray.reduce(function(sum, number) {
        return sum + number.score
    }, 0)

    averageScores = totalScores / moviesArray.length

    let newAverage = Number(averageScores.toFixed(2))

    return newAverage

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const dramaArray = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })

    if(dramaArray.length == 0) return 0

    const dramaScores = dramaArray.reduce(function(sum, number) {
        return sum + number.score
    }, 0)

    let dramaAverage = dramaScores / dramaArray.length

    let newAverage = Number(dramaAverage.toFixed(2))

    return newAverage
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let sortedArray = moviesArray.map((element) => element)
    
    sortedArray.sort((a,b) => { 

        if (a.year > b.year) return 1; 
        
        if (a.year < b.year) return -1;
    
        if (a.year == b.year) 
        {
            if (a.title > b.title) return 1; 
        
            if (a.title < b.title) return -1;
        
            if (a.title == b.title) return 0;
        }
    
    })

    return sortedArray;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let sortedArray = moviesArray.sort((a,b) => { 

        if (a.title > b.title) return 1; 
        
        if (a.title < b.title) return -1;
    
        if (a.title == b.title) return 0;

    })

    let twentyArray = sortedArray.splice(0, 20)
    
    let twentyTitles = twentyArray.map((element) => element.title);

    return twentyTitles;
    
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    let minutesArray = moviesArray.map((element) => {

        let hours = element.duration.split("h")[0].trim()
        let minutes;

        if(element.duration.includes('min')) 
        {
            minutes = element.duration.split("h")[1].trim()

        } else 
        {
            minutes = 0
        }

        let totalMinutes = parseInt(minutes) + hours * 60;

        return {
            title: element.title,
            year: element.year,
            director: element.director,
            duration: totalMinutes,
            genre: element.genre,
            score: element.score
        }
    })
    
    return minutesArray;

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    if ( moviesArray.length == 0) return null
    
    let years = []
    let resultArray = []
    
    moviesArray.forEach((element) => {
        if(!years.includes(element.year)) years.push(element.year)
    })

    resultArray = years.map((element) => {

        return {
            year: element,
            totalScore: 0,
            count: 0,
            average: 0
        }
        
    });

    let simpleArray = moviesArray.map((element) =>
    { 
        return {
            year: element.year,
            score: element.score,
        }
    })


    // Reference - Goncalo 
    for(let i = 0; i < years.length; i++) 
    {    
        for(let j = 0; j < simpleArray.length; j++) 
        {
            if(years[i] = simpleArray[j].year) 
            {
                resultArray[i].totalScore += simpleArray[j].score
                resultArray[i].count ++
            }
        }

        if(!resultArray[i].count == 0)
        {
        resultArray[i].average = resultArray[i].totalScore / resultArray[i].count
        }

    }

    resultArray.sort((a,b) => {

        if (a.average < b.average) return 1; 
        
        if (a.average > b.average) return -1;
    
        if (a.average == b.average) 
        {
            if (a.year > b.year) return 1; 
        
            if (a.year < b.year) return -1;
        
            if (a.year == b.year) return 0;
        }
    })
    

    return `The best year was ${resultArray[0].year} with an average score of ${Number(resultArray[0].average.toFixed(2))}`

}


