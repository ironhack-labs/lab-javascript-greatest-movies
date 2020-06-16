// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = arr => {
    const ratesArr = arr.map((item => item.director)) //returns array with directors
    return ratesArr.filter((director, index) => ratesArr.indexOf(director)=== index) //removes duplicates (if they have indexOf different from index not included)
} 

getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr => {
    return moviesSpielberg = (arr.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"))).length;
    //used dot notation to return an array with selected movies (each movie is an object)
    //return the array length to know the number of movies in the array
    }
howManyMovies (movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = arr => {
    const ratesArr = arr.map((item => item.rate)); //returns array of rates
    if (!arr.length){ //if the array is empty
        return 0;
    }else{
        for (var i = 0, l = ratesArr.length; i < l; i++) { //iterates through array 
            if ( typeof ratesArr[i] !== "number") { // if the item is not a number
                ratesArr[i] = 0; //will be replaced with 0
            }}
        let avgRates = (ratesArr.reduce((acc, currVal) => acc + currVal))/ratesArr.length; //reduce sums all rates, which are then divided by number of rates
            return +avgRates.toFixed(2);} // toFixed returns a string the + transforms it back to number
}

ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr =>{
    let dramaMovies = arr.filter(movie => movie.genre.includes("Drama"));   //filters only drama movies
    return ratesAverage(dramaMovies) //run average function to get the result

}
dramaMoviesRate(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = arr =>{
    return [...arr.sort((a, b) => a.year - b.year !== 0 ? a.year - b.year : a.title.localeCompare(b.title))];// object copied in array with spread operator, sort combined with ternary: !(if b-a =0) sort by year otherwise compare titles + value insert in array (see Specs requirement)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr =>[...arr].sort((a, b) => a.title.localeCompare(b.title)).map(item => item.title).slice(0,20); //spread operator to copy object, Sort A-Z, Copy titles in new arr, returns only 20

orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => arr.map(movie => {
    let moviesObj = { ...movie} //shallow copy of movies + removed from array (each movies is an object)
    moviesObj.duration = moviesObj.duration.split(" ") //returns array [h,min]
    let newDuration = 0;
    if (moviesObj.duration.length === 1) { //if array as 1 element, it's either h or mins
    newDuration = moviesObj.duration[0].includes("h") ? parseInt(moviesObj.duration[0].replace("h", "")) * 60 : parseInt(moviesObj.duration[0].replace("min", ""))
//ternary: if includes hours -> remove h, multiply per 60 and returns number; otherwise: remove min, returns number
        
    } else {
        newDuration = parseInt(moviesObj.duration[0].replace("h", "")) * 60 + parseInt(moviesObj.duration[1].replace("min", "")) //removes "h" and "mins", multiply hours per 60, returns number
    }
    return { //function returns movies
        ...moviesObj,
        duration: newDuration //swaps values duration with the new found number
    }
})

turnHoursToMinutes(movies)

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = arr => {

    if (!arr.lenght){
        return null
    };

// 1. Filter only what I need to work with:
    let zed = arr.map(item => {
        return {year: item.year, rate: item.rate}; //creates object with keys year, rate
        })

// 2. Manipulate it and shape it to group together to return -> {year: [rate, rate], year: [rate, rate], ...}
    let sortedMovie = zed.reduce(function (obj, mov) {  
        var int = Math.floor(mov.year);  // Get the value I want to use to group
    
        if (!obj.hasOwnProperty(int)) { // If the group with that value doesn't already exist as a key in the object, create it
            obj[int] = [];
        }
        
        obj[int].push(mov.rate); // Push the rate to its value key
        
        return obj;  // Pass the object on to the next loop
    }, {});
    
// 3. Create average function to return average of rates of each year and compare to find the higest
// 4. Return the string `The best year was <YEAR> with an average rate of <RATE>`

}
