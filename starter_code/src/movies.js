/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
  const newArr = arr
    .map(e => e)
    .sort((a, b) => {
      if (a.year - b.year === 0) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  return newArr;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
  const newArr = arr.filter(e => {
    return e.director === 'Steven Spielberg' && e.genre.includes('Drama');
  });
  console.log(newArr);
  // console.log(arr)
  return newArr.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr => {
  const newArr = arr
    .map(e => e.title)
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .filter((e, i) => {
      return i < 20;
    });

  // newArr.forEach((e, i) => {
  //   console.log(e)
  //   console.log(i)
  // })
  return newArr;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = objectArr => {
  if (objectArr.length === 0) {
    return 0;
  }
  const total = objectArr
    .filter(e => typeof e.rate !== 'undefined')
    .reduce((acc, e) => acc + e.rate, 0);
  const avg = total / objectArr.length;
  const roundedAvg = Math.round(avg * 100) / 100;
  return roundedAvg;
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
  if (arr.length === 0) {
    return 0;
  }
  const includesDramaArr = arr.filter(e => {
    return typeof e.rate !== 'undefined' && e.genre.includes('Drama');
  });
  if (includesDramaArr.length === 0) {
    return 0;
  }
  const total = includesDramaArr.reduce((acc, e) => acc + e.rate, 0);
  console.log(total);
  console.log(arr);
  const aver = total / includesDramaArr.length;
  const AverRounded = Math.round(aver * 100) / 100;
  // console.log(arr.length);
  // console.log(total);
  // console.log(AverRounded);
  return AverRounded;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = arr => {
  const parseTimeString = string => {
    // condition to parse string with minutes only and without "min".
    if (typeof parseInt(string) === 'number' && string.indexOf('h') === -1) {
      return parseInt(string);
    }

    const hStringIndex = string.indexOf('h');
    const mStringIndex = string.indexOf('min');
    const hour = parseInt(string.slice(0, hStringIndex)) || 0;
    const min = parseInt(string.slice(hStringIndex + 2, mStringIndex)) || 0;
    return hour * 60 + min;
  };

  const newArr = arr.map(e => {
    const { ...eCopy } = e; // crie um novo objeto e salve cada propriedade do element objeto nele.
    eCopy.duration = parseTimeString(eCopy.duration);
    return eCopy;
  });
  return newArr;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = objectArr => {
  if (objectArr.length === 0) {return null}
  // peguei o exemplo artigo de reduce do MDN
  const groupBy = (objectArr, property) => {
    return objectArr.reduce(
      (acc, e) => {
        const key = e[property]; // duvida: destructuring aqui para fazer uma copia? Ou a inicializacao de reduce como objeto torna isso desnecessario? testar.
        if (typeof acc[key] === 'undefined') { // o teste do mdn retorna TRUE quando acc[key] e falsy. Esse funcionou igual. Os dois retornam um type error (acc undefined) quando essa funcao nao tem return. Achei misterioso.
          acc[key] = [];
        }
        acc[key].push(e);
        return acc;
      },
      {} // objeto ja e o default. precisa ser para a chava retornar a string da agregacao.
    )};
  const groupedByYearObj = groupBy(objectArr, 'year');
  let maxAvgValue = 0;
  let maxAvgIndex = 0;
  const avgByYear = Object.keys(groupedByYearObj).map(( e, i )=> {
    const year = parseInt(e);
    const avg = ratesAverage(groupedByYearObj[e])
    if (avg > maxAvgValue) {
      maxAvgValue = avg;
      maxAvgIndex = i;
    }
    return {year, avg}
  })
  return `The best year was ${avgByYear[maxAvgIndex].year} with an average rate of ${avgByYear[maxAvgIndex].avg}`;
  }