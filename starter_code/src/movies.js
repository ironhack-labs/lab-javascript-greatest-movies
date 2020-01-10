/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
/*const orderByYear=(arreglo)=>{
    let newArr=[...arreglo.sort((a,b)=>(''+a.title).localeCompare(b.title))]
    
    console.log(newArr.sort((a,b)=>a.year-b.year))

}*/
const orderByYear=(arreglo) =>{
    let years=[]
    let final=[]
    arreglo.forEach(elem=>{
      if(years.indexOf(elem.year)===-1)
      years.push(elem.year)
    })
    years.sort()
    arreglo.sort((a, b)=>(''+a.title).localeCompare(b.title))
    for(i=0;i<years.length;i++)
    {
     arreglo.filter(elem=>elem.year===years[i]).forEach(elem=>final.push(elem))
    }
    return final
  };
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
   return  arr.filter(elem=>elem.genre.indexOf("Drama")>=0 && elem.director==="Steven Spielberg").length
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically=(arreglo)=>{
    let newArr=[...arreglo]
    newArr.sort((a,b)=>(''+a.title).localeCompare(b.title))
    return newArr.slice(0,20).map(elem=>elem.title)

}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage=(arr)=>{
    if(arr.length===0) return 0
    let rates=arr.map(elem=>elem.rate)
    let result=rates.reduce((acc,c)=>acc+(typeof c==='number'?c:0),0)
    result=result/arr.length
    console.log(typeof result)
    return Math.round(result*100)/100
  }
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    return  ratesAverage(arr.filter(elem=>elem.genre.indexOf("Drama")>=0))
    
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes=(arr)=>{
    let newArr = arr.map(elem=>elem)
        newArr.forEach(elem=>{
          let duracion=elem.duration
          if(duracion.includes("h")){
              if(duracion.includes("m")){
          duracion=duracion.replace("min","").replace("h","")
           let tiempo=duracion.split(" ")
            elem.duration= (tiempo[0]*60)+(tiempo[1]*1)}
            else
            {
                let tiempo=duracion.replace("h","")
                    elem.duration= (tiempo*60)
            }

}
else
            {
                let tiempo=duracion.replace("min","")
                    elem.duration= (tiempo*1)
            }
})

    return newArr
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg=(arreglo)=>{
    if(arreglo.length===0) return null
    if(arreglo.length===1) return `The best year was ${arreglo[0].year} with an average rate of ${arreglo[0].rate}`

    let years=[]
      let final=0
      let promedio=0
      let prom=0
      arreglo.forEach(elem=>{
        if(years.indexOf(elem.year)===-1)
        years.push(elem.year)
      })
      years.sort()
      arreglo.sort((a, b)=>(''+a.title).localeCompare(b.title))
      for(i=0;i<years.length;i++)
      {
        prom=ratesAverage(arreglo.filter(elem=>elem.year===years[i]))
        if (prom>=promedio) final=years[i]
      }
      return `The best year was ${final} with an average rate of ${promedio}`
  
  }