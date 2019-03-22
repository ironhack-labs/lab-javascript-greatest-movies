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

function bestYearAvg(a) {
  let years = a.map(x => x.year);
  let uniqueY = [...new Set(years)];
  let yearAvg = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i].year === a[0].year) {
      yearAvg.push(Number(a[i].rate));
    }
  }
  return yearAvg.reduce((a, b) => a + b) / yearAvg.length;
}
console.log(bestYearAvg(movies));
