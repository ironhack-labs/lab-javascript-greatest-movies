/* eslint no-restricted-globals: 'off' */
//const movies=require('./data')

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let movies2 = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2
  },
  {
    "title": "The Godfather: Part II",
    "year": 1974,
    "director": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": "2h 32min",
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 9
  },
  {
    "title": "12 Angry Men",
    "year": 1957,
    "director": "Sidney Lumet",
    "duration": "1h 36min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "title": "Schindler\"s List",
    "year": 1993,
    "director": "Steven Spielberg",
    "duration": "3h 15min",
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "rate": 8.9
  },
  {
    "title": "Pulp Fiction",
    "year": 1994,
    "director": "Quentin Tarantino",
    "duration": "2h 34min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.9
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "director": "Peter Jackson",
    "duration": "3h 21min",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rate": 8.9
  },
  {
    "title": "Il buono, il brutto, il cattivo",
    "year": 1966,
    "director": "Sergio Leone",
    "duration": "3h 2min",
    "genre": [
      "Western"
    ],
    "rate": 8.9
  },
  {
    "title": "Fight Club",
    "year": 1999,
    "director": "David Fincher",
    "duration": "2h 19min",
    "genre": [
      "Drama"
    ],
    "rate": 8.8
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "director": "Peter Jackson",
    "duration": "2h 58min",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rate": 8.8
  },
  {
    "title": "Forrest Gump",
    "year": 1994,
    "director": "Robert Zemeckis",
    "duration": "2h 22min",
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rate": 8.8
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "director": "Irvin Kershner",
    "duration": "2h 4min",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "rate": 8.8
  },
  {
    "title": "Inception",
    "year": 2010,
    "director": "Christopher Nolan",
    "duration": "2h 28min",
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "rate": 8.8
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "director": "Peter Jackson",
    "duration": "2h 59min",
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rate": 8.7
  },
  {
    "title": "One Flew Over the Cuckoo\"s Nest",
    "year": 1975,
    "director": "Milos Forman",
    "duration": "2h 13min",
    "genre": [
      "Drama"
    ],
    "rate": 8.7
  },
  {
    "title": "Goodfellas",
    "year": 1990,
    "director": "Martin Scorsese",
    "duration": "2h 26min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.7
  },
  {
    "title": "The Matrix",
    "year": 1999,
    "director": "Lana Wachowski",
    "duration": "2h 16min",
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "rate": 8.7
  },
  {
    "title": "Shichinin no samurai",
    "year": 1954,
    "director": "Akira Kurosawa",
    "duration": "3h 27min",
    "genre": [
      "Adventure",
      "Drama"
    ],
    "rate": 8.7
  },
  {
    "title": "Star Wars",
    "year": 1977,
    "director": "George Lucas",
    "duration": "2h 1min",
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "rate": 8.7
  },
  {
    "title": "Cidade de Deus",
    "year": 2002,
    "director": "Fernando Meirelles",
    "duration": "2h 10min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.7
  },
  {
    "title": "Se7en",
    "year": 1995,
    "director": "David Fincher",
    "duration": "2h 7min",
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rate": 8.6
  },
  {
    "title": "The Silence of the Lambs",
    "year": 1991,
    "director": "Jonathan Demme",
    "duration": "1h 58min",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 8.6
  },
  {
    "title": "It\"s a Wonderful Life",
    "year": 1946,
    "director": "Frank Capra",
    "duration": "2h 10min",
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "rate": 8.6
  },
  {
    "title": "La vita è bella",
    "year": 1997,
    "director": "Roberto Benigni",
    "duration": "1h 56min",
    "genre": [
      "Comedy",
      "Drama",
      "War"
    ],
    "rate": 8.6
  },
  {
    "title": "The Usual Suspects",
    "year": 1995,
    "director": "Bryan Singer",
    "duration": "1h 46min",
    "genre": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rate": 8.6
  },
  {
    "title": "Léon",
    "year": 1988,
    "director": "Luc Besson",
    "duration": "1h 50min",
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rate": 8.6
  },
  {
    "title": "Saving Private Ryan",
    "year": 1998,
    "director": "Steven Spielberg",
    "duration": "2h 49min",
    "genre": [
      "Drama",
      "War"
    ],
    "rate": 8.6
  },
  {
    "title": "Sen to Chihiro no kamikakushi",
    "year": 2001,
    "director": "Hayao Miyazaki",
    "duration": "2h 5min",
    "genre": [
      "Animation",
      "Adventure",
      "Family",
      "Fantasy",
      "Mystery"
    ],
    "rate": 8.6
  },
  {
    "title": "American History X",
    "year": 1998,
    "director": "Tony Kaye",
    "duration": "1h 59min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 8.5
  },
  {
    "title": "C\"era una volta il West",
    "year": 1968,
    "director": "Sergio Leone",
    "duration": "2h 44min",
    "genre": [
      "Western"
    ],
    "rate": 8.6
  }];

  let movies3 = [
    {
      "title": "The Shawshank Redemption - 2",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Shawshank Redemption - 2",
      "year": 1995,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },{
      "title": "The Shawshank Redemption - 0",
      "year": 1993,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    }];

