const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h',
      genre: ['Crime', 'Drama'],
      score: 5
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 10
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '5h 22min',
      genre: ['Crime', 'Drama'],
      score: 15
    },
        {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h',
      genre: ['Crime', 'Drama'],
      score: 7.1
    }
        ]
  
  
  function bestYearAvg(moviesArray) {
      let yearScoresArr = [];
    let yearScore = 0;
    let yearlyScores = [];
    let maxi = 0;
   
    let yearsArray = moviesArray.map(movie => movie.year);
    let sortedYearsArray = yearsArray.sort((a,b)=>a-b);
    let year = sortedYearsArray[0];
    let yearArray2 = sortedYearsArray.filter(year => sortedYearsArray.indexOf(year) === sortedYearsArray.lastIndexOf(year));
    console.log(sortedYearsArray);
    console.log(yearArray2);
    
    
    
    
    
    
    
    //for (i=1920;i<=2022;i++){
    //        yearScoresArr = moviesArray.filter(movie => movie.year === i);
    //    if (yearScoresArr.length !== 0){
    //        let yearlyScore = yearScoresArr.reduce((acc,cur) => acc +cur.score,0);
    //            console.log(`the year ${i} has an average score of ${yearlyScore/yearScoresArr.length}`);
    //      yearlyScores.push(yearlyScore);
    //       console.log(yearlyScores);
    //      
    //      maxi = yearlyScores[0];
    //      for (j=0;j<yearlyScores.length;j++){
    //      if (maxi > yearlyScores[j]){
    //        console.log(`the year ${i} has the higher average score with ${maxi} average`);
    //        year = 
    //      //} else if (maxi < yearlyScores[j]){
    //       // maxi = yearlyScores[j];
    //        // console.log('new score year:' + yearlyScore);
    //     // }
    //      console.log(yearlyScores);
    //      }
    //      }
    //      
    //  }
    //   
 }
