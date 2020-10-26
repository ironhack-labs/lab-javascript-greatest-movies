// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  const allDirectors = arr.map(elm => {
  return elm["director"];
 })
  return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function noRepeatedDirectors(arr) {  
  const allDirectors = arr.map(elm => {
  return elm["director"];
 })
   
  const uniqueDirectors = allDirectors.filter((value, index) => allDirectors.indexOf(value) === index);  
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const dramaStevenSpielberg = arr.filter(elm => elm["genre"].includes("Drama") && elm["director"] === "Steven Spielberg")        
        
    return dramaStevenSpielberg.length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
     if (arr.length === 0) {
    return 0;
     }
    
    const rateElm = arr.filter(elm => elm["rate"])
    const totalSum = rateElm.reduce((acc, elm) => {
        return acc + elm["rate"];
    }, 0)

    const average = totalSum / arr.length
    const rounded = average.toFixed(2)
    return parseFloat(rounded);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const genre = arr.filter(elm => {
        return elm["genre"].includes("Drama");
    });
        
        if (genre.length === 0) {
    return 0;
        }
    
    const ratesSum = genre.reduce((acc, elm) => {
        return acc + elm["rate"];
    }, 0)

    const average = ratesSum / arr.length;
    const rounded = average.toFixed(2);

    return parseFloat(rounded);
}
    


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    const arrCopy = [...arr];

    const ordered = arrCopy.sort(function (a, b) {
        
        if (a["year"] === b["year"]) {
            if (a["title"] > b["title"]) {
                return 1
            } else if (a["title"] < b["title"] ) {
                return -1
            }
        } else {
            return a["year"] - b["year"];
        }
    })        
    return ordered  
}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {    

    const title = arr.map(elm => {
        return elm["title"];
    })
    const ordered = title.sort();
    const twentyFirstTitles = ordered.slice(0, 20);
    return twentyFirstTitles;
}  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    const changeDuration = arr.map(elm => {
        let duration = elm["duration"];
        let change = duration.split(":");
        let total = parseInt(change[0]) * 60 + parseInt(change[1]);
        return total
    })
    return changeDuration;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
