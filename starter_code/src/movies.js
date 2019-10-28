/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
//ordenar las peliculas segun el año y si tienen el mismo año ordenar por el titulo

function orderByYear(movies) {
  const newArray = [...movies]; //crea un nuevo array

  newArray.sort((a, b) => {
    if (a.year == b.year) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      if (a.title == b.title) {
        return 0;
      }
    }
    return a.year - b.year;
  });

  //En este caso no podriamos hacer un sort dentro de otro sort ya que sino deshace el primer sort que hemos hecho
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
//peliculas de drama que ha hecho Steven
function howManyMovies(movies) {
  const films = movies.filter(
    elm => elm.director == "Steven Spielberg" && elm.genre.includes("Drama")
  );

  //console.log(films)
  return films.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
//ordena alfabeticamente por el nombre las 20 primeras peliculas y las guarda en un array

function orderAlphabetically(movies) {
  const newArray = [...movies];
  newArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  let arrayTitles = [];
  newArray.forEach(elm => {
    arrayTitles.push(elm.title);
    return arrayTitles;
  });
  //console.log(arrayTitles)
  let result = arrayTitles.slice(0, 20);
  //se podria hacer con filter metiendo un index de 20
  //console.log(result)
  return result;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
//calcular la media de rate

function ratesAverage(movies) {
  if (movies.length <= 0) {
    return 0;
  }

  const newArray = [...movies];
  let arrayRate = [];
  //esto tendria que ser un filter
  newArray.forEach(elm => {
    if (elm.rate) {
      arrayRate.push(elm.rate);
      return arrayRate;
    }
  }); // me devuelve el array con todas las rates

  const suma = arrayRate.reduce((accumulator, elm) => {
    return accumulator + elm;
  });

  const average = (suma / newArray.length).toFixed(2);
  //console.log(average)

  return +average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const films = movies.filter(elm => elm.genre.includes("Drama"));
  if (films.length <= 0) {
    return 0;
  }
  let arrayRate = [];
  films.forEach(elm => {
    arrayRate.push(elm.rate);
  });
  //console.log(films)
  const suma = arrayRate.reduce((accumulator, elm) => {
    return accumulator + elm;
  });

  const average = (suma / arrayRate.length).toFixed(2);
  //console.log(average)

  return +average;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const newArray = [...movies];
  //let array = []
  newArray.map(elm2 => {
    let array = elm2.duration.split(" ");
    console.log(array);
    console.log(array.length);

    if (array.length === 1) {
      //array.join()
      console.log("me meto en el =1");
      if (array[0].includes("min")) {
        elm2.duration = +array[0].replace("min", "");
        console.log(array);
      } else {
        elm2.duration = +array[0].replace("h", "") * 60;
        console.log(array);
      }
      console.log(elm2);
    } else {
      elm2.duration =
        +array[0].replace("h", "") * 60 + +array[1].replace("min", "");
      console.log(array);
    }
  });

  console.log(array);
  //var n = str.split("d");
  //let a = elm.duration.replace("h", " ")
  //String remplazado = aRemplazar.replace("a", "");
  //return newArray

  console.log(array);
  return newArray;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg() {}
