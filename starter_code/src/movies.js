/* eslint no-restricted-globals: 'off' */

// --- Iteration 1: Ordering by year - Order by year, ascending (in growing order)

// let movies = [{
//     "title": "The Shawshank Redemption",
//     "year": 1994,
//     "director": "Frank Darabont",
//     "duration": "2h 22min",
// }, 
// {
//     "title": "A Godfather",
//     "year": 1972,
//     "director": "Francis Ford Coppola",
//     "duration": "2h 55min",
//   }
// ];


// const orderByYear = orderByYear.map(theMovie => theMovie);
// // const newArr = numArr.map((num, index, originalArray) => {
// //     console.log(num, index, originalArray);
// //     return num * 2;
// // });



// const orderByYear = (...args) => {
//     console.log(args)
//    return console.log(args.sort((a, b) => a.year - b.year))
//  };

//  orderByYear(args)


// const orderByYear = array => {
//     let newArr = array.slice();

//    return newArr.sort((a, b) => {
//        a.year - b.year;)
        
//        if (a.year === b.year) {
//         newArr.a.locale;
//     } 

// }};

const orderByYear = array => {
    let newArr = array.slice();

   return newArr.sort((a, b) => {
    if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return a.title.localeCompare(b.title)
    })
}



console.log(orderByYear(movies))
 orderByYear(movies)



// --- criar uma nova array a partir do map
// ---  ordenar o array por ordem alfabetica do title

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// ----  criar uma função filtrando os filmes de drama do steven spilberg usando filter

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// ultilizar o reduce

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// --- ultilizar reduce para calcular a media de pontuação de cada filme

// Iteration 5: Drama movies - Get the average of Drama Movies

// --- reultilizart o reduce acima e aplicar filter para filtrar por filmes de drama

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// --- ultilizar JSON para gerar um novo valor para um objeto
// --- transformar a propriedade do objeto duração e transformar em array ultilizando split depois transformar em numero, transforma esse numero em minutos. 
// BONUS Iteration: Best yearly rate average - Best yearly rate average