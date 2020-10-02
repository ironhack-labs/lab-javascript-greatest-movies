// * Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
  let allDirectors = arr.map(function (movies) {
    return movies.director;
  });

  return allDirectors;
}

// TODO - Explicación Iteration 1:
// 1- Queremos acceder a todos los directores (dentro de objetos) de la array movies.
// 2- Usamos .map() porque devolvera una nueva array con la informacion que queramos en su interior.
// 3- Creamos una nueva variable que contendra el map
// 4- Dentro de map pasaremos un array, en este caso movies, para luego en  return marcar que queremos la  variable "director" del objeto.
// 5- Al final solo llamamos de nuevo la variable

// ! _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// ? No funciona

function howManyMovies(movies) {
  const dramaArr = movies.filter((spielbergDrama) => {
    return (
      spielbergDrama.director === "Steven Spielberg" &&
      spielbergDrama.genre.includes("Drama")
    );
  });
  return dramaArr.length;
}

// ? Funciona en consola

// let getAllDirectors = movies.map(function (directors) {
//   return directors.director;
// });

// console.log(getAllDirectors);

// let directorsUnique = getAllDirectors.filter(function (item, index) {
//   return getAllDirectors.indexOf(item) >= index;
// });

// console.log(directorsUnique);

// * Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let total = 0;
  movies.filter(function (movie) {
    if (movie.director === "Steven Spielberg") {
      if (movie.genre.includes("Drama")) {
        total++;
      }
    }
  });
  return total;
}

// TODO - Explicación Iteration 2:
// 1- Queremos saber cuantas peliculas de Steven hay en el genero del drama
// 2- Primero de todo, como que vamos a CONTAR, creamos una variable con un valor de 0 llamada total.
// 3- Usamos el metodo de .filter() y le pasamos una funcción con movie como array.
// 4- Para saber si este parametro se cumple, usaremos un condicional para detectar el director y su genero.
// 5- Como que drama es un valor donde podemos encontrar más de un genero, usaremos el motodo .includes() con la string 'Drama' en su interior
// 6- una vez las dos condiciones están escritas, hay que sumar al total ++ cada vez que encuentre esos parametros.
// 7- Como siempre, devolvemos la nueva variable con return.

// ! Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let sum = movies.reduce(function (acc, rating) {
    if (typeof rating.rate === "number") {
      return acc + rating.rate;
    } else {
      return acc + 0;
    }
  }, 0);
  return Math.round((sum / movies.length) * 100) / 100;
}

// TODO - Explicación Iteration 3:
// 1- Queremos una función que nos de el avg rate de todas las peliculas que hay en el array de objetos
// 2- Primero con el if de siempre, devolveremos 0 ya que Jasmine lo pide (lo vimos el dia anterior)
// 3- Creamos una variable para la suma. Antes de hacer el avg, que es la suma / movies.length, queremos sumar todos los rates.
// 4- Dicha variable tendra el metodo .reduce() para hacer la suma como ya hemos visto en otras ocasiones.
// 5- Usaremos un condicional para detectar si dentro del valor rate existe un numero, de ser asi, sumaremos ese numero al acumulado. De no ser asi, le sumaremos 0, lo que nos dejará igual.
// 6- Por último, el return conllevará un Math.round de la variable sum dividio entre la longitud del parametro movies, multiplicado por 100 y dividido por lo mismo para asi, tener 2 decimales en el ratesAverage.

// * Iteration 4: Drama movies - Get the average of Drama Movies
// ! ES5
// function dramaMoviesRate(movies) {
//   let drama = movies.filter(function (movie) {
//     movie.genre.includes("Drama");
//   });
//   return ratesAverage(drama);
// }

// ! ES6

function dramaMoviesRate(movies) {
  let drama = movies.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(drama);
}

// TODO - Explicación Iteration 4:
// 1- Queremos una función que calcule el avg rate pero SOLO de las peliculas "Drama".
// 2- Creamos una nueva variable "Drama" para dentro de ella usar el .filter() y coger solo las peliculas con este genero.
// 3- Volvemos a usar el metodo .includes() para encontrar en genre el valor de "Drama".
// 4- Al final, devolveremos (return) la funcción anteriormente creada (ratesAverage), la reusaremos, pero en su interior colocaremos la nueva variable (drama) que hemos creado el cual filtra el genero.

// * Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// * Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// ! BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// ! BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
