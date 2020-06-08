// Iteration 1: All directors? - Get the array of all directors.

//TWO OPCIONS TO DO THE ITERATION

const getAllDirectors = (movies) => movies.map(elm => elm.director)

/* function getAllDirectors(movies){
    const getAllDirectors = movies.map(elm => elm.director)
     return getAllDirectors
}
*/
console.log(getAllDirectors) 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes ("Drama")).length

 /* function howManyMovies(movies){
    const dramaSpielberg = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes ("Drama"))
    const howManyMovies = dramaSpielberg.length
    return howManyMovies
}  */

     console.log('the number dramatic movies of Steven Spielberg are ', howManyMovies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/* const totalRates = movies.length
const ratesAverage = (movies) => movies.reduce((acc, elm) => acc + elm.rate , 0, ) / movies.length */



function ratesAverage(movies){
    if (movies.length === 0){
        return 0
    }
    
    const ratesAverage = movies.reduce((acc, elm) => acc + elm.rate, 0) / movies.length
   
    // me ha costado horrores encontrar la manera de meter el fixed estos son los dos metodos que he encontrado
    //return Number.parseFloat(ratesAverage.toFixed(2)) parsea un argumento cadena y regresa un número de punto flotante.

    return Number(ratesAverage.toFixed(2)) 
    //A Number object is created using the Number() constructor. A primitive type object number is created using the Number() function.
}

console.log("El ratio medio es ", ratesAverage)


// Iteration 4: Drama movies - Get the average of Drama Movies EL CUATRO ME COSTO HASTA QUE ME ENTERE BIEN DE LO QUE PEDIAN LUEGO FUE BASTANTE SENCILLO

/* const dramaMoviesRate = (movies) => movies.filter(elm => elm.genre.includes ("Drama"))
const sumaDramas = (dramaMoviesRate) => dramaMoviesRate.reduce((acc, elm) =>  acc + elm.rate, 0) / dramaMoviesRate.length */

function dramaMoviesRate(movies){
    
    const dramaMoviesRate = movies.filter(elm => elm.genre.includes ("Drama"))
    
    const sumaDramas = dramaMoviesRate.reduce((acc, elm) =>  acc + elm.rate, 0)

    if(dramaMoviesRate.length === 0){
        return 0
    }
    
    return Number((sumaDramas / dramaMoviesRate.length).toFixed(2))
}

console.log(dramaMoviesRate)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order) EL 5 NO FUE DIFICIL LA BUSQUEDA PARA RESOLVERLO
//const orderByYear = (movies) => [...movies].sort((a, b) => a.year - b.year)

function orderByYear(movies){
    
        const orderByYear = [...movies].sort((a, b) => {
            if(a.year > b.year){
                return  1
            }
            else if(a.year < b.year){
                return -1
            }
            else if(a.year === b.year){
                if(a.title > b.title){
                    return 1
                }
                else if(a.title < b.title){
                    return -1
                }
                return 0
            }

return orderByYear
}) 
    
    return orderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    
    const filmsTitle = movies.map(elm => elm.title)
    const orderByTitle = filmsTitle.sort()
    const firstTwenty = orderByTitle.slice(0, 20)    
    
    return firstTwenty
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
