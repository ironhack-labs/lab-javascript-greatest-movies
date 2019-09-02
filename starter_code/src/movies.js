/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies){
	
	var acum=movies.reduce((acum,movie)=>acum+parseFloat(movie.rate),0);
	var ret=acum/movies.length
	
	return (ret);
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
	
	var dramaMovies=movies.filter(movie=>movie.genre.includes('Drama'));
	//alert(JSON.stringify(dramaMovies));
	var acum=dramaMovies.reduce((acum,movie)=>
	{
		if (movie.rate===""){
			movie.rate='0.0';
			
		}
		//if (movies.length<5)alert('coco '+movie.rate);
		return acum+parseFloat(movie.rate)//remember to user return when using es6 for several instructions
	},0);
	
	if (dramaMovies.length==0) return 0;
	var ret=acum/dramaMovies.length;
	//if (movies.length<5)alert('len '+dramaMovies.length+' acum '+acum+' ret '+ret+' '+JSON.stringify(movies));
	return (parseFloat(ret.toFixed(2)));
}


 
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
	return movies.sort((a,b)=>
	{
	if (a.duration!=b.duration)
		return parseFloat(a.duration)-parseFloat(b.duration);
	else
	  {
		  
	 if (a.title < b.title){
        return -1;
    }

    if (a.title > b.title){
        return 1;
    }

    return 0;
	
	  }
	}
	);
	
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
	var stevenMovies=movies.filter(movie=>
	{return movie.director==='Steven Spielberg' && movie.genre.includes('Drama')}
	);
	
	return stevenMovies.length;

}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
  var movies2=movies.sort
  ((a,b)=>
	{
	 if (a.title < b.title){
        return -1;
    }

    if (a.title > b.title){
        return 1;
    }
    return 0;
	  }
	
	);
  var cnt=0;
  var titles=[];
  for (var i=0;i<movies2.length;i++)
    {
		 titles.push(movies2[i].title);
		 cnt++;
		 if (cnt==20) break;
	}
  return titles	;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function strToint(str){
var parts=str.split(" ");
if (parts.length==2)
  {
     var hou=parseFloat(parts[0].replace("h",""))*60;
     var min=parseFloat(parts[1].replace("min",""));
     return hou+min;
  }
  else
  {
   if (str.includes("h"))
	  return parseFloat(str.replace("h",""))*60;
	  else
	   return parseFloat(str.replace("min",""));
	 
  }

return 0;
}

function turnHoursToMinutes(movies){
  return movies.map(
  movie=>{
    return {
	 title:movie.title,
	 duration: strToint(movie.duration)
	}
  });
  


}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
	
  if (movies.length==0) return null;
  if (movies.length==1) return "The best year was "+movies[0].year+" with an average rate of "+movies[0].rate;
  
  //order by year
  
  var orderedMovies=movies.sort
  ((a,b)=>
	{
	 if (a.year < b.year){
        return -1;
    }

    if (a.year > b.year){
        return 1;
    }
    return 0;
	  }
	
	);
	
	
	// group rates by year {year:2000,rates[9,2,3]);
	
	var prevYear=movies[0].year;
	var acum=0;
	let rates=[];
	var cnt=1;
	var newMap=[];
	orderedMovies.forEach(movie=>{
		
	    if (prevYear!=movie.year){
		    var obj= {
			  year:prevYear,
			  rates:rates
			 }
			 rates=[];
			 newMap.push(obj);
		 }
		 rates.push(movie.rate);
		 prevYear=movie.year;
		
	});
	
	console.log(orderedMovies);
     
	var obj= {
			  year:prevYear,
			  rates:rates
			 }
   newMap.push(obj);
   
   console.log(newMap);
   
   // reduce rates by year {year:2000,avg:9.2);
  
   var newMap2=newMap.map(movie=>
   {
	   var rateacum=movie.rates.reduce( (acum,rate)=>acum+parseFloat(rate),0);
	   
	   var avg=rateacum/movie.rates.length;
	   return {
	    year:movie.year,
		avg:avg
	   }
	  
   });
   
   console.log(newMap2);
    // order by avg;
	var newMap3=newMap2.sort
	((a,b)=>
	{
	 if (a.avg > b.avg){
        return -1;
    }

    if (a.avg < b.avg){
        return 1;
    }
    return 0;
	  }
	
	);
	 // the winner is first; 
	
	 var winner=newMap3[0].avg;
	 
	 // filter by  winner and sort by year; 
	 var newMap4=newMap3.filter(movie=>movie.avg===winner).sort
	 ((a,b)=>
	{
	 if (a.year < b.year){
        return -1;
    }

    if (a.year > b.year){
        return 1;
    }
    return 0;
	  }
	
	);
	 
	 //take the first
	 
	 return "The best year was "+newMap4[0].year+" with an average rate of "+newMap4[0].avg;
	
	
}




















