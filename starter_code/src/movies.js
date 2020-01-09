/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let newArr = arr.slice(0); // new array
    return newArr.sort(
        function ( a, b ) {
            if ( a.year < b.year ){
              return -1;
            }
            if ( a.year > b.year ){
              return 1;
            }
            if ( a.title < b.title ){
                return -1;
            }
            return 0;
          }
    );

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    var spil = arr.filter(
        function(movie){
            return movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
        }
    );
    return spil.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let newArr = arr.slice(0); // new array
    let sorted = newArr.sort(
        function ( a, b ) {
            if ( a.title < b.title ){
              return -1;
            }
            if ( a.title > b.title ){
              return 1;
            }
            return 0;
          }
    );
    return sorted.map((e) => (e.title)).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length == 0) return 0;
    let sum = arr.reduce((sum, movie) => {
        if(movie.rate){
            return sum + movie.rate
        } else{
            return sum
        }
    }, 0);
    return (parseFloat((sum/arr.length).toFixed(2)));
}



// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){

    let filtered = arr.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(filtered)

}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let regH = /(\d+)h/;
    let regM = /(\d+)min/;
    return arr.map(
        function(m){
            if (m.duration.toString().indexOf("h") > -1 && m.duration.toString().indexOf("min") > -1){
                h = parseInt(regH.exec(m.duration))
                min = parseInt(regM.exec(m.duration))
                this.duration = (h*60)+min
            } else if (m.duration.toString().indexOf("h") > -1){
                h = parseInt(regH.exec(m.duration))
                this.duration = h*60
            } else {
                min = parseInt(regM.exec(m.duration))
                this.duration = min
            };
            return this    
        }
    );
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){  
    if (arr.length == 0){ return null}
    allAvgs = []
    var years = arr.map(
        function(movie){
            return movie.year
        }
    );
    var yearsUnique = years.filter((value, index, self) => self.indexOf(value) === index);
    yearsUnique.forEach(year => {
        let arrYear = arr.filter((movie) => (movie.year == year))
        allAvgs.push({"anyo": year, "avg": ratesAverage(arrYear)})        
    });
    let sorted = allAvgs.sort(
        function ( a, b ) {
            if ( a.avg < b.avg ){
              return 1;
            }
            if ( a.avg > b.avg ){
              return -1;
            }
            return -1;
          }
    );
    return `The best year was ${sorted[0].anyo} with an average rate of ${sorted[0].avg}`
}