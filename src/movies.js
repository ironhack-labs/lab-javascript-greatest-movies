// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
    var newArray = movies.map(function(obj){

             return obj.director;
    });
    return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    const spielbergDramaMovies = movies.filter(movies => (movies.director=='Steven Spielberg') && (movies.genre.includes('Drama')));

    return spielbergDramaMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movies.length === 0) {
        return 0;
    };
    let rates = movies.filter(movie => "rate" in movie).reduce((sum, movie) => {
        return sum + movie.rate;
    },0);

    return Math.round(rates / movies.length * 100)/100 ;
};
console.log(ratesAverage(movies));
    
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(movies=> movies.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
        return 0;
    };
    let dramaRates =  dramaMovies.reduce(function(sum,movie){
        return sum + movie.rate;
    },0) ;
    return Math.round(dramaRates/dramaMovies.length*100 )/100;
};




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies){
    let orderYears = JSON.parse(JSON.stringify(movies));
    orderYears.sort(function(num1,num2){
        if(num1.year!=num2.year){
            return num1.year-num2.year;
        }else{
            return (num1.title >= num2.title) ? 1 : -1;
        }
    });
    return orderYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let orderLetters = JSON.parse(JSON.stringify(movies));
    orderLetters.sort(function(word1,word2){
        if (word1.title < word2.title) {
            return -1;
        }
        else if (word2.title < word1.title) {
            return 1;
        }
        return 0;
    });
    let orderLetters1 = orderLetters.map(function(obj){
            return obj.title;
    });
    return orderLetters1.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    let newArray = JSON.parse(JSON.stringify(movies));
    newArray = newArray.map((element) => {
        let totalMinutes = 0;
        let time = element['duration'];
        if(time.includes('h')){
            totalMinutes = totalMinutes + parseInt(time[0]*60);
            if(time.includes('min')){
                totalMinutes = totalMinutes+ parseInt(time.slice(time.indexOf(' '),time.indexOf('min')));
            }
        }else{
            totalMinutes = totalMinutes + parseInt(time.slice(0,time.indexOf('min')));
        }
        element['duration'] = totalMinutes;
        return element;
    });
    return newArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
