/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
var order = movies.slice().sort(function(a,b)
{
 if (a.year !== b.year)
 {
return a.year - b.year;
 }
 else
 {
return a.title.localeCompare(b.title);
// NOTA : El método localeCompare() devuelve un 
//número que indica si la cadena de caracteres actual es anterior, posterior o igual a la 
//cadena pasada como parámetro, en orden lexicográfico.
 }
});
return order;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
return movies.reduce(function(acc, val){
if (val.director === "Steven Spielberg" && val.genre.includes("Drama"))
{
    acc +=1;
}
return acc;
}, 0);
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
var order = movies.map(function(a){
return a.title;
}).sort(function(a,b){
    return a.localeCompare(b);
}).splice(0,20);
return order;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    // var sum = 0;

    // for (let i = 0; i < number.lenght ; i++)
    // {
    //     sum += parseFloat(number[i].rate)
    // }
    // return sum;
    if (!movies.length)
    return 0;

var sum = movies.reduce(function(acc, val){
return acc += parseFloat(val.rate || 0);
}, 0);
 
var average = sum / movies.length;

return Number.parseFloat(average.toFixed(2));



}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
