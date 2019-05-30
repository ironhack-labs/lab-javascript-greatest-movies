/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

toMinutes=(movie)=> {
    var numArray=movie.duration.match(/\d+/g)
    var num=numArray.map(Number)
     if (num.length==1 && num[0]<=3){movie.duration=num[0]*60}
     if (num.length==1 && num[0]>3){movie.duration=num[0]}
     else if (num.length>1){movie.duration=num[0]*60+num[1]}
     return movie 
     }
 
 
 // creation of a function
turnHoursToMinutes=(movies) => {
     var copie = Object.assign([], movies);
     copie.map(toMinutes) ;
     return copie
 }

// Get the average of all rates with 2 decimals 

sumRate = (movies) =>
{

   var sum=movies.reduce( (sum, movie) => 
    {
    if(movie.rate==""){movie.rate=0}
    sum+= parseInt(movie.rate);
    return sum
    },0)

  return sum

}

round=(value, decimals) =>{
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }


ratesAverage= (movies)=> {
  const sum=sumRate(movies)
  return round(sum/movies.length,2)
}

// Get the average of Drama Movies

dramaMoviesRate = (movies) => {
    const dramafiltered= movies.filter((x) => {return x.genre.includes('Drama')})
    return dramafiltered==[] ? undefined : ratesAverage(dramafiltered)
}


orderByDuration = (movies) => {
    return movies.sort( (a,b) => {
        
        if (a.duration != b.duration){return a.duration- b.duration}
        else {
          if (a.title > b.title) return 1;
	      if (a.title < b.title) return -1;}
    })
}

// How many movies did STEVEN SPIELBERG

//howManyMovies method that receives an array as a parameter and filter 👀 the array 
//so we can have only the drama movies where Steven Spielberg is the director.

howManyMovies =(movies)=>{

    const spielbergDrama=movies.filter((x)=> 
    {
    filtered=x.director.includes('Steven Spielberg') && x.genre.includes('Drama')
    return (filtered==[] ? undefined : filtered)
    })

    if (spielbergDrama==[]){return "Steven Spielberg directed 0 drama movies!"}
    else if (spielbergDrama==undefined) {return undefined}
    
    return "Steven Spielberg directed " + spielbergDrama.length + " drama movies!"

}


// Order by title and print the first 20 titles

orderAlphabetically =(movies)=>{

    sorted=movies.sort( (a,b) => { 
        if (a.title > b.title) return 1;
	    if (a.title < b.title) return -1;
    })
    var sortedTitles=[]
    sorted.forEach( (movie) => 
    {
        sortedTitles.push(movie.title)
    })

    return sortedTitles.length>=20 ? sortedTitles.slice(0, 20) : sortedTitles
        
}
// Best yearly rate average



var groupBy = function(arr, key) {
    return arr.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };


bestYearAvg=(movies)=>{

    byYear= groupBy (movies, movie => movie.year)

}
