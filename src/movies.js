// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){

    const newArr = movies.map(movies => movies.director);
    return newArr;

}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    
    const teste = movies.reduce((a, b)=> a.concat(b)).filter((obj)=>obj.genre === 'Drama');

    return teste;

   }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(!movies.length) return 0;
    let newArr = [];
    let som = 0;
    for(i=0;i<movies.length;i++){
    newArr.push(movies[i].rate);
    }
    let test = newArr.reduce((som, newArr)=> som += newArr, 0) / newArr.length;
    return Math.round(test);
 }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let newArr = [];
    movies.forEach(function(movies){
      newArr.push(movies.rate);
    });
    
    const num = newArr.reduce((acc, end) => acc + end, 0)
     let avg = num / newArr.length;
    return parseFloat(avg)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const order = movies.sort(function(a, b){
        return a.year - b.year;
        });

        return order;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let newArr = [];
    movies.forEach(function(movies){
      newArr.push(movies.title);
    });

    return newArr.sort();

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
