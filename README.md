<p align="center"><img width="250" src="https://i.imgur.com/lMo1s1G.png"/></p>

# Lab | Greatest Movies of All Time

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_1561a196c2e3852533bad64d9b0d4e9f.gif)

## Introduction

We have just learned some super useful methods that will help us manipulate **objects and arrays**. In this exercise, we'll focus on practicing them. You're required to implement at least one of these methods in each iteration.

The best way to practice is to work with a real dataset. In the file `data.js` you'll find an array of information about **the 250 best movies of all time**, according to the [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6). Each iteration will ask you to _shape_ this information and display it in a different manner! 💪

## Requirements

- Fork this repo
- Clone this repo
- Practice JavaScript advanced methods (`map`, `reduce`, `filter` and `sort` to manipulate arrays)

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Starter code

The file `src/data.js` contains an array of 250 movies. Each entry is represented as an _object_ and contains some relevant information about that specific movie.

We picked the following movie randomly from the array:

```js
// ...
{
  title: 'Fight Club',
  year: 1999,
  director: 'David Fincher',
  duration: '2h 19min',
  genre: ['Drama'],
  rate: 8.8
},
// ...
```

In the next few iterations you'll be using the knowledge you have acquired so far to manipulate this data and to extract some insights.

## Instructions

Let's dig deeper into some of the _information_ contained within this dataset. We have a huge pile of raw data, but that doesn't tell us much. For example, if we wanted to learn which is the most popular movie, what is the average duration of the movie, list of movies by a given director, etc. we wouldn't find the answers just by observing this array.

This is where you come in. Read each iteration description carefully and let's start working on the solutions.

All of your work should be done on the `src/movies.js` file.

### Tests

Oh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the tests. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

### Iteration 1: Average movie rate

The movies in our dataset are the best of the best. Let's try to figure out **what's the average rate for the top 250 IMDB movies**.

To do so, you should declare a _function_ called `calculateAverageMovieRate` that receives an array of movies as an argument and returns a number representing the average `rate` for all of the movies in the array.

**:bulb: You might want to _`reduce`_ the data to a single value. :wink:**

### Iteration 2: Drama movies

Drama is the most common movie genre in the top 250 movie list. People seem to love drama :eyes:

Declare a _function_ named `calculateAverageDramaRate` that receives an array of movies as an argument and returns a number that represents the average rate of all drama movies! We wonder if it will be higher than the general average 🤔.

### Iteration 3: Ordering by year

Our movies are currently organized by the property `rate` in descending order. We want to sort our movie array in ascending order by the movie's release year (that is, the oldest movies should be first and the newest should come last).

It shouldn't be too hard to `sort` anything using one of the array **methods** we've just learned. :wink:

Declare a function named `orderByYear` that receives an _array of movies_ as the single argument and returns a _new array of movies sorted by release year_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

(In case two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:)

### Iteration 4: Steven Spielberg. The best?

**[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)** is one of the most recognizable directors in the history of cinema. He's a master of _drama_ filmmaking. We wonder: how many of the top 250 movies were directed by Steven Spielberg and fit the `genre` "drama"?

Go ahead and declare a function named `countSpielbergDramaMovies` that expects an array of movies as an argument, `filter`s it :eyes: and outputs the total number of movies directed by Steven Spielberg and fit the `genre` "drama".

### Iteration 5: Alphabetic Order

Another popular way to order movies would be by `title`, alphabetically.

However, this time around, we're only interested in getting the **the titles for the first 20 films after they've been ordered alphabetically**. This might sound confusing, but the unit tests should be particularly helpful in this situation.

Declare a function named `orderAlphabetically` that receives as the single argument an array of movie objects and returns an array of titles. Remember: we're only looking for the title of each movie, not the movie object. You might need to combine at least two array _methods_ to solve this one.

### Iteration 6: Time Format

The dataset we have was extracted directly from the IMDB page for each movie. IMDB displays the duration of a movie in a somewhat inconvenient manner, as it doesn't allow us to make direct comparisons or sorting without performing some _transformations_ on the value.

Finding the longest movie is almost impossible using that format, so let's change it!

Create a function named `turnHoursToMinutes` that takes an array of movies as an argument and returns a new array where each movie has had it's duration converted from the IMDB time format into the correspondent number of minutes. For example:

```javascript
// ...
  {
    title: '2001: A Space Odyssey',
    year: 1968,
    director: 'Stanley Kubrick',
    duration: '2h 29min',
    genre: ['Adventure', 'Sci-Fi'],
    rate: 8.3
  },
// ...
```

Should be:

```javascript
// ...
  {
    title: '2001: A Space Odyssey',
    year: 1968,
    director: 'Stanley Kubrick',
    duration: 149,
    genre: ['Adventure', 'Sci-Fi'],
    rate: 8.3
  },
// ...
```

Keep in mind that you should return a _new array_ with all of the information regarding each movie. That means **you should not mutate the original array**.

## Bonus Iterations

### Iteration 7: Best yearly rate average

It's a common belief that classical movies are unbeatable. Our rich dataset and programming superpowers will allow us to find out if that belief holds any truth.

Lets use the knowledge we've acquired thus far and calculate which year has the **best average rate overall**.

Declare a function named `bestYearAvg` that expects an array of movies and returns the year with the best overall average movie rate.

<!--

### Iteration 8: Best movie per year

// TO DO

-->

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)

**Happy coding!** 💙

<!--
  REQUIREMENTS FOR THE LAB
  Array methods: map, filter, reduce, sort, slice
>
