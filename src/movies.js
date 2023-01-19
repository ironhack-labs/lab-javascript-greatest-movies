// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directors = moviesArray.map(function(movies) {
        return movies.director;
    });

    return directors;
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let spielberg = moviesArray.filter((director) => director.director === 'Steven Spielberg')
    let howMany = spielberg.filter((drama) => drama.genre.includes('Drama')) 
    
    return howMany.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let scores = moviesArray.map(function(score) {

        return score.score;
     
    })

    let sumScores = scores.reduce((acc, val) =>{
        
        if(!val) return acc + 0
        else return acc + val
    } , 0)
    let average = +(sumScores / scores.length).toFixed(2);
    return  average;

    
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let numDramas = moviesArray.filter((drama) => drama.genre.includes('Drama')); 
    
    let sumTotDramas = numDramas.reduce((acc, val) => {

        if(!val.score) return acc + 0
        else return acc + val.score
        
    }, 0);
    

    let average = +(sumTotDramas / numDramas.length).toFixed(2);

    if(!numDramas.length) return 0;
    else return average;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesNew = moviesArray.map((movies) => movies);

    moviesNew.sort((a, b) => {

        if(!(a.year - b.year)){

          if(a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          else if(a.title.toLowerCase() > b.title.toLowerCase()) return 1
          else return 0

        }else{
          return a.year - b.year
        }
    })
       
    return moviesNew;


}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let moviesNew = moviesArray.map((movies) => {

        if(!movies) return []
        else return movies.title
    });
    let orderedMovies = [];

    moviesNew.sort((a, b) => {

        if(a.toLowerCase() < b.toLowerCase()) return -1;
        else if(a.toLowerCase() > b.toLowerCase()) return 1
        else return 0}
        
    )

   /*  moviesNew.sort((a, b) => {

        if((a[0] > '0' && a[0] < '9') && (b[0] > '0' && b[0] < '9')){
            console.log('Numero')
            return a - b;
            
        } 
    }
        )
        
        if(moviesNew.length < 20) {

        } */
    return moviesNew.splice(0,20);
       

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
