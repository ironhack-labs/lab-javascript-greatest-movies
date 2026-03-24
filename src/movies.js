// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    // retornamos directamente un nuevo array con map filtrando por .director
    // el map recorre todo el array devuelve un array nuevo con solo el director de cada película

    return moviesArray.map(moviesArray => moviesArray.director);

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    // .filter() para filtrar por pelicula y genero, .toLowerCase() para compararlo en minúsculas
    // me piden un número, entonces añado .length para que devuelva la cantidad de elementos (longitus del array)
    // y usamos .includes() para saber si dentro de genre está "Drama"
    return moviesArray.filter(pelicula => pelicula.director.toLowerCase() === "steven spielberg" && 
    pelicula.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // primero manejar entrada de array vacío
    if (!moviesArray.length) return 0;

    // con reduce obtenemos la suma de todos los score y controlamos si entrega un score vacío
    // con ()=>..... += (pelicula.score || 0), 0
    let scoreAvg = moviesArray.reduce((acc, pelicula) => acc += (pelicula.score || 0), 0)/moviesArray.length;
    return Math.round(scoreAvg * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    // primero filtro las películas por genre "Drama"
    const dramaPeliculas = moviesArray.filter(pelicula => pelicula.genre.includes("Drama"));

    // comprobamos si dramaPeliculas está vacía, entonces retornamos 0
    if (!dramaPeliculas.length) return 0;

    //con reduce() devolvemos el avg de las películas de Drama filtradas arriba
    let avgDrama = dramaPeliculas.reduce((acc, pelicula) => acc += (pelicula.score || 0), 0) / dramaPeliculas.length;

    return Math.round(avgDrama * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //Ordenamos sin modificar el original, usando .sort y [...] para no modificar el original
    // y manejamos el orden con a.year - b.year para ordenarlo de menor a mayor
    // tambien se puede usar .localeCompare() para ordenar por título cuando tienen el mismo año
    const arrayOrdenado = [...moviesArray].sort((a,b)=> {
        if (a.year !== b.year){
            return a.year - b.year; // aquí ordenamos por año
        }
        return a.title.localeCompare(b.title); // aqui si encuentra el mismo año ordena por su tittle
    });
    return arrayOrdenado;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // ordeno el array por el tittle
    const newArray = [...moviesArray].sort((a,b)=> a.title.localeCompare(b.title));
    // creo un array vacío para meter solo los tittle del newArray
    const resultArray = [];

    // hago un for con dos condiciones i < 20 (hasta 20 titulos) y i < longitud del array, por si el array es más pequeño de 20
    // itroduzco solo los titles .push(newArray[i].title)
    for(let i = 0;i < newArray.length && i < 20; i++) resultArray.push(newArray[i].title); 
    
    return resultArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    // tenemos que usar .map() para no modificar el array original, for no se podría usar
    // añadir una función un poco larga
    const arrayMinutos = moviesArray.map(pelicula => {

        let tiempo = pelicula.duration; // separamos duration para manejarlo

        let horas = tiempo.includes("h") ? tiempo.split("h")[0] : 0; // separamos horas si hay horas, sino 0 en horas
        let minutos = tiempo.includes("min") ? tiempo.split("h")[1] : 0; // separamos minutos sino 0 minutos

        return {...pelicula, // retornamos pelicula,  copia todas las propiedades y.. 
            duration: parseInt(horas)*60 + parseInt(minutos) // duration: en minutos , convertidos a entero y por minutos
         };
        });

    return arrayMinutos; // devolvemos un array nuevo completo solo con duration modificado

    
    }

    



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
    // devuelvo null si recibe un arrayy vacío
    if (!moviesArray.length) return null; 

    // Creamos un array de años únicos [...] es para no afectar al original
    // new Set() para obtener solo los años únicos del array de películas
  const years = [...new Set(moviesArray.map(movie => movie.year))];

  // Calculamos el promedio de cada año
  const avgByYear = years.map(year => {
    // Filtramos solo las películas de ese año
    const moviesOfYear = moviesArray.filter(movie => movie.year === year);

    // Calculamos la suma de scores
    const sum = moviesOfYear.reduce((acc, movie) => acc + movie.score, 0);

    // Calculamos el promedio y redondeamos a 2 decimales
    const avg = Math.round((sum / moviesOfYear.length) * 100) / 100;

    // Devolvemos un objeto con el año y su promedio
    return { year, avgScore: avg };
  });

  // Ordenamos los años de menor a mayor
  avgByYear.sort((a, b) => a.year - b.year);

  // Buscamos el año con el mayor promedio
  let best = avgByYear[0];
  avgByYear.forEach(obj => {
    if (obj.avgScore > best.avgScore) {
      best = obj;
    }
  });

  return `The best year was ${best.year} with an average score of ${best.avgScore}`;
}
    

