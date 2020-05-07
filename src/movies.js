// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
   let newarray =  array.map(function(movie){
       return movie.director;
})
return newarray;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    let newdram = array.filter(function(genr){
        return genr.director === "Steven Spielberg" && genr.genre.includes("Drama") ;
    })
    return newdram.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    let newaver = array.reduce(function(sum, elem){
         return sum += elem.rate || 0;
    },0)
    let avera = newaver / array.length;
    return Math.round(avera * 100) / 100 || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let drave = array.filter(function(obj){
        return obj.genre.includes("Drama");
   })
   return ratesAverage(drave);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let newSortedArray = JSON.parse(JSON.stringify(array));
    newSortedArray = newSortedArray.sort(function(num1, num2){

        if (num1.year < num2.year){
            return -1;
        }
        else if (num1.year > num2.year){
            return 1;
        }
        else {
            return 0;
        }
    })
    let sortedalp = JSON.parse(JSON.stringify(array));
    sortedalp = sortedalp.sort(function(word1, word2){
        if (word1.title < word2.title){
        return -1;
        }
        else if (word1.title > word2.title){
          return 1;
        }
        return 0;
      })
    return newSortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(alphabets){
  let sortedalphabets = JSON.parse(JSON.stringify(alphabets));
  sortedalphabets = sortedalphabets.sort(function(word1, word2){
  if (word1.title < word2.title){
  return -1;
  }
  else if (word1.title > word2.title){
    return 1;
  }
  return 0;
})
let name = sortedalphabets.map((people) =>{
     return people.title
     })
return name.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
