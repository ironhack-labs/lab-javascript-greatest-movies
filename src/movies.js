// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies)=>{
    const arrayDirector = movies.map((e)=>{
        return e.director
    })
    return arrayDirector
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
//

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    // Var 1: retorna todas las peliculas de Spielberg
    const arraySteven = movies.filter((e) => {
        return e.director === 'Steven Spielberg';
    });
    //Var 2: entra a genero drama 
    const dramaMoviesFromSteven = arraySteven.filter((e) => {
        return e.genre.includes(`Drama`)
    });
    return dramaMoviesFromSteven.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {
    //Suma de todos los ratings
    const sumaRatings = movies.reduce((acumulator, e) => {
        return acumulator + e.rate;
    },0); 
    //dividir por total de peliculas
    const dividirRatings = sumaRatings/movies.length;
        return parseInt(dividirRatings.toFixed(2))
};  


// Iteration 4: Drama movies - Get the average of Drama Movies

orderByYear = (array) => {
    let newArray = array.map(item=> item).sort((a,b)=>
     {
         if(a.year === b.year){
            if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
         }else{
             return a.year - b.year
         }
     }
)
    return newArray
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
