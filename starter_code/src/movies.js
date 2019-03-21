/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function newDuration(movieDuration) { 

       
        var duration = movieDuration.split(" ")
       
        
        if(duration[1] != undefined){

            return durationTotal = parseInt(duration[1]) + parseInt(duration[0])*60;

        } else if (duration[0].includes("h")){
            return durationTotal = parseInt(duration[0])*60
        } else {
            return parseInt(duration[0])
        }
            
};

function turnHoursToMinutes(arr) {
    return arr.map(movie => {
       
        return Object.assign([], movie, {duration: newDuration(movie.duration)})
    })
};


// Get the average of all rates with 2 decimals 

function ratesAverage(arr) {
    // console.log(arr)
    // return parseFloat(arr.reduce((a,movie)=>a+parseFloat(movie.rate),0)) / arr.length
   

    return (Math.round((parseFloat(arr.reduce((a,movie)=>{
        if (movie.rate==="") return a;
        return a+parseFloat(movie.rate) 
    },0)/ arr.length))*100)/100)
}

// Get the average of Drama MoviesdurationMdurationMindurationMindurationMinin

function dramaMoviesRate(arr) {
    var dramas = arr.filter(filterFilm => filterFilm.genre.includes("Drama"))
    if(dramas.length > 0) {
        return ratesAverage(dramas)
    }else{
        return undefined
    }
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average