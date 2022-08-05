// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const occurences = moviesArray.reduce((agg, val) => {
    if (agg.indexOf(val) === -1) {
      agg.push(val.director);
    }
    return agg;
  }, []);
  //console.log(occurences);
  return occurences;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let searchDirector = "Steven Spielberg";
  let searchGenre = "Drama";

  if (!moviesArray.length) return 0;
  const arrDirector = moviesArray.filter(({ director }) =>
    director.includes(searchDirector)
  );
  //console.log(arrDirector);
  const arrGenre = arrDirector.filter(({ genre }) =>
    genre.includes(searchGenre)
  );
  //console.log(arrGenre);
  return arrGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let aux, avg;
  const sum = moviesArray.reduce((previousValue, currentValue) => {
    //console.log(currentValue.score);
    if (!currentValue.score) {
      aux = 0;
    } else aux = currentValue.score;
    return previousValue + aux;
  }, 0);
  avg = sum / moviesArray.length;
  //console.log(avg.toFixed(2));
  return +avg.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) return 0;
  let searchGenre = "Drama";
  const arrGenre = moviesArray.filter(({ genre }) =>
    genre.includes(searchGenre)
  );
  return scoresAverage(arrGenre);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const OrderYearAsc = moviesArray
    .filter((val) => val)
    .sort(
      (a, b) =>
        a.year < b.year ? -1 : a.year > b.year ? 1 : a.title > b.title ? 1 : -1

      // {
      //   if (a.year < b.year) return -1; //  1 desc, -1 ASC
      //   if (a.year > b.year) return 1; //  -1 desc,  1 ASC
      //   if (a.year === b.year) {
      //     let newA = a.title.toLowerCase();
      //     let newB = b.title.toLowerCase();
      //     if (newA > newB) return 1;
      //     else return -1;
      //   }
      // }
    );
  //
  return OrderYearAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const OrderTitleAsc = moviesArray
    .sort(
      (a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
      // {
      //   let newA = a.title.toLowerCase();
      //   let newB = b.title.toLowerCase();
      //   if (newA > newB) return 1;
      //   if (newA < newB) return -1;
      //   return 0;
      // }
    )
    .filter((_, index) => index < 20)
    .map((val) => val.title);
  //   console.log(OrderTitleAsc);
  return OrderTitleAsc;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //const result = moviesArray.filter((val) => val);
  //result = moviesArray.map((val) => [...val]);
  const result = JSON.parse(JSON.stringify(moviesArray));
  //const result = [...moviesArray];
  const result2 = result.map((val) => {
    let duration = val.duration.split(" ").reduce((prev, curr) => {
      let aux = 0;
      if (curr.indexOf("h") > -1) aux = parseInt(curr.replace("h")) * 60;
      if (curr.indexOf("min") > -1) aux = parseInt(curr.replace("min"));
      return prev + aux;
    }, 0);
    val.duration = duration;
    return val;
  });
  return result2;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function selectFewerProps(show) {
  const { year, score } = show;
  return { year, score };
}

function groupByYear(array) {
  return array.reduce((obj, value) => {

    if (!obj[value.year]) {
      obj[value.year] = [value.score];
    }
    else {
      obj[value.year].push(value.score);
    }
    return obj;
  }, {})
}

function groupBy(array, key) {
  return Array.from(
      array.reduce((m, o) => {
          var temp = m.get(o[key]);
          if (!temp) {
              m.set(o[key], temp = {});
          }
          Object.entries(o).forEach(([k, v]) => {
              if (k === key) {
                  return;
              }
              temp[k] = temp[k]  || { sum: 0, count: 0 };
              temp[k].sum += v;
              temp[k].count++;
          });
          return m;
      }, new Map),
      ([k, v]) => Object.assign({ [key]: k }, ...Object.entries(v).map(([l, { sum, count }]) => ({ [l]: +(sum / count).toFixed(1) })))
  );
}

function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;
  const dataSet = JSON.parse(JSON.stringify(orderByYear(moviesArray)));
  const d1 = dataSet.map(selectFewerProps);

  // const yearScores = groupByYear(d1);
  const yearScores2 = groupBy(d1,'year');
  console.log(yearScores2);
  yearScores2.sort( (a, b) =>  b.score - a.score //? 1 : -1
  );
//? -1 : (a.score - b.score ? 1 : (a.year - b.year ? 1 : -1 ))
  // console.log(yearScores);
  // console.log(typeof (yearScores));
  // console.log(yearScores['1978']);

   console.log(`The best year was ${yearScores2[0].year} with an average score of ${yearScores2[0].score}`);
  // console.log(typeof (yearScores2));
  // console.log(yearScores2['1978']);


  return `The best year was ${yearScores2[0].year} with an average score of ${yearScores2[0].score}`;

}
