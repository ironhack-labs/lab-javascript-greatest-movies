function turnHoursToMinutes(movies) {
  // ****
  const durationInMinutes = duration => {
    let durationArr = duration.split("");
    // console.log("durationArr[0]", durationArr[0]);

    let hours = durationArr[0] * 60;
    // console.log("hours", hours);
    let minutesArr = [];
    if (durationArr.length === 8) {
      minutesArr = durationArr.slice(3, 5);
    }
    if (durationArr.length === 7) {
      minutesArr = durationArr.slice(3, 4);
    }

    // var result = minutesArr.map(min => {
    //   return parseInt(min, 10);
    // });
    let minutes = minutesArr.join().replace(/,/, "");
    let totoalTimeInMinutes = parseInt(minutes, 10) + hours;
    console.log("mins ", parseInt(minutes, 10), "hours ", hours);
    return totoalTimeInMinutes;
  };
  // ****
  const newMovies = movies.map(movie => {
    const newMovie = { ...movie };
    newMovie.duration = durationInMinutes(newMovie.duration);
    return newMovie;
  });

  console.log("newMovies", newMovies);
  return newMovies;
}
turnHoursToMinutes(movies);