function orderByYear(array){
  
    let newArrayYear = JSON.parse(JSON.stringify(array));
    let result;
    let compare1;
    let compare2;
    return newArrayYear.sort((a,b) =>{
        compare1=a.title;
        compare2=b.title;
  
        if(a.year===b.year){
            return compare1.localeCompare(compare2);
        }   
         return a.year-b.year;
     });
  
   
}

//console.log(orderByYear(movies)[0])
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let number=0;
    let newArray =[];
    // array.forEach(element => {
    //     if(element.director==='Steven Spielberg'){
    //         for(i=0;i<element.genre.length;i++){
    //             if(element.genre[i]==='Drama'){
    //                 number +=1;
    //             }
    //         }
    //     }
    // });

    newArray=array.filter(movie => movie.director==='Steven Spielberg' && movie.genre.includes('Drama'));
 
    return newArray.length;
    
}

//console.log(howManyMovies(movies))

//console.log(howManyMovies(movies2));
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  let newArray = JSON.parse(JSON.stringify(array));
  let titles=[];
  let index=0;
  

  newArray.sort((a,b)=>{
        if (a.title < b.title) 
        return -1 
        if (a.title > b.title)
        return 1
    return 0
    });
    
    if(newArray.length<20){
      
      index=newArray.length;
    }else {index=20;}
    
    for (let i=0; i<index; i++){
      
      //titles[i]=(newArray[i].title);
      titles.push(newArray[i].title);
    }
    // titles = newArray.filter(function(number,index,array){
    //        return index<20});
 
    return titles;
}


//console.log(orderAlphabetically(movies2));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
  // let newArray = [];
  //let average=0;
  // console.log(newArray[1]);
  if(array[0]===undefined){
    return 0;
  }

  // ES6:
  let average = array.reduce((sum, element) => {
    if(element.rate===undefined){
      return sum;
    }
    return sum + element.rate;
}, 0);



  //average = (average/array.length).toFixed(2);
  
  
  return Number((average/array.length).toFixed(2));

}

//console.log(ratesAverage(movies2))
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
  let newArray = JSON.parse(JSON.stringify(array)); 
  let counter = 0;
  let avg = 0;
  newArray.map((element,index,array) => {
    console.log(element.genre);
    if(element.genre===undefined)
    {
      return avg;
    }
    console.log(avg)
    console.log(counter)
    if(element.genre.includes('Drama')){
      avg += element.rate;
      counter+=1;
    }
    
  });
  if(counter===0){
    return 0;
  }
  return Number((avg/counter).toFixed(2));
}

// console.log(dramaMoviesRate(movies2));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
  let newArray = JSON.parse(JSON.stringify(array)); 
  
  let hour;
  let min;
  let duration;
  
  
  let test = newArray.map((element,index) => {
    if(element.duration===undefined){
      return element;
    }
    if(element.duration.includes('h') && element.duration.includes('min')){ 
    hour = element.duration[element.duration.indexOf('h')-1];
    min = element.duration[element.duration.indexOf('m')-2] + element.duration[element.duration.indexOf('m')-1];
    duration = Number(hour)*60 + Number(min);
    element.duration = duration;
    return element;
    }
    if(!element.duration.includes('h')){
    min = element.duration.split('min'); 
    duration = Number(min[0]);
    element.duration = duration;
    return element;
    }
    if(!element.duration.includes('min')){
      hour = element.duration.split('h'); 
      duration = Number(hour[0]);
      element.duration = duration*60;
      return element;
      }
  });
  
  return test;
}
//console.log(turnHoursToMinutes(movies2))
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array){
  
  
  let newArray= orderByYear(array);
  
  if (newArray.length===0){
    return null;
  }
  if(newArray.length===1){
    return `The best year was ${newArray[0].year} with an average rate of ${newArray[0].rate}`;
  }
  let avg= newArray[0].rate;
  let counter=1;
  let result=0;
  let yearAvgArray=[];
    
 
    for (let i = 0; i<newArray.length; i++){
      
      console.log(newArray[i+1]===undefined)

      if(newArray[i+1]===undefined){
        if(newArray[i].year===newArray[i-1].year){
        avg +=newArray[i].rate;
        counter +=1;
        result = avg/counter;
          yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
          break;
        } else {
          result = avg/counter;
          yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
          break;
        }
      } 
     
      if(newArray[i].year===newArray[i+1].year)
      {
        avg +=newArray[i].rate;
        counter +=1;
  
      } else {
        result = avg/counter;
        avg=newArray[i+1].rate;
        counter = 1;
        yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
      }


    }
    console.log(yearAvgArray)
    let bestYearAverage = 0;
    let bestYear = 0;

    for (i=0; i<yearAvgArray.length;i++){
      if(yearAvgArray[i][1]>bestYearAverage){
        bestYear=yearAvgArray[i][0];
        bestYearAverage=yearAvgArray[i][1];
      } 
      if(yearAvgArray[i][1]===bestYearAverage){
        if(yearAvgArray[i][0]<bestYear){
          bestYear=yearAvgArray[i][0];
          bestYearAverage=yearAvgArray[i][1];
        } 
      }

    }
    
    return `The best year was ${bestYear} with an average rate of ${bestYearAverage}`;


}

console.log(bestYearAvg(movies3))
//console.log(movies3[1].year)