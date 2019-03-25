/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/*
function turnHoursToMinutes(movies){            // création de fonction 
    var clone=movies;                           // clonnage de la base de donnée
    var hours = 0, minutes = 0;                 // Container hours & minutes
    for(let i = 0; i<movies.length;i++){        // loop de tout les objets
        if (movies[i].duration.includes("h")){ // condition heure 
            hours = parseInt(movies[i].duration.match(/\d+(?=h)/)); // recherche regex des heures + ajout dans la var
            hours = hours * 60; // convertion 1h=60min
        }
        if (movies[i].duration.includes("m")){  // condition minutes
            minutes = parseInt(movies[i].duration.match(/\d+(?=m)/)); // recherche regex des minutes + ajout
        }
        movies[i].duration = hours + minutes; // calcul finale 
    }
    return clone;
    console.log(clone); // affichage 
}
*/



// Get the average of all rates with 2 decimals
/*
function ratesAverage (movies){
    var tableau = [];
    var total=0;
    for (let i = 0; i < movies.length ; i++ ){
        converteur = parseFloat(movies[i].rate);
        tableau.push(converteur);
    }
    var reducer = (accumulator, currentValue) => accumulator + currentValue ;
    total = tableau.reduce(reducer)
    total = total / movies.length;
    console.log(total.toFixed(2));
}ratesAverage(movies);
*/


// Get the average of Drama Movies
/*
function dramaMoviesRate(movies){
    var tableau = [];
    var total=0;
    for (let i = 0; i < movies.length ; i++ ){  
        if(movies[i].genre.indexOf('Drama')){ 
            converteur = parseFloat(movies[i].rate);    
            tableau.push(converteur);                  
        };
    };
    var reducer = (accumulator, currentValue) => accumulator + currentValue ; 
    total = tableau.reduce(reducer);   
    total = total / tableau.length;
    console.log(total.toFixed(2)); 
}dramaMoviesRate(movies); 
*/



// Order by time duration, in growing order
// Sorted by the shortest movies 

/*
  function orderByDuration(movies){           
    var clone=movies;                        
    var hours = 0, minutes = 0;               
    for(let i = 0; i<movies.length;i++){      
        if (movies[i].duration.includes("h")){
            hours = parseInt(movies[i].duration.match(/\d+(?=h)/));
            hours = hours * 60;
        }
        if (movies[i].duration.includes("m")){  
            minutes = parseInt(movies[i].duration.match(/\d+(?=m)/)); 
        }
        movies[i].duration = hours + minutes; 
    }
    movies.sort(function(a,b){
        if (a.duration > b.duration) {
            return 1;
          } else {
            return -1;
          }
    })
    console.log(clone); 
}orderByDuration(movies); 

*/


// How many movies did STEVEN SPIELBERG

/*
function howManyMovies(movies) {
    clone = movies;
    if (clone.length === 0) {
      return ;
    } else {
      var spielbergMovies = clone.filter( clone => clone.director === "Steven Spielberg" && clone.genre.includes('Drama')).length; 
      console.log(spielbergMovies);
    }
  }howManyMovies(movies);
*/

// Order by title and print the first 20 titles



