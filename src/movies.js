// Iteration 1: 
function getAllDirectors(movies) {
    return movies.map((element) => {return element.director })
  }
console.log(getAllDirectors(movies))

// Iteration 2:
function howManyMovies(movies) {
    if (movies.length === 0) {
        return 0;
    }
    return movies.filter((element) => {

       if (element.director === 'Steven Spielberg' && element.genre.includes('Drama')) {
        return true
       } else {
        return false 
       }
    }).length /*.length serves to return a number, just like in a for loop for example*/

}

//Iteration 3:
function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0
    }
 const totalScore = movies.reduce((acc, currentElement) => {
    if(currentElement.score) {
        return acc + currentElement.score  
    } else {
        return acc 
    }
 }, 0);

 const average = totalScore / movies.length
 return Math.round(average * 100) / 100;
}

// Iteration 4:
function dramaMoviesScore(movies) {

const dramaMovies = movies.filter((element) => {
    if (element.genre.includes('Drama')) {
        return true
    }
})

if (dramaMovies.length === 0) {
    return 0
}
    
const dramaAverage = dramaMovies.reduce((acc, currentElement) =>{
    if (currentElement.genre.includes('Drama')) {
        return acc + currentElement.score
    } else {
        return acc 
    }
}, 0)
const average = dramaAverage / dramaMovies.length
return Math.round(average * 100) / 100

}


//Iteration 5:
function orderByYear(movies) {
return movies.toSorted((movie1, movie2) => {
    if (movie1.year > movie2.year) {
        return 1
    } else if (movie1.year< movie2.year) {
        return -1 
    } else {
        if (movie1.title > movie2.title) {
            return 1
        } else if (movie1.title < movie2.title) {
            return -1
        } else {
            return 0
        }
    }
})
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    return movies.map((element) => element.title).toSorted((movie1, movie2) =>{
        if(movie1 > movie2) {
            return 1
        } else if (movie1 < movie2) {
            return  -1
        } else {
            return 0
        }
    }).slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    return movies.map((element) => {
        const durationParts = element.duration.split(' ');
        let durationInMinutes = 0;

        durationParts.forEach(currentElement => {
            if (currentElement.includes('h')) {
                durationInMinutes += Number(currentElement.replace('h', '')) * 60;
            } else if (currentElement.includes('min')) {
                durationInMinutes += Number(currentElement.replace('min', ''));
            }
        });

        return {
            ...element,
            duration: durationInMinutes
        };
    });   
}
console.log(turnHoursToMinutes(movies))


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
//{?}

}
