var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  }
];

function ratesAverage(a) {
  let allRate = 0;
  a.forEach(movie => {
    if (movie.rate == '') {
      movie.rate = null;
    } else {
      return (allRate += parseFloat(movie.rate));
    }
  });
  return parseFloat((allRate / a.length).toFixed(2));
}
function bestYearAvg(a) {
  if (!a.length) return undefined;

  const years = a
    .map(m => m.year)
    .sort()
    .filter((item, i, a) => a.indexOf(item) === i);

  let bestYearAvg = 0;
  let yearAvg = 0;
  let year = '';

  for (let i in years) {
    let rate = a.filter(m => m.year == years[i]).map(m => parseFloat(m.rate));
    let sum = rate.reduce((a, b) => a + b);
    yearAvg = parseFloat(sum / rate.length);

    if (yearAvg > bestYearAvg) {
      bestYearAvg = yearAvg;
      year = years[i];
    }
  }
  return `The best year was ${year} with an average rate of ${bestYearAvg}`;
}
