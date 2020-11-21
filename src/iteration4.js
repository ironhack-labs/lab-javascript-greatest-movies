let dramaMoviesRate = movies.filter((item)=>{
    if(item.genre.includes("Drama")){
      movies.reduce((sum,num)=>{
        return sum +num.rate/movies.length
      },0)
    
    }
     
  })
  console.log(dramaMoviesRate)

  //NO FUNCIONA / REVISAR