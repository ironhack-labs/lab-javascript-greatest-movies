/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
   
    let newMovies = [...movies];
    if ( movies.length == 0  ){
       return newMovies ;
    }
    
    newMovies.sort(function(moviea, movieb) { 
        return moviea.year - movieb.year  ;
    });
    
    newMovies.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 )
     
    //console.log(newMovies); 
    return newMovies;    
}    

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
    function howManyMovies(movies) {

        if (movies.length == 0){
            return 0;
        }      

        const moviesNumbers = movies.filter(movie => movie.director == "Steven Spielberg" );

        const moviesNumbers2 = moviesNumbers.filter(movie2 => movie2.genre.indexOf('Drama') > -1 );

        return moviesNumbers2.length; 

    } 
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(movies) {
        
        let newMovies = [...movies];
        newMovies.sort((a,b) =>{
            if (a.title.toLowerCase() > b.title.toLowerCase() ) return 1;   
            if (a.title.toLowerCase() < b.title.toLowerCase() ) return -1;
            return 0;
        })
        
        let moviesTitle = [];
        newMovies.forEach(element => moviesTitle.push(element.title));
        
        return moviesTitle.slice(0, 20) ;
    };

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
    function ratesAverage(movies) {
        
        if (movies.length == 0){
            return 0;
        }      
        
        let movieNumber = 0;        
        var total = movies.reduce(function(accumulator, currentValue){            
            if ( !isNaN(currentValue.rate) ){
                movieNumber = movieNumber+1; 
                return accumulator + currentValue.rate;
            } else {
                return accumulator ;
            }
        }, 0);
        
        return Math.round((total / movies.length)*100)/100 ;
    }

// Iteration 5: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(movies){

        //exclure drama//
        const moviesDrama = movies.filter(movie => movie.genre == "Drama" );
        let total = ratesAverage(moviesDrama);
        return total ;
    } 

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(movies) {
        
        const movies1 = movies.map(movie => {
            return {
              name: movie.name,
              title:  movie.title,
              year: movie.year,
              director: movie.director,
              duration: Number(convertDuration(movie.duration)),
              genre:movie.genre,
              rate: movie.rate,
            }
          });
          
        return movies1 ;
    }
    function convertDuration(stringh) {
        //"duration": "1h 38min",
        if (stringh.includes("h")) {
            let hours = Number(stringh.split("h")[0]);
            let m = stringh.split("h")[1];
            let minute = Number(m.split("min")[0]);
            return Number(hours*60 + minute) ;
        } 
        let minute = Number(stringh.split("min")[0])
        return minute ; 
    }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
    function bestYearAvg(movies){
        
        if (movies.length == 0){
            return null;
        }      
        
        if (movies.length == 1){
            return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
        }      
        
        //faire une liste de toutes les années
        let years = [];
        for (i = 1900; i < 2020; i++) { 
            years.push(i);
        }
        let totaux = [];   
        
        years.forEach((year) => {
          let moviesYear = movies.filter(movie => movie.year == year );
          if ( moviesYear.length > 0 ){
            let total = ratesAverage(moviesYear);
            
            totaux.push([ total ,year]);
          } else {
            totaux.push([0, year]); 
          }
        });

        let newTotaux = [...totaux];
        newTotaux.sort((a,b) =>{
            if (a[0] > b[0] ) return -1;   
            if (a[0] < b[0] ) return 1;
            return 0;
        })
        
        return `The best year was ${newTotaux[0][1]} with an average rate of ${newTotaux[0][0]}`;
        
    }

