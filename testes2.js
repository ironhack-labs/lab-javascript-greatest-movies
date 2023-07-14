const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
      }
]

//console.log(turnHoursToMinutes(movies));

let array = [1,2,3,4,5,6,7]

for(let i = 0; i < array.length; i++){
    if(i === 2){
        continue;
    }else{
        console.log(array[i])
    }
    
}