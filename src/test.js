
// const movies = require("./data");
// const testArr = [
//     {
//       title: 'Paths of Glory',
//       year: 1957,
//       director: 'Stanley Kubrick',
//       duration: '1h 28min',
//       genre: ['Drama', 'War'],
//       score: 8.4
//     },
//     {
//       title: 'Django Unchained',
//       year: 2012,
//       director: 'Quentin Tarantino',
//       duration: '2h 45min',
//       genre: ['Drama', 'Western'],
//       score: 8.4
//     }
//   ];
  

// const directorsFilter = movies.map((movies) => {
//     return movies.title; 
//   });

// console.log(movies.length);

let array = [
  [1, 2, 3],
  [4, 3, 8],
  [5, 12, 9]
];

function maxTwoDimArray(matrix) {
  let num = 0;
  for (i=0; i < matrix.length; i++)
    for (j=0; j < matrix[i].length; j++) {    
      num = Math.max(num, matrix[i][j]);      
    }
  return num;
}

console.log(maxTwoDimArray(array));