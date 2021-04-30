// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    const result = array.map(element => element.director);
    //console.log(result);
    return result;
}
getAllDirectors(movies);
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    switch (array.length) {
        case 0:
            return 0
            break
        default:
            //No se le pasa a function por parametro el array, ya que ese trabajo ya lo hace el metodo al hacer: array.filter
            //Primero guardamos en un array todas las de Spielberg
            //  const Spielberg = array.filter(element => element.director == "Steven Spielberg");
            //Devolvemos el valor del ternario
            //Condición Truthy: Si no hay pelis de Spielberg en el array devuelve cero (Spileberg==false)
            //Condición Falsy: Si hay pelis de Spielberg, comprobar las de drama de Spielberg: Operador ternario anidado
            //Si las hay >> condicion Truthy: devuelve 2. Si no las hay >> condicion Falsy: devuelve 1
            //    return Spielberg == false ? 0 : Spielberg.filter(element => element.genre.filter(element => element == "Drama")) ? 2 : 1;
            // if (drama == true && array.filter(element => element.director == "Steven Spielberg") {
            //     return 2
            // } else {
            //     return 1;
            // }
            //Si no hay ningun elemento que cumpla las condiciones (director y genero) filter será false.
            // return drama== false ? 0 : movies.map(element => element.title);
            const moviesSpielberg = array.filter(element => {
                if (element.director === "Steven Spielberg") {
                    return true
                } return false

            })
            const moviesDrama = moviesSpielberg.filter(movie => {
                for (let i = 0; i < movie.genre.length; i++) {
                    if (movie.genre[i] === "Drama") {
                        return true;
                    }
                    //Si no encuentra drama iterando sera que nionguna lo es, por tanrto devuelve fALSE

                } return false

            })
            return moviesDrama.length
        // //Si no hay ningun elemento que cumpla las condiciones (director y genero) filter será false.
        // return movies == false ? 0 : movies.map(element => element.title);

        //Si filter devuelve false devolvemos la respuesta del operador ternario ; cero. Si es true pasamos el array con de titulos
        // return movies == false ? 0 : movies.map(element => element.title);
        //console.log(result3);
        //}
    }
}

// const ratesAverage = () => { }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length === 0) {
        return 0
    } else {
        //El resultado de la media: suma puntuaciones/numeros peliculas, debe redondearse a 2 decimales con el metodo toFixed()
        //Si el objeto no tiene propiedad devuelve "undefined". Por tanto: acc + undefined = NaN
        const result = array.reduce((acc, element) => {
            if (!element.rate) {
                return acc
            } else {
                return acc + element.rate
            }

        }, 0) / array.length;
    }
    return result.toFixed(2);

}

ratesAverage(movies);

    // Iteration 4: Drama movies - Get the average of Drama Movies

    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

    // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
