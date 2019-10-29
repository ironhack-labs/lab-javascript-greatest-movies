/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let byYear = [...moviesArray.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) return 1
        if (movie1.year < movie2.year) return -1
        if (movie1.year === movie2.year) {
                if(movie1.title > movie2.title)return 1
                else return -1
        }
    })]
    return byYear

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let drama = moviesArray.filter(movie => movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"))
    return drama.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    let sortByOrder = moviesArray.slice().sort(function (movie1, movie2) {
        if (movie1.title.localeCompare(movie2.title) === 1) {
            console.log(movie1.title, movie2.title);
        } else return -1
    })

    let onlyYears = sortByOrder.map(function (d) {
        let years = d.title;
        return years
    })
    return onlyYears.slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    let onlyRates = moviesArray.filter(movie => movie.rate !== undefined).map(function (d) {
        let rate = d.rate;
        return rate;
    })

    let rateSum = onlyRates.reduce((ac, cu) => ac + cu)
    let average = rateSum / moviesArray.length

    return Math.round(average * 100) / 100
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    let onlyDrama = [...moviesArray.filter(movie => movie.genre.includes("Drama"))];
    if (onlyDrama.length === 0) return 0;
    let onlyDramaRates = onlyDrama.slice().map(function (d) {
        let rate = d.rate;
        return rate;
    })
    let rateSum = onlyDramaRates.reduce((ac, cu) => ac + cu)
    let averageDrama = rateSum / onlyDrama.length
    return Math.round(averageDrama * 100) / 100

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {

    let allMoviesInMinutes = moviesArray.map(function (e) {
        let arrayTime = e.duration.split(" ")
        if (arrayTime.length > 1) {
            arrayTime[0] = parseInt(arrayTime[0]) * 60
            arrayTime[1] = parseInt(arrayTime[1])
            arrayTime = arrayTime[0] + arrayTime[1]
            return {...e,duration:arrayTime};
        } else if (arrayTime[0].includes("h")) {
            arrayTime = parseInt(arrayTime[0]) * 60
            return {...e,duration:arrayTime}
        } else arrayTime = parseInt(arrayTime[0])
            return {...e,duration:arrayTime}
    })
return(allMoviesInMinutes) 
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(moviesArray){
    let orderedByYear = orderByYear(moviesArray);
    let minYear = orderedByYear[0].year;
    let maxYear = orderedByYear[orderedByYear.length-1].year;
    let movie = new Array();
    for (i = minYear ; i<=maxYear ; i++){
        let nombre = i;
        let yearRow =  orderedByYear.filter(e => e.year == i)
        movie.push(yearRow);
    }
    let arrByYears = movie.filter(e => e.length !==0);
    // console.log(arrByYears[0][0].rate)
    arrByYears.forEach(function(e){
        console.log(e)
    })
    
    
    


    // arrByYears.forEach(function(d){
    //     console.log(d)
    //         // let sum=0
    //         // for(i=0; d.length; d++){
    //         //     sum = sum + d[i].rate;
    //         // }
    //         //  sumas.push(sum)
    //     })
    
    // console.log(sumas)
    // }

//    arrByYears.forEach(function(d){
//        if(d.isArray()){
//            d.forEach(function(e){
//                console.log(e)
//            })
//         }
//     })
    


        //    d.forEach(function(e) {
        //       console.log(e)
        //    });
        // }
    //  });

}
    // for(i=0; i < arrByYears.length; i++){
    //     let target = arrByYears[i];
    //     console.log(target)
    //     }


    //     // target.forEach(function(d){
    //     //     console.log(d)
    //     // })
    //     // console.log(target[]);

    //     // arrByYears[i].forEach(function(d){
    //     //     console.log(d)
    //     // })
    //     // console.log(sumados);
    //     // }
        
    //     }
    




        // for(j=0 ; j < arrByYears[i].length; j++){
        // // console.log(arrByYears[i][j])
        // sum = sum + arrByYears[i][j].rate
        //  console.log ("vuelta:" + i + ", " + j + "SUMA= "+ sum)   
        // }
    

    // let sumOfAllRatesByYear = arrByYears.map(function (d) {
    //     console.log(d.rate);
    // })

    // console.log(sumOfAllRatesByYear)

    // for(i=0; i<onlyRates.length ; i++){
    //     // let sum = 0
    //     // let sum = onlyRates[i].reduce((ac,cu) => ac + cu)
    //     // for(j=0; j=)
    //     console.log(onlyRates[i])
    // }
    




bestYearAvg(movies)




// function bestYearAvg(moviesArray){
//     let orderedByYear = orderByYear(moviesArray);
//     let minYear = orderedByYear[0].year;
//     let maxYear = orderedByYear[orderedByYear.length-1].year;
//     let movie = []
//     for (i = minYear ; i<=maxYear ; i++){
//         let yearRow =  orderedByYear.filter(e => e.year == i)
//         movie.push(yearRow);
//     }
//     let arrByYears = movie.filter(e => e.length !==0);
//     // console.log(arrByYears[0][0].rate)
//     for(i=0; i < arrByYears.length; i++){
//         let sum=0;
//         for(j=0 ; j < arrByYears[i].length; j++){
//         // console.log(arrByYears[i][j])
//         sum = sum + arrByYears[i][j].rate
//          console.log ("vuelta:" + i + ", " + j + "SUMA= "+ sum)   
//         }
//     }

//     // let sumOfAllRatesByYear = arrByYears.map(function (d) {
//     //     console.log(d.rate);
//     // })

//     // console.log(sumOfAllRatesByYear)

//     // for(i=0; i<onlyRates.length ; i++){
//     //     // let sum = 0
//     //     // let sum = onlyRates[i].reduce((ac,cu) => ac + cu)
//     //     // for(j=0; j=)
//     //     console.log(onlyRates[i])
//     // }
    


// }



// arrByYears.forEach(function(d){
//     let sum = 0
//     for(i=0; d.length; d++){
//         sum = sum + d[i].rate;
//     }sumas.push(sum);
//     console.log(sum)
//     // d.map(function(j){
//     //     console.log(j)
//     // })
// })