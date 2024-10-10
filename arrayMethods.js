// Initial array of favorite movies
let favoriteMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction"];

// 1. shift() - Removes the first element from an array and returns it
let firstMovie = favoriteMovies.shift();
console.log(`Removed the first movie: ${firstMovie}`);
console.log(`Current movies: ${favoriteMovies}`);

// 2. unshift() - Adds one or more elements to the beginning of an array
favoriteMovies.unshift("Inception", "Interstellar");
console.log(`Added two movies at the beginning: ${favoriteMovies}`);

// 3. slice() - Returns a shallow copy of a portion of an array into a new array
let someMovies = favoriteMovies.slice(1, 3);
console.log(`Sliced movies: ${someMovies}`);

// 4. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements
favoriteMovies.splice(2, 1, "Fight Club"); // Removes 1 element at index 2 and adds "Fight Club"
console.log(`After splicing: ${favoriteMovies}`);

// 5. concat() - Merges two or more arrays
let moreMovies = ["Gladiator", "The Matrix"];
let allMovies = favoriteMovies.concat(moreMovies);
console.log(`All movies after concatenation: ${allMovies}`);

// 6. join() - Joins all elements of an array into a string
let moviesString = allMovies.join(", ");
console.log(`Movies as a string: ${moviesString}`);
