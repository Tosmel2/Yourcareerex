// Create variables to store your name, age, and nationality, and combine them into a sentence.
// Use string concatenation to create the sentence and log it to the console.
let fullname = "Tosin Adewale";
let age = 28;
let nationality = "Nigeria";
let combine_sentence = "My name is " + fullname + ", I am " + age + " years old " + "and of " + nationality + " nationality";
console.log(combine_sentence);

// Store your favorite quote or lyric in a variable, and convert it to uppercase and lowercase.
let quote = "The only limit to our realization of tomorrow is our doubts of today.";
let upper_case_quote = quote.toUpperCase();
let lower_case_quote = quote.toLowerCase();
console.log(upper_case_quote);
console.log(lower_case_quote);

// Reverse a given word and log the reversed version.
let word = "JavaScript";
let reversed_word = word.split("").reverse().join("");
console.log(reversed_word);

// Calculate the total price of 3 items stored in variables and display it with a message.
let item1_price = 10.99;
let item2_price = 15.49;
let item3_price = 7.99;
let total_price = item1_price + item2_price + item3_price;
let price_message = "The total price of the items is " + total_price + " naira.";
console.log(price_message);

// Compute the average of 5 test scores stored in variables and display the result.
let test_score1 = 85;
let test_score2 = 25;
let test_score3 = 30;
let test_score4 = 40;
let test_score5 = 63;

let average_scores = (test_score1 + test_score2 + test_score3 + test_score4 + test_score5) / 5
console.log("The average score is " + average_scores);

// Compute the average of 5 test scores stored in variables and display the result using REDUCE METHOD.
let scores = [85, 25, 30, 40, 63];
let average_scores2 = scores.reduce((a, b) => a + b, 0) / scores.length; // Using reduce method to sum the scores
console.log("The average score is " + average_scores2 + ".");

// Create an array of your 5 favorite foods and display the first and last items.
let favorite_foods = ["Jollof Rice", "Yam", "Eba", "Semo", "Amala"];
let first_food = favorite_foods[0];
let last_food = favorite_foods[favorite_foods.length - 1];
console.log("The first food is " + first_food + " and the last food is " + last_food + ".");

// Add two more food items to the array (one at the beginning and one at the end) and display the updated list.
favorite_foods.unshift("Rice"); // Adding at the beginning
favorite_foods.push("Bread"); // Adding at the end
console.log("Updated favorite foods: " + favorite_foods);

// Create three arrays (jssOne, jssTwo, jssThree), each containing 10 student names as strings.
console.log("========Names of Students in Jss 1 to 3 below=========");
let jssOne = ["John", "Janet", "Mary", "Peter", "Michael", "Hannah", "Timi", "Jerry", "Lucy", "Mike"];
let jssTwo = ["Paul", "Dele", "Charles", "David", "Emmanuel", "Frank", "Grace", "Jude", "James", "John"];
let jssThree = ["Peace", "Bolu", "Idris", "Noah", "Blessing", "Tosin", "Seun", "Funmi", "Sophia", "Tina"];

console.log(jssOne);
console.log(jssTwo);
console.log(jssThree);