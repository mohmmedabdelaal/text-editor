import '../assets/css/style.css';

//// Exercise
/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
function updateText() {
  // CODE GOES HERE
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold(elem) {
  //CODE GOES HERE
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
}

/////////////////////

/**
 * 
 const secretNumber = Math.floor(Math.random() * 20) + 1;
 let score = 20;
 console.log(secretNumber);
 document.querySelector('.score').innerHTML = score;

const displayMessage = (message) => {
  document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const myGuess = Number(guess.value);

  console.log(myGuess);
  let guessTimes = 0;
  if (myGuess === secretNumber) {
    displayMessage('You win!');
  }
  if (myGuess > secretNumber) {
    displayMessage('Too high');
    guessTimes++;
  }
  if (myGuess < secretNumber) {
    displayMessage('Too low');
    guessTimes++;
  }
  if (myGuess < 1 || myGuess > 20) {
    displayMessage('Please enter a number between 1 and 20');
  }
  console.log(guessTimes);
});
*/

// const addNumber = (...args) => {
//   const sum = args.reduce((acc, prev) => acc + prev, 0);
//   return sum;
// };

// console.log(addNumber(1, 2, 3));

// convert minutes into seconds

// const convertMinutes = (mint) => {
//   const sec = mint * 60;
//   return sec;
// };

// console.log(convertMinutes(3));

/// your Age in seconds

// const ageIntoSec = (age) => {
//   return age * 365 * 24 * 60 * 60;
// };
// console.log(ageIntoSec(25));

// const movies = ['Top gun', 'spider man', 'godfather'];

// const stItem = (arr) => {
//   return arr ? arr[0] : 'please enter array';
// };

// console.log(stItem(movies));

/**
 * 
 * 
 const movies = [
   { name: 'godfather', rating: 9 },
  { name: 'shawshank', rating: 8.5 },
  { name: 'top gun', rating: 8.4 },
  { name: 'haha wa tofaha', rating: 6 },
];

const movieRate = (mov) => {
  const badMovie = mov
    .filter((m) => m.rating < 7)
    .map((m) => m.name)
    .toString();
  const goodMovie = mov
    .filter((m) => m.rating > 7)
    .map((m) => m.name)
    .toString();
  return `${goodMovie} are good movies and ${badMovie} are bad`;
};
console.log(movieRate(movies));

   */

// const isEmptyStr = (str) => {
//   if (str.length === 0) {
//     return 'this is empty string';
//   } else {
//     return str;
//   }
// };
// console.log(isEmptyStr('Mohamed abdu'));
// const myarr = [1, 2, 3, 4, 9, 11, 29];
// const findMin = (arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return `Minimum Value is ${min}, Maximum Value is ${max}`;
// };

// const mini = (arr) => {
//   let minimum = arr[0];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//   }
// };

/// create sum function

// const sorted = myarr.sort((a, b) => b - a);
// console.log(sorted);

// const moviesDB = [
//   { name: 'shawshank', rating: 9.7 },
//   { name: 'godfather', rating: 9.6 },
//   { name: 'batman', rating: 9.2 },
//   { name: 'top gun', rating: 8.7 },
//   { name: 'lord of rings', rating: 9.0 },
//   { name: 'avengers', rating: 8.2 },
//   { name: 'zor', rating: 7.5 },
// ];

// const descSort = moviesDB.sort((a, b) => a.rating - b.rating);
// const ascSort = moviesDB.sort((a, b) => b.rating - a.rating);
// // const alphaSort = moviesDB.sort((a, b) => a.name.localeCompare(b.name));
// const z_aSort = moviesDB.sort((a, b) => a.name.localeCompare(b.name));
// console.log(z_aSort);
/**\
 * 
 * 
 const btnName = document.querySelector('.btn-sort-name');
 const btnRating = document.querySelector('.btn-sort-rating');
 const btnId = document.querySelector('.btn-sort-id');

 var movies = [
  {
    title: 'godfather',
    rating: 9.5,
    id: 'ttu2828',
  },
  {
    title: 'Zor',
    rating: 7.5,
    id: 'ttu2228',
  },
  {
    title: 'The lord of rings',
    rating: 9.2,
    id: 'ttu5228',
  },
  {
    title: 'avengers',
    rating: 8,
    id: 'ttu2829',
  },
  {
    title: 'Nerve',
    rating: 4,
    id: 'ttu3820',
  },
  {
    title: 'Star Trek Beyond',
    rating: 4,
    id: 'ttu8029',
  },
  {
    title: 'Me before you',
    rating: 4.5,
    id: 'ttu2323',
  },
];

window.onload = function () {
  // Display Movies list
  displayMovies(movies);
};

btnName.addEventListener('click', function (e) {
  e.preventDefault();
  const sortByAZ = movies
    .map((mov) => mov)
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  displayMovies(sortByAZ);
});
btnRating.addEventListener('click', function (e) {
  e.preventDefault();
  const sortRating = movies
    .map((mov) => mov)
    .sort((a, b) => {
      return b.rating - a.rating;
    });
  displayMovies(sortRating);
});
btnId.addEventListener('click', function (e) {
  e.preventDefault();
  const sortingId = movies
    .map((mov) => mov)
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  displayMovies(sortingId);
});

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
/*
function displayMovies(movies) {
  let table = "<table border='1' style='width: 100%'>";
  table += '<tr><th>ID</th><th>Name</th><th>Rank</th></tr>';
  for (let index = 0; index < movies.length; index++) {
    table += '<tr>';
    table += '<td>' + movies[index].id + '</td>';
    table += '<td>' + movies[index].title + '</td>';
    table += '<td>' + movies[index].rating + '</td>';
    table += '</tr>';
  }
  // Close the table
  table += '</table>';
  document.getElementById('movies-list').innerHTML = table;
}
*/

// const sortById = movies.sort(function (a, b) {
//   return a.id.localeCompare(b.id);
// });

// const sortByRating = movies.sort((a, b) => b.rating - a.rating);

// sort by name
