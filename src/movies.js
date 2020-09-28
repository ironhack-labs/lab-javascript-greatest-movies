// Iteration 1: All directors? - Get the array of all directors.


const getAllDirectors = (movies) => {
    var directors = movies.map((elemento) => {
        return elemento.director;
    });
    
    return directors; 
};


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = function (movies) {
    const sSpielbergMovies = movies.filter(elemento => elemento.director === 'Steven Spielberg' && elemento.genre.includes('Drama'));

    return sSpielbergMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = function (movies){
    const califProm = movies.reduce((acum,elemento) => {
        if (elemento.rate) {
            return acum += elemento.rate;
        } else {
            return acum +=0;
        }
    },0);
    
    if (califProm === 0) {
        return 0;
    }
    const averageFinal = califProm/movies.length;
return Number(averageFinal.toFixed(2));    
}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = function (movies){
    const  calfDramaMovies= movies.filter(elemento => elemento.genre.includes('Drama'));
       
    return ratesAverage(calfDramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


const orderByYear = function (movies) {
        const ordenarPorAño = movies.slice().sort((a,b) => {
        
        if (a.year > b.year) {
            return 1;
        }
        
        if (a.year < b.year) {
            return -1;
        }

        if (a.year === b.year) {
            
            if (a.title > b.title){
                return 1;
            }

            if (a.title < b.title){
                return -1;
            }

            return 0;
        }
    
        
        });
        return ordenarPorAño;
    }
    
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = function (movies) {
    const ordenarPorTitulo = movies.slice().sort((a,b) => {
    
    if (a.title > b.title) {
        return 1;
    }
    
    if (a.title < b.title) {
        return -1;
    }

    if (a.title === b.title) {
        
        if (a.title > b.title){
            return 1;
        }

        if (a.title < b.title){
            return -1;
        }

        return 0;
    }

    
    });

    const previoImpresion = ordenarPorTitulo.map((elemento) => {
    return elemento.title;
    });

    return previoImpresion.slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
