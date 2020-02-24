/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(result) {
    
    let sortedMovies = [...result].sort((value1,value2) => {
        if (value1.year > value2.year) {
            return 1;
        } else if (value1.year < value2.year) {
            return -1;
        }
        else if ((value1.year === value2.year) && (value1.title > value2.title)) {
           return 1
        }
        else if ((value1.year === value2.year) && (value1.title < value2.title)) {
            return -1
        }
    });
    return sortedMovies;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(resultArr) {

    let dramaCheck = resultArr.filter(movie => {
        return movie.genre.indexOf("Drama") !== -1  && movie.director === "Steven Spielberg"
    })
   
    return dramaCheck.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically = (result) => {

    return result.map(movie => movie.title).sort().slice(0,20)

 /*
    let titles = [...result].map( movie => {
        return movie.title 
    });

    return titles.sort().slice(0,20)
    
   .sort((item1,item2) =>
    {
        if (item1.title < item2.title){
            return -1
        }
        if (item1.title > item2.title){
            return 1
        }
    })
    .map (movies => movies.title)
    .slice(0,20)
    return newArr;*/

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

let ratesAverage = (newArr) => {
    
    let result = 0;

    if (newArr.length) {
        result = newArr.reduce((accumulator, value) =>  { 

            if (value.rate) {
                return accumulator + value.rate
            }
            else {
                return accumulator 
            }
           
        }, 0)
    }
    else {
        return 0;
    }
    
        
    let final = parseFloat((result / newArr.length).toFixed(2))

    //console.log(final) 

    return final

    //return parseFloat(final).toFixed(2)
}


// Iteration 5: Drama movies - Get the average of Drama Movies

let dramaMoviesRate = (newResult) => {

    let dramaCheck = newResult.filter(movie => {
        return movie.genre.indexOf("Drama") !== -1 
    })

    return ratesAverage(dramaCheck)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (newDurationArray) => {

    let duration = newDurationArray.map(movie => movie.duration.split(' '))
    
    //console.log(duration)
    //console.log(parseInt(duration[0])*60);
    //console.log(parseInt(duration[1]));

    for (let i=0; i<duration.length; i++){
        let hours = duration[i][0];
        let minutes = duration[i][2];
////////////////////// CONTINUEEEEEEEEEE
        //let hoursToNumber = parseInt(hours) * 60;
        //let minutesToNumber = parseInt(minutes);

        

        
    }

    return parseInt(hoursToNumber + minutesToNumber)
    
    //console.log(parseInt(value[i][0]))
    //console.log( parseInt(hoursToNumber + minutesToNumber))

    //let hours = parseFloat(duration[0]) * 60
    //let minutes = parseFloat(duration[1])

    //let result = hours + minutes




}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
