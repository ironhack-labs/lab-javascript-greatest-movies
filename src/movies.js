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
        return Number(result.toFixed(2)); //Esto devuelve la media con 2 decimales en formato string (cadena numerica)
        //Para transformar la cadena numerica a numeros utilizamos el objeto number

    }
}

ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    if (array.length === 0) {
        return 0;
    }
    //Recorremos el array para almacenar las peliculas de genero drama 
    const drama = array.filter(movie => movie.genre.indexOf("Drama") !== -1);

    //A traves del metodo reduce() hacemos la sumatoria de las puntuaciones de las peliculas del array drama
    //Para hacer la media dividimos lo anterior entre la longitud del array drama, de ahi que sea necesario haberlo hecho
    //en 2 pasos, para ahora poder acceder a la longitud del array de peliculas de drama
    //OPCION A
    return drama.length === 0 ? 0 : Number((drama.reduce((acc, movie) => { return movie.rate + acc }, 0) / drama.length).toFixed(2))

    //OPCION B
    // if (drama.length === 0) {
    //     return 0
    // } else {
    //     return Number((drama.reduce((acc, movie) => { return movie.rate + acc }, 0) / drama.length).toFixed(2));
    // }
}
dramaMoviesRate(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    const ordered = [...array];
    return ordered.sort((a, b) => {
        // a.year === b.year? a.title.localeCompare(b.title):a.year - b.year
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        } else {
            return a.year - b.year
        }
    })

}
orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    const ordered2 = [...array];
    ordered2.sort((a, b) => {
        return a.title.localeCompare(b.title)
        if (ordered2.length > 20) {
            ordered2.slice(0, 20)
            // for (let i = 0; i < 20; i++) {
            return a.title.localeCompare(b.title)
            // }
        }
    })
    return ordered2.map(movie => movie.title);
}
orderAlphabetically(movies);
    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

    // BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
