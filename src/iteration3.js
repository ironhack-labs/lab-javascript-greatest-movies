let ratesAverage = movies.reduce((sum,item)=>{
    return sum + item.rate/ movies.length
     },0)
      ratesAverage= ratesAverage.toFixed(2)
 
 
  console.log(ratesAverage)