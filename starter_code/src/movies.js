/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (array){
    let newArray = array.slice ();
    return newArray.sort((a,b)=> { 
        if (a.year > b.year) return 1
        if (a.year == b.year){
            if (a.title > b.title)return 1
            if (a.title == b.title) return 0
            if (a.title < b.title) return -1
        } 
        if (a.year < b.year) return -1
    })

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    // select elements
    let newArray = array.filter(object => {
        return object.director === "Steven Spielberg" && object.genre.indexOf("Drama") !== -1
    })
    // count elements
    return newArray.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let newArray = array.slice();
    newArray.sort((a,b) => {
        if(a.title > b.title) return 1;
        if(a.title == b.title) return 0;
        if(a.title < b.title) return -1;
    }) 
     newArray = newArray.map(object => object.title);
     return newArray.slice(0,20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if (array.length === 0){
        return 0;
    }

    let suma = array.reduce((acumulador, object) => {
        if (object.rate == undefined){
            return acumulador + 0;
        } 
        return acumulador + Number(object.rate); // No me queda claro el por qué
    }, 0)                                        // de usar Number

    let averageRate = Math.round((suma / array.length) * 100) / 100;
    console.log(averageRate);

    return averageRate;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
