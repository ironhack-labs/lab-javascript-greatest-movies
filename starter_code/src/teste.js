var arr2 = [
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
      title: 'Il buono, il brutto, il cattivo',
      year: '1966',
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      rate: '8.9'
    },
    {
      title: 'Schindler\'s List',
      year: '1993',
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      rate: '8.9'
    }
]

// Order by title and print the first 20 titles


function howManyMovies(arr){
  var arr2 =  arr.filter(function(arr3) { 
   return arr3.genre.includes('Drama')});
      return arr2;
  }
  console.log(howManyMovies(movies));