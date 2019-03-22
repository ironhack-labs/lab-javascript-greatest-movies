/* eslint no-restricted-globals: 'off' */
// eslint-disable-next-line no-trailing-spaces
// Turn duration of the movies from hours to minutes 
function transformDuration(movieDuration){
    var pattern1 = /(\d*)h (\d*)min/gm;
    var pattern2 = /(\d*)h/gm;
    var pattern3 = /(\d*)min/gm;
    var res1 = movieDuration.match( /(\d*)h (\d*)min/ );
    var res2 = movieDuration.match( /(\d*)h/ );
    var res3 = movieDuration.match( /(\d*)min/ );

    if(res1){
        var hours = +res1[1]; 
        var mins = +res1[2];
        return hours*60 + mins;
    }else if(res2){
        return +res2[1]*60;
    }else if(res3){
        return +res3[1];
    }
}

function turnHoursToMinutes(moviesArray){
    var moviesMapped = moviesArray.map(movie =>{
    let output = {
        ...movie,
        duration: transformDuration(movie.duration)
    }

    return output
    });
    return moviesMapped;
}

// eslint-disable-next-line no-trailing-spaces
// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray){
    var result = 0;
    var totalRates = moviesArray.reduce( (ac, movie) => ac += +movie.rate , 0);
    result = totalRates / moviesArray.length;
    return parseFloat(result.toFixed(2));
}


// Get the average of Drama Movies
function  dramaMoviesRate(moviesArray){
    var dramones = moviesArray.filter(dramon => dramon.genre.indexOf("Drama") > -1);
    return dramones.length > 0 ? ratesAverage(dramones) : undefined ;
}

// Order by time duration, in growing order
function orderByDuration(moviesArray){
    if(moviesArray.length === 1 ){
        return moviesArray
    }else{
        var moviesDurationInMin = turnHoursToMinutes(moviesArray);
        moviesDurationInMin.sort((a,b) =>  b.duration - a.duration )
        //moviesDurationInMin.sort((a,b) => a.title.localeCompare(b.title));
        return moviesDurationInMin;
    }
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray){
    var author = 'Steven Spielberg';
    if (moviesArray.length === 0) return undefined
    var dramones = moviesArray.filter(dramon => dramon.genre.indexOf("Drama") > -1)
    var pelisAuthor = dramones.filter(movie => movie.director.indexOf(author) > -1);
    
    return  `${author} directed ${pelisAuthor.length} drama movies!`;   
}

// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){
    var moviesToSort = [...moviesArray];
    moviesToSort.sort((a,b) => a.title.localeCompare(b.title));
    var titlesSorted = moviesToSort.map( movie => { return movie.title});
    return titlesSorted.slice(0,20);
}

// Best yearly rate average

function bestYearAvg(moviesArray){
    if(moviesArray.length === 1 ){
        return `The best year was ${moviesArray[0].year} with an average rate of ${moviesArray[0].rate}`
    }else if(moviesArray.length > 1){
        var moviesDurationInMin = turnHoursToMinutes(moviesArray);
        var reducedYears = moviesDurationInMin.reduce(function(rateYearsGrouped, movie){
            if(!rateYearsGrouped[movie.year]){
                rateYearsGrouped[movie.year] ={count: 1};
                rateYearsGrouped[movie.year].rate = +movie.rate;
                return rateYearsGrouped;
              };
            rateYearsGrouped[movie.year].count ++;
            rateYearsGrouped[movie.year].rate += +movie.rate;
            return rateYearsGrouped;
        });
        console.log(reducedYears);
        var averageYears = Object.keys(reducedYears).map( function(year){
            yearProcesar = reducedYears[year];
            return {
                year : year,
                average : parseFloat(yearProcesar.rate / yearProcesar.count)
            }            
        } );

        averageYears.sort((a,b)=> parseFloat(b.average) - parseFloat(a.average) );

        /*console.log(averageYears);

        var reducedAverages = averageYears.reduce(( yearAcum , yearsAverage)=>{
            return { average: yearsAverage.average,
                     years: yearsAverage.year
                   }
        }, []);
        console.log(reducedAverages); */

        return `The best year was ${averageYears[0].year} with an average rate of ${averageYears[0].average}`
    }
}
