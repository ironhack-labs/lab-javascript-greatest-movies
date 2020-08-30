// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (movies) => {
    const newArrayMovies = movies.map(movie => movie.director);
    return newArrayMovies;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (movies) => {
    const moviesArr = movies.map(movie => movie);
    const nbMoviesFilteredDramaSpie = moviesArr.filter(movieByDirector => movieByDirector.director == "Steven Spielberg"  && movieByDirector.genre.includes("Drama") );
    return(nbMoviesFilteredDramaSpie.length);
};
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
//let movies = [{ rate: 8 }, { rate: 8 }];
const ratesAverage = (movies) => {
    let res;
    if(movies.length === 0) {
        res =0;
    } else {
        const rateByMovies = movies.map(movie => movie);

        const handleVoid = rateByMovies.filter((e) => {
            if(!e.rate){
                e.rate = 0;
                return e;
            } else {
                return e;
            }
        });
        const sumRate = handleVoid.reduce((accu, handleVoid) => accu += handleVoid.rate, 0);
        const nbEl = handleVoid.length;
        const avgRate = Math.round(sumRate/nbEl * 100)/100;

        res = avgRate;
    }

    return res;
};

// console.log('****', ratesAverage(movies));
// Iteration 4: Drama movies - Get the average of Drama Movies

/*const movies = [
    { genre: ['Drama'], rate: 8 },
    { genre: ['Prout'], rate: 9 },
    { genre: ['Drama'], rate: 7 }
];
*/
const dramaMoviesRate = (movies) => {
    let res;
    if(movies.length === 0) {
        res = 0;
    } else {
        const rateByMovies = movies.map((movie) => movie);
        const handleVoid = rateByMovies.filter((e) => {
            if(!e.rate){
                e.rate = 0;
                return e;
            } else {
                return e.rate;
            }
        });
        const sumRate = handleVoid.reduce((accu, handleVoid) => accu += handleVoid.rate, 0);
        if(rateByMovies.length === 1) {
            return sumRate;
        } else {
            const moviesOnlyDrama = rateByMovies.filter((e) => e.genre.includes('Drama')); 
            if(moviesOnlyDrama.length === 0) {
                res = 0;
            } else {
                const sumRateForDrama = moviesOnlyDrama.reduce((accu, moviesOnlyDrama) => accu += moviesOnlyDrama.rate, 0);
                const nbEl = moviesOnlyDrama.length;
                const avgRate = Math.round(sumRateForDrama/nbEl * 100)/100;
                res = avgRate;
            }
        }
    }
    return res;
}; 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    if (!movies.length ) return 0;
    const cpMovies=[...movies];
    cpMovies.sort((movie1, movie2) =>{
        return movie1.year - movie2.year || movie1.title.localeCompare(movie2.title);
    });
    return cpMovies;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/*const moviesArr = [
    { title: 'aab' },
    { title: 'aaa' },
    { title: 'abc' },
    { title: 'acb' },
    { title: 'abb' }
  ];
*/
const orderAlphabetically = (movies) => {
    const cpMovies = [...movies];
    if (!movies.length) return [''];
    const filteredMovies = cpMovies.sort((movie1, movie2) =>  movie1.title.localeCompare(movie2.title));
    const moviesTitle = filteredMovies.map((movie) => movie.title);
    const spliceMovies = moviesTitle.splice(0, 20);
    return spliceMovies;
};

//console.log(orderAlphabetically(moviesArr));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
    let res;
    const cpMovies = [...movies];
    
    let transformDuration = [];


    for(var i = 0; i < cpMovies.length; i++){
        if(cpMovies[i].duration !== '' || !cpMovies[i].duration) {
            let duration = cpMovies[i].duration;
            const tmp = duration.split(' ');
            
            if(tmp.length === 2){
                let nbrHeure = Number(tmp[0].replace('h', ''));
                let nbrMin = Number(tmp[1].replace('min', ''));
                let myObject = {};
                if(nbrHeure === 0 || nbrMin === 0) {
                    if(nbrHeure === 0) {
                        myObject = {duration: nbrMin} 
                        transformDuration.push(myObject);
                    } else {
                        myObject = {duration: nbrHeure*60} 
                        transformDuration.push(myObject);
                    }
                } else {
                    let timesInNumeric = (nbrHeure*60) +nbrMin
                    myObject = {duration: timesInNumeric};
                    transformDuration.push(myObject);
                }
                res = [...transformDuration];
                return res;
            } else {
                let myObject = {};
                if(tmp.length === 1) {
                    if (tmp[0].includes('min')) {
                        let nbrMin = Number(tmp[0].replace('min', ''));
                        myObject = {duration: nbrMin}; 
                    } else {
                        
                        let nbrHeure = Number(tmp[0].replace('h', ''));
                        myObject = {duration: nbrHeure * 60} ;
                    }
                }
                transformDuration.push(myObject);
            }
            return transformDuration;
        }
    }
    return res;
};



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
/*
const newMoviesArr = [
    { year: 2000, rate: 9 },
    { year: 2000, rate: 8 },
    { year: 1978, rate: 10 },
    { year: 1978, rate: 7 }
  ];

const bestYearAvg = (movies) => {
    
    if(movies.length === 0 ) {
        return null;
    }
    else if (movies.length === 1) {
        return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
    }
    mapMovies = movies.map((movie) => movie);
    mapMoviesYears = movies.map((movie) => {
        return movie.year;
    });
    var temp = [];
    var currentYear = mapMovies[0].year;
    console.log('currentYear: ', currentYear)
    for(let i=0; i < mapMovies.length -1; i++) {
        console.log('--------', currentYear)
        console.log(mapMovies[i].year)
        console.log(currentYear !== mapMovies[i].year);
        if( mapMovies[i].year === mapMovies[i+1].year){
            temp.push(mapMovies[i+1].year);
        } 
    }
    console.log('-----temp: ',temp);

    const allYears = [...temp];
    console.log('allYears', allYears)
    console.log(mapMovies);
    console.log('mapMoviesYears', mapMoviesYears);
    console.log(newMoviesArr);
    var allRatePerYear = []

    for(let i = 0; i < allYears.length; i++) {
        let sum = 0;
        var moviesSum = [];
        console.log('in for', mapMovies);
        let filtered = mapMovies.filter(movie => movie.year === allYears[i])
        console.log('filtered...', filtered);
        for(j = 0; j < filtered.length; j++){
            console.log('------',filtered[j].rate);
            sum += filtered[j].rate;
        }

        console.log(sum);
        console.log('moviesSum', moviesSum[i] = sum)
        console.log('filtered',moviesSum);
        
    }
    console.log(moviesSum)
    console.log('allRate', allRatePerYear)
    return movies
}

console.log(bestYearAvg(newMoviesArr))
*/