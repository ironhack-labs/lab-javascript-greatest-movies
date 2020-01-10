/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = array =>{
    newArray = array.map(obj=>obj);
    return newArray.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title));
        }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    const movie = arr.filter(
        function(movie){
            return movie.director == "Steven Spielberg" && movie.genre.includes("Drama");
        }
    );
        return movie.length
    }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = array =>{
    return newArray = array.map(obj=>obj.title).sort().slice(0,20);
}
     

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = array => {
    if(array.length===0) 
    return 0;
    const rates = array.map(movie=>movie.rate>0 ? movie.rate : 0)
    const sum = rates.reduce((acc,value)=>acc+value)
    const total = sum/array.length
    return 1*total.toFixed(2);
           
}


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = array =>{
    let counterRate = 0,
        counterMovies = 0;
    const newDramaArray = array.map(obj=>obj);
    newDramaArray.forEach(elemento => elemento.genre.forEach(elem => {
        if(elem === "Drama"){
            counterRate += elemento.rate;
            counterMovies++;
        } 
        return 0;
    }))
    return Number(parseFloat(counterRate/counterMovies).toFixed(2))
} 



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
//const turnHoursToMinutes= (arr) => {}

// BONUS Iteration: Best yearly rate average - Best yearly rate average