/* eslint no-restricted-globals: 'off' */



// Turn duration of the movies from hours to minutes 


let turnHoursToMinutes = this.movies.map(minutes => {time(minutes.duration)});
console.log(turnHoursToMinutes);

function time(duration){


    if(duration.indexOf("h")!= -1 && duration.indexOf("min") != -1){
      let hora = duration.split("h")
      let c=parseInt(hora[0]*60)
      let mins = hora[1].split("min",1);
      let d= parseInt(hora[1]);
    
      let total = c+d;
    console.log(total+ "min");
  
    }else if(duration.indexOf("h")!=-1 && duration.indexOf("min") ==-1 ){
      let hora = duration.split("h")
      let c=parseInt(hora[0]*60)
    console.log(c+ "min");
}

};


// Get the average of all rates with 2 decimals 

let ratesAverage = movies.reduce((acumulator, currentValue) => {
return acumulator + parseFloat(currentValue.rate)}
,0 )/movies.length;

var avgnotas = parseFloat(ratesAverage.toFixed(2));

console.log(avgnotas);



// Get the average of Drama Movies



let dramaMoviesRate = movies.filter(drama => drama.genre.includes("Drama"));
console.log(dramaMoviesRate);
console.log(dramaMoviesRate.length);

let avgDramaRate = dramaMoviesRate.reduce((accum,curr) => {
    return accum + parseFloat(curr.rate)
},0)/dramaMoviesRate.length;

console.log(avgDramaRate);


// Order by time duration, in growing order

//los e ordenado por año
/*let orderByDuration = movies.sort(function(a,b) {
        return (b.year - a.year);
        
    })
    

console.log(orderByDuration);
*/

// How many movies did STEVEN SPIELBERG

let howManymovies =movies.filter(spielbergMovies => spielbergMovies.genre.includes("Drama") && spielbergMovies.director.includes("Spielberg")) ;
console.log(howManymovies);


// Order by title and print the first 20 titles

let orderAlphabetically = movies.sort(function(a,b){
    return(b.title - a.title)

})
console.log(orderAlphabetically);

function orderAlphabetically1 (){
   // movies.title.sort();
    for(let i=0;i<20;i++){
        console.log(orderAlphabetically[i]);
    }
}

// Best yearly rate average
