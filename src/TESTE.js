

let array = [
  {
    director: `Pedro`,
    score: 15
  },
  {
    director: `Renata`,
    score: 10
  },
  {
    director: `Lola`,
    score: 20
  }
] 

function getAllDirectors(anyarray) {
  for ( let index = 0; index < anyarray.length; index =+ 1)
  return anyarray[index].director;
  }

console.log(getAllDirectors(array))