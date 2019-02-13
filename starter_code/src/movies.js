/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


/*function turnHoursToMinutes (arrayPeliculas){
    let newMovies = arrayPeliculas.map(function(pelicula){
        let duration = pelicula.duration;
        let arrayString = duration.split(' ');
        let arrayNumber = arrayString.map(function(i){
            return parseInt(i);
        });
        if(arrayNumber.length === 2){
            arrayNumber[0] = arrayNumber[0] * 60; 
        }
        let tusmuerto = arrayNumber.reduce((accum,current)=>{
            return accum+current;
        })
        pelicula.duration = tusmuerto;
        return pelicula;
    })
    return newMovies;
}
*/
// Get the average of all rates with 2 decimals 

let average = movies.reduce((acc,cur) => {
    return acc + parseFloat(cur.rate);
}, 0)/movies.length;

var conDecimal = average.toFixed(2); 

console.log(conDecimal);

console.log("-------------------------------------");
// Get the average of Drama Movies

let drama = movies.map(drama2 => {
    let generos = drama2.genre;
    var count = 0;
    if(generos === 'Drama'){
        
        count ++;
    }
    return count;
});

console.log(drama);

console.log("-------------------------------------");
// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
