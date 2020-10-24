const cl = (...p)=>console.log(...p)

const movies2 = [
	{
		title: "The Shawshank Redemption",
		year: 1994,
		director: "The Frank Darabont",
		duration: "2h 22min",
		genre: ["Crime", "Drama"],
		//rate: 9.3,
	},
	{
		title: "The Godfather",
		year: 1972,
		director: "Francis Ford Coppola",
		duration: "2h 55min", 
		genre: ["Crime", "Drama"],
		rate: 9.2,
	},
	{
		title: "The Godfather: Part II",
		year: 1974,
		director: "Francis Ford Coppola",
		duration: "3h 22min",
		genre: ["Crime", "Drama"],
		rate: 9,
	},
	{
		title: "The Dark Knight",
		year: 2008,
		director: "Christopher Nolan",
		duration: "2h 32min",
		genre: ["Action", "Crime", "Drama", "Thriller"],
		rate: 9,
	},
	{
		title: "12 Angry Men",
		year: 1957,
		director: "Sidney Lumet",
		duration: "1h 36min",
		genre: ["Crime", "Drama"],
		rate: 8.9,
	},
	{
		title: 'Schindler"s List',
		year: 1993,
		director: "Steven Spielberg",
		duration: "3h 15min",
		genre: ["Biography", "Drama", "History"],
		rate: 8.9,
	},
	{
		title: "Pulp Fiction",
		year: 1993,
		director: "Quentin Tarantino",
		duration: "2h 34min",
		genre: ["Crime", "Drama"],
		rate: 8.9,
	},
	{
		title: "The Lord of the Rings: The Return of the King",
		year: 2003,
		director: "Peter Jackson",
		duration: "3h 21min",
		genre: ["Adventure", "Drama", "Fantasy"],
		rate: 8.9,
	},
	{
		title: "Il buono, il brutto, il cattivo",
		year: 1966,
		director: "Sergio Leone",
		duration: "3h 2min",
		genre: ["Western"],
		rate: 8.9,
	},
	{
		title: "Fight Club",
		year: 1999,
		director: "David Fincher",
		duration: "2h 19min",
		genre: ["Drama"],
		rate: 8.8,
	},
	{
		title: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
		director: "Peter Jackson",
		duration: "2h 58min",
		genre: ["Adventure", "Drama", "Fantasy"],
		rate: 8.8,
	},
	{
		title: "Forrest Gump",
		year: 1994,
		director: "Robert Zemeckis",
		duration: "2h 22min",
		genre: ["Comedy", "Drama", "Romance"],
		rate: 8.8,
	},
	{
		title: "Star Wars: Episode V - The Empire Strikes Back",
		year: 1980,
		director: "Irvin Kershner",
		duration: "2h", //"2h 2min"
		genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
		rate: 8.8,
	},
];

// Iteration 1: All directors? - Get the array of all directors.
// ### Iteration 1: All directors

// We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument and returns a new (_mapped_ array).



  function getAllDirectors(movies) {
   return [...movies].map( e => e.director)
	}
  //cl(getAllDirectors(movies2));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


  /// bonus 1.1
 function getAllDirectorsClean(movies) {
		const directClean = [];
		[...movies].map((e) => directClean.push(directClean.indexOf(e.director) === -1 ? e.director : directClean.pop()));
		return directClean;
 }

 //cl(getAllDirectorsClean(movies2));



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// **[Steven Spielberg]and he has some really awesome DRAMA movies that are on our list, but we want to know how many of them are there.

// Go ahead and create a `howManyMovies()` function that receives an array as a parameter and `filter` :eyes: the array so we can have only the **drama** movies where **Steven Spielberg** is the director.

function howManyMovies(array){
  return array.length ? [...array].filter( el =>  el.director == "Steven Spielberg" && el.genre.includes("Drama")).length : 0
}  

//cl(howManyMovies(movies2));


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
      
        
function ratesAverage(array){
 for (elem of array) {
  if ("rate" in elem === false) elem.rate = 0;
 } 
return array.length ? Number((array.reduce((acc, el) => acc + Number(el.rate), 0) / array.length).toFixed(2)): 0
 

}
	

// cl("rate" in movies2[4]);
 //cl(ratesAverage(movies2));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
  return ratesAverage([...array].filter((el) => el.genre.includes("Drama")))	
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//// function further down to ignore "THE"  while  sorting
function orderByYear(arr) {
	if(arr.length){
	return arrayObjSortIgnoreWord1(arr, "title", "the").sort((a, b) => a.year - b.year)
	} else {
		return 0
	}
}

