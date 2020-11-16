// Goal : Practice JavaScript advanced methods (map, reduce, filter and sort to manipulate arrays
// var { movies } = require('./data.js');



// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
        
        let arrDirectors = arr.map((movie) => {
            return movie["director"];
        });

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
        
        let uniqueDirectors = [...new Set (arrDirectors)];
        // let sorted = uniqueDirectors.sort((a,b) => a.localeCompare(b))
        // console.log("sorted-------", sorted);
        return uniqueDirectors;
};

// console.log("Iteration 1: All directors?")
// console.log(getAllDirectors(movies));


// Iteration 2: sSteven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
       const filteredMovies = arr.filter((movie) => {
             return movie["director"]=="Steven Spielberg" && movie["genre"].includes("Drama"); 
        });
    //   console.log(filteredMovies);
      return filteredMovies.length;
};

// console.log("----Iteration 2: Steven Spielberg.----")
// console.log(howManyMovies(movies));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(arr){
    const arrRatesMovies = arr.map((movie) =>{
        return movie["rate"];
        }
    );
    const sumRatesMovies = arrRatesMovies.reduce((accumulator, currentValue) => {
        if (Boolean(currentValue) == 1){
            // console.log("current value-----", currentValue)
            // console.log("Boolean----",Boolean(currentValue));
            accumulator += Number(currentValue)};
        return accumulator}, 0);
        // console.log("sumratemovies-----", sumRatesMovies);
        return Boolean(sumRatesMovies/arrRatesMovies.length)!=0 ? Number((sumRatesMovies/arrRatesMovies.length).toPrecision(3)) : 0; 
}



// console.log("----Iteration 3: All rates average-----");
// console.log(ratesAverage(movies));


 
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const arrDramaMovies = arr.filter((movie) => movie["genre"].includes("Drama"));
    const arrRateDramaMovies = arrDramaMovies.map((array) => array["rate"]);
    const sumRateDramaMovies = arrRateDramaMovies.reduce((accumulator,currentValue) => 
        accumulator + currentValue,
        0);
    const avg = sumRateDramaMovies/arrRateDramaMovies.length;
    return Boolean(avg) !=0 ? Number((avg).toPrecision(3)) :0;
} 

// console.log("------Iteration 4: Drama movies -------");
// console.log(dramaMoviesRate(movies));
// console.log(dramaMoviesRate([]));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    const copiedArr = [...arr];
    const sortedMovies = copiedArr.sort((a, b) => 
        a.year - b.year || a["title"].localeCompare(b["title"]));
    return sortedMovies;
}

// console.log("--- Iteration 5: Ordering by year ---")
// console.log(orderByYear(movies));





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const copiedTitleArr =([...arr].map(arr => arr["title"]) || [...arr]);
    // console.log("copied arr title------", copiedTitleArr);
    const sortedMovies = copiedTitleArr.sort((a, b) => {
        return (a || "zzzzz").localeCompare( b || "zzzzz" )
    });
    // console.log("sorted movies------",sortedMovies);
    const filtered20Movies =sortedMovies.slice(0,20);
    return filtered20Movies;
}

// console.log("---Iteration 6: Alphabetic Order----");
// console.log(orderAlphabetically(movies));




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (arr){
    const copiedArr = [...arr];
    const arrDuration = copiedArr.map((arr) => arr["duration"]);
    // console.log("duration test-----", arrDuration);
    const arrModifiedDuration = arrDuration.map((arr) =>{
        // console.log("test arr----", arr);
        let hours =0;
        let mins = 0;
        if (arr.length == 2){
            let hour = arr.slice(0,1);
            return arr= Number(Number(hour)*60);
        } else if (arr.length == 5){
            let mins = arr.slice(0,2);
            return arr = Number(Number(mins));
        } else if (arr.length == 7){
            let hour = arr.slice(0,1);
            let mins = arr.slice(3,4);
            return  arr = Number(Number(hour)*60+Number(mins));            
        } else if (arr.length == 8){
            let hour = arr.slice(0,1);
            let mins = arr.slice(3,5);
            // console.log("typeof", typeof (Number(Number(hour)*60+Number(mins))) )
            return arr = Number(Number(hour)*60+Number(mins));  
        }
    })
    return arrModifiedDuration;
}

// console.log("---BONUS - Iteration 7: Time Format----")
// console.log("movies arr----", turnHoursToMinutes([{ duration: '0h 31min' }]));




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average


function bestYearAvg(arr){
    const arrYear = arr.map((movie) =>{
        return movie["year"]
    })
    const cleanYear = [...new Set (arrYear)];
    // console.log("clean year----", cleanYear);

    let avgContainter = [];
    let yearContainer = [];

    for (let i =0; i<cleanYear.length; i++){
            const moviesGroupedByYear = arr.filter((movie) => movie["year"]==cleanYear[i]);
            //  console.log("groupedbyyear-->>", moviesGroupedByYear);
            const arrRatesByYear = moviesGroupedByYear.map((movie) => movie["rate"]);
            // console.log("arrRates->>", arrRatesByYear);
            const sumRatesByYear = arrRatesByYear.reduce((accumulator, currentValue) => {
            
                        if (Boolean(currentValue) == 1){
                            accumulator += Number(currentValue)};
                        return accumulator
                    }, 0);   

            // console.log("sumrate-->>",sumRatesByYear);

            const avgByYear = Number(sumRatesByYear/arrRatesByYear.length);
        
            // console.log("avgbyyear--->>", avgByYear);
            avgContainter.push(avgByYear);
            yearContainer.push(cleanYear[i]);
        }

    console.log("avgContainer-->",avgContainter);
    // console.log(yearContainer);

    let bestRate = avgContainter.reduce((arr)=> Math.max(arr));
    //    let bestRate = Math.max(avgContainter) 
    //!!!!! i dont understand why this line is not working;
    // console.log("bestrate-->>",bestRate);
    let idx = avgContainter.indexOf(bestRate);
    let bestYear = yearContainer.slice(idx, idx+1);

    return `The best year was ${bestYear} with an average rate of ${bestRate}`;
    
}

console.log("bestbest outcome-----", bestYearAvg(movies));