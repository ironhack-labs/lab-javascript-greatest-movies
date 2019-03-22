var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1921',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1921',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather 2',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  }
];

// function bestYearAvg(a) {
//   function order(a, b) {
//     if (a.year < b.year) return -1;
//     if (a.year > b.year) return 1;
//     if (a.year === b.duration) {
//     }
//     return 0;
//   }
//   return a.sort(order);
//   let newArr = a.map(x =>  )
// }
// console.log(bestYearAvg(movies));

function bestYearAvg(arr) {
  let years = arr.map(x => x.year);
  let unique = [...new Set(years)];

  let long = unique.length;

  let rates = [];
  for (let i = 0; i < long; i++) {
    rates.push(0);
  }

  let averages = [];
  for (let x = 0; x < long; x++) {
    averages.push(0);
  }

  for (let z = 0; z < arr.length; z++) {
    for (let y = 0; y < unique.length; y++) {
      if (arr[z].year == unique[y]) {
        rates[y] += Number(arr[z].rate);
        if (averages[y] == 0) {
          averages[y] += Number(arr[z].rate);
        } else {
          averages[y] += Number(arr[z].rate) / 2;
        }
      }
    }
  }

  let i = averages.indexOf(Math.max(...averages));
  return unique[i];
}
console.log(bestYearAvg(movies));