//cl(orderByYear(movies2))

/// to pass jasmine
function orderByYear(arr) {
  if(arr.length){
  return arr.sort((a, b) => {
    if(a.year === b.year){
    return a.title < b.title ? -1 : 1
    } else {
    return a.year - b.year
    }
  })
  } else {
    return 0
  }
}

//cl(orderByYear(movies2))


///// **** order alphabetically ignoring "THE" at begin of title ****
////~~~~ REUSABLE but can only do  1 word any property...trying to refactor multiple words 
function arrayObjSortIgnoreWord1(array, property, ignore) {
  let count = ignore.length + 1
  ignore = ignore[0].toUpperCase() + ignore.substr(1)
  let newArray = [...array].sort((a,b)=>{
       if(a[property].substr(0,count)=== `${ignore} ` && b[property].substr(0,count)=== `${ignore} `)
         return a[property].substr(count).localeCompare(b[property].substr(count))
       
       if(a[property].substr(0,count)=== `${ignore} `)
         return a[property].substr(count).localeCompare(b[property]) 
          
       if(b[property].substr(0,count)=== `${ignore} `)
         return a[property].localeCompare(b[property].substr(count))
      
        return a[property].localeCompare(b[property])   
     }) 
   return newArray//.map(e => e[property]) 
 }  

//cl(arrayObjSortIgnoreWord1(movies2, "title", "the")) 
//cl(arrayObjAlphabetically(movies2, "title", "a")) 



////~~~HARDCODED~~~~
function orderTitles(array) {
	let titlesArr =  [...array].sort((a,b)=>{
			if(a.title.substr(0,4)=== "The " && b.title.substr(0,4)=== "The ")
				return a.title.substr(4).localeCompare(b.title.substr(4))
			if(a.title.substr(0,4)=== "The ")
				 return a.title.substr(4).localeCompare(b.title) 
			if(b.title.substr(0,4)=== "The ")
			 return a.title.localeCompare(b.title.substr(4))
			return a.title.localeCompare(b.title)
		}) 
	return titlesArr.map(e => e.title) 
}  

//cl(orderTitles(movies2))
	
								/// OR ///
// **startsWith() works in repl ..but not VSC or JAsmine. app how to use all JS versions???
function orderByYear1(array) {
  let titSort = array.sort((a, b) => {
  for(el of array)
    if( el.title.startsWith("The ")){ 
      el.title2 = el.title.substr(4)  
    } else {
      el.title2 =  el.title
    }
    return a.title2 < b.title2 ? -1 : 1
   })

  for (elem of array) 
    if ("title2" in elem === true) delete elem.title2

	return array.length ? titSort.sort((a, b) => a.year - b.year) : 0;
}

//cl(orderByYear1(movies2));




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// to pass  jasmine
function orderAlphabetically(array){
  return [...array].sort((a, b) => a.title < b.title ? -1 : 1).splice(0,20).map(e => e.title)
  
}

///  ignore "The" beginning of movie to sort 
function orderAlphabetically(array){
  return arrayObjSortIgnoreWord1(array, "title", "the").splice(0,20).map(e => e.title)
}

cl(orderAlphabetically(movies2))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//// WORKS in console and repl.it but not passing any JASMINE tests
function turnHoursToMinutes(array){
  if(Array.isArray(array)=== false) return "invalid entry"
  if(array.length === 0) return 0
  newArray = [...array]
  for(el of newArray){
    if(!el.duration) return "invalid array"  
    let durS = el.duration.split(" ")
    if(durS[0].includes("h") && durS[1]){
      let durSh = durS.join(" ").split("h")
      let hour2Min = durSh[0] * 60 + parseInt(durSh[1]) + "min"
      el.duration = hour2Min
    } else if(durS[0].includes("h")){
      let durSm = durS.join("").split("h").join("").split(/\s/).join("")
      el.duration = durSm * 60 + "min" 
    } else {
      el.duration
    }
  }
  return newArray
}



//console.log(turnHoursToMinutes(movies2))

// cl(turnHoursToMinutes())
// cl(turnHoursToMinutes(["duration"]))
// cl(turnHoursToMinutes(["hey"]))
// cl(turnHoursToMinutes(5))


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
