/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){

    var minutesArray = movies.map(function(eachMovie){ //looped through all movies
        let movie = eachMovie.duration.split(" ") //made the duration string into array
        // console.log("=================================== ", movie);
        let totalMinutes = 0; 
        movie.forEach((arr)=>{ //loop through array 
            if(arr.includes('h')){  
                totalMinutes+=Number(arr.replace('h',''))*60 //if has h do this math
            } 
            if(arr.includes('min')){
                totalMinutes+=Number(arr.replace('min','')) //if has min do this
            }
        })
        return {...eachMovie, duration: totalMinutes} //return all the old movie stuff with different duration

    })

    return minutesArray //return ENTIRE new ARRAY with durations 

}
//turnHoursToMinutes(movies)  
  
  

// Get the average of all rates with 2 decimals 

function ratesAverage(arr){

let rating = 0; 

arr.forEach(function(n){
rating += n.rate; 
});

return (rating / arr.length);
}

// ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(arr){

let dramaMovie = 0;
let dramaRate = 0;

arr.forEach(function(a){
if(a.genre.includes('Drama')){
    dramaMovie++;
    dramaRate += a.rate
};
}); if (dramaMovie === 0){
    return undefined;
} 
 return parseFloat((dramaRate / dramaMovie).toFixed(2));
}
// dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(arr){

    let newArray = turnHoursToMinutes(arr)
    // console.log(newArray);
    newArray.sort(function(a,b) { 
        var result = a.duration - b.duration
        if(result != 0) {
            return result;
        }
        if(a.title < b.title) {
            return -1;
        }
        if(a.title > b.title) {
            return 1;
        }
        return 0
    });
    // console.log(newArray);
    return newArray;
    
}
// orderByDuration(movies);



// How many movies did STEVEN SPIELBERG directed

function howManyMovies(arr){
    // directedMovies = 0;
    // for(i = 0; i < arr.directed){
    //     if(directedMovies = direct )
    // }

    let newArray = arr.filter(function(d){
        
        if(d.director === 'Steven Spielberg' && d.genre.includes('Drama')){
            return d
        } 
    });

    // newArray.forEach(oneMovie => {
    //     if(oneMovie.genre.includes('Drama')){
    //         directedMovies += 1;
    //     }
    // })
    if(arr.length === 0) {
        return undefined;
    }

    return `Steven Spielberg directed ${newArray.length} drama movies!`
}


// Order by title and print the first 20 titles
function orderAlphabetically(movie){
var movies = movie.map()
}

// Best yearly rate average

function bestYearAvg(movies){
        movies.sort((a,b) => {
    if (a.year < b.year) {return -1}
    if (a.year > b.year) {return 1}
        return 0;
    });
        let bestAvg = 0;
        let year = 0,  
            sum = 0,
            count = 0;

    for(let i =0; i.movies.length; i++) {    
    if (movies[i].year = year){
        if(bestAvg < sum / count){
            bestAvg = (sum / count)
            beatYear = movies[i].year;
        }
        }
        sum +=Number(movies[i].rate)
        count += 1;
        console.log(Number)
    }   

    return
}