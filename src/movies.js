// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 const directores = moviesArray.map((movie)=>{
		return movie.director;
	})
	console.log(directores);
  return directores;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG diresct?
function howManyMovies(moviesArray) {
	
	let numpelis= moviesArray.filter((peli)=>
		peli.director==='Steven Spielberg' && peli.genre.includes('Drama'));
	Steven=numpelis.length;
	return Steven;
	}
	
	howManyMovies(movies);
	
	
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if(moviesArray.length==0){
	return 0;
}

	const suma = moviesArray.reduce(function(sum,movies){
		return sum + movies.score;
	},0);

	let prom = suma/moviesArray.length;
	return (Number(prom.toFixed(2)));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  let drama=arr.filter((peli)=>
    peli.genre.includes('Drama'));
    if(drama.length==0){
      return 0
    }
  
  console.log('Este es el drama:',drama)
  let promedioDrama=drama.reduce((acc,av)=>{
    let points= acc+=av.score
  return points
    
  },0);
   let average=(promedioDrama/(drama.length)).toFixed(2)
   console.log('Promedio drama',average)
  return Number(average)
    } 
    dramaMoviesScore(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let byDate=[...moviesArray]
  let byDateAcomodado= byDate.sort((a,b)=>{
   return a.year-b.year
 });
 let byName=byDateAcomodado.sort((a,b)=>{
  let ordenados=a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  return ordenados
 });
 
 return byName
 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr=[...moviesArray]
  let titless=[];
  let byletter=newArr.sort((a,b)=>{
   let order=a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    return order
  });
  console.log(byletter);
  if(byletter.length<=20){
   byletter.forEach((arr)=>{
     console.log(arr.title)
    titless.push(arr.title)
     //console.log('Estos son titulos',titulos)
     return titless
   })
  return titless
  } else if(byletter.length>20){
    for(let i=0; i<=19;i++){
    titless.push(byletter[i].title)
    }
    return titless
  }
 
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
	return [];
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
	if(moviesArray.length==0){
		return null;
	}
}
