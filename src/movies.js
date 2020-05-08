// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr){
    let directors = arr.map(function(el){
        return el.director;
    })
    return directors;
}

console.log(getAllDirectors(movies))


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
 
    let spielbergFilms = arr.filter(function(el){
        return el.director === 'Steven Spielberg' && el.genre.includes('Drama');
    })  
    
    return spielbergFilms.length;
      
}
console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let avg = arr.reduce(function(sum, el){
        return sum + el.rate;
    }, 0)/arr.length;
    return Number(avg.toFixed(2));
}

console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramas = arr.filter(function(el){
        return el.genre.includes('Drama')
    })
    
    let avg = dramas.reduce(function(sum, el){
        return sum + el.rate;
    }, 0)/arr.length;
    return Number(avg.toFixed(2));
}

console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let sortedArray = arr.sort(function(word1, word2){
        if (word1.year != word2.year){
            return word1.year - word2.year
        } else if (word1.year === word2.year){
            if (word1.title < word2.title){
            return -1;
        } else if (word1.title > word2.title){
            return 1;
        }
        return 0;
    }
    })
    return sortedArray.concat();

}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
   let titles = arr.map(function(el){
       return el.title
   })
   let sortedTitles = titles.sort(function(word1, word2){
       if (word1 < word2){
           return -1
       } else if (word1 > word2){
           return 1
       }
       return 0
   })
   
   return sortedTitles.slice(0, 20);
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    
  let getNewTime = (JSON.parse(JSON.stringify(arr)));

   getNewTime = arr.map(function(el){
      let sum = 0;
      let duration = el.duration;
    
        
      if(duration.includes('h')) {
        sum += (parseInt(duration[0]) * 60);
        if(duration.includes('min')) {
            sum += (parseInt(duration.slice(duration.indexOf(' '), duration.indexOf('min'))));
        }
    } else {
        sum += parseInt(duration.slice(0, duration.indexOf('min')));
    }
         el.duration = sum + ' minutes';
         return el;
  
})
  return getNewTime;
  
}
console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
