// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   let directors = moviesArray.map(function(movie) {
        return movie.director;
    });
    return directors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaMovies = moviesArray.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length=== 0) {
    return 0;
    }
    let sumScore=0;
    let  recoScore=0; 
    while(recoScore< moviesArray.length)
        { 
            if (moviesArray[recoScore].score !== undefined){
                sumScore += moviesArray[recoScore].score;
            
            }
            ++recoScore;  

        }
    
    return   Math.round((sumScore/ recoScore) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaMovies = moviesArray.filter(function(movie) {
        return movie.genre.includes("Drama");
    });

    if ( dramaMovies.length === 0 ){ return 0; }

    let sumScore=0;
    let  recoScore=0; 
    while(recoScore< dramaMovies.length)
        { 
            if (dramaMovies[recoScore].score !== undefined){
                sumScore += dramaMovies[recoScore].score;
            
            }
            ++recoScore;  

        }
    
    console.log(dramaMovies);
    console.log(sumScore);
    console.log(recoScore);

    return   Math.round((sumScore/ recoScore) * 100) / 100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const copiNewArray=moviesArray.slice();
    copiNewArray.sort(function(a, b) {
        if (a.year===b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return copiNewArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

let copinNewArray2 = moviesArray.slice();
let resultArray= copinNewArray2.sort(function(a, b) {
    return a.title.localeCompare(b.title);
    });
    let titles = copinNewArray2.map(function(movie) {
        return movie.title;
    })
    
let topTwenty= titles.slice(0,20);
return topTwenty;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
let copiNewArray3 = moviesArray.slice();
let result2=    copiNewArray3.map(function(movie){
        let partTime = movie.duration.split(" ");
        let hours =parseInt(partTime[0])*60;
        let minutes= parseInt(partTime[1]);
        if (isNaN(minutes)){
            minutes=0;
        }
        let totalTime= hours+minutes;
        return{...movie , duration:totalTime}
    })
    return result2
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

if (moviesArray.length === 0) {
    return null;
    }
let yearGroups= {};
let yearAverages = {};
for(i=0;i<moviesArray.length;++i){
    if (yearGroups[moviesArray[i].year] === undefined) {
        yearGroups[moviesArray[i].year] = [];
        }
        yearGroups[moviesArray[i].year].push(moviesArray[i]);

    }
   
    let twoGrupsYear= Object.keys(yearGroups);
    for(j=0;j<twoGrupsYear.length; ++j ){
        let result3= yearGroups[twoGrupsYear[j]]
        let sumScore=0;
        let scoreTotal=0;
        while (sumScore<result3.length) {
            if (result3[sumScore].score !== undefined){
                scoreTotal += result3[sumScore].score;
                        
            }
        ++sumScore;
        }
    yearAverages[twoGrupsYear[j]] = Math.round((scoreTotal / result3.length) * 100) / 100;
    }

    let winscore=0;
    let guardGoodYear=0;
    let yearKeys = Object.keys(yearAverages);
    yearKeys.sort(function(a, b) {
        return Number(a) - Number(b);
    });

    for (let l = 0; l < yearKeys.length; l++) {
        if (yearAverages[yearKeys[l]] > winscore) {
            winscore = yearAverages[yearKeys[l]];
            guardGoodYear = yearKeys[l];
        }
    }

    console.log(yearAverages);
    console.log(guardGoodYear);

    return Number(guardGoodYear);
}
