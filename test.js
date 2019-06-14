function bestYearAvg(arrayOfMovies){
  if(arrayOfMovies.length===0){return undefined}

  let newObj = {};

  arrayOfMovies.forEach((eachMovieObject)=>{
   if(!newObj[eachMovieObject.year]){
     newObj[eachMovieObject.year] = {num: 1,totalRate: Number(eachMovieObject.rate)};
   } else{
      newObj[eachMovieObject.year].num +=1
       newObj[eachMovieObject.year].totalRate  += Number(eachMovieObject.rate)
   }
  })

  let greatest = {year: '', num: 0};

  for(let eachKey in newObj){
    if(newObj[eachKey].totalRate /newObj[eachKey].num > greatest.num){
      greatest.num = newObj[eachKey].totalRate /newObj[eachKey].num
      greatest.year = eachKey;
    } 
  }

  return `The best year was ${greatest.year} with an average rate of ${greatest.num}`
}