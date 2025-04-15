console.log("============Task 1 below=========");

// Write a function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed". (JAMB-style)
function checkScore(score) {
    if (score >= 180) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}

checkScore(200); // Passed
checkScore(150); // Failed
checkScore(180); // Passed
console.log("===========Task 2 below==========");


//Write a function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Not eligible";
    }
}

console.log(checkVotingEligibility(20)); // You are eligible to vote
console.log(checkVotingEligibility(16)); // Not eligible
console.log(checkVotingEligibility(18)); // You are eligible to vote
console.log("===========Task 3 below==========");

// =======================================================

// Write a function that takes a name and score, then returns:
// "Excellent" if score >= 90
// "Good" if score >= 75
// "Average" if score >= 50
// "Fail" otherwise
function evaluateStudent(name, score) {
    if (score >= 90) {
        // return "Excellent";
        return `${name}, Excellent`; // template literal for string interpolation using backticks
    } else if (score >= 75) {
        // return "Good";
        return `${name}, Good`;
    } else if (score >= 50) {
        // return "Average";
        return `${name}, Average`;
    } else {
        // return "Fail";
        return `${name}, Fail`;
    }
}

console.log(evaluateStudent("Tosin's Grade", 95)); // Tosin's, Excellent
console.log(evaluateStudent("Adewale's Grade", 80)); // Adewale's, Good
console.log(evaluateStudent("Chika's Grade", 60)); // Chika's, Average
console.log(evaluateStudent("Bola's Grade", 45)); // Bola's, Fail

console.log("==========Task 4 below===========");

// =====================================================================
// Write a function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
// Otherwise, return "Access denied".
function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
        return "Access granted";
    } else {
        return "Access denied";
    }
}

console.log(checkAccess(true, true)); // Access granted
console.log(checkAccess(true, false)); // Access denied

console.log("===========Task 5 below==========");

// Use a for loop to go through an array of student scores. For each score, print "Pass" if it’s above 50 or "Fail" if it’s 50 or below.
const scores = [45, 78, 90, 50, 30, 85, 60];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 50) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
}

console.log("============Task 6 below=========");

// Write an arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
const checkPass = (mathScore, englishScore) => {
    return (mathScore >= 50 && englishScore >= 50) ? "Yes" : "No"; // Using ternary operator for conditional return and short code
}
 
console.log(checkPass(60, 70)); // Yes
console.log(checkPass(40, 80)); // No

console.log("============Task 7 below=========");
// Create a function that checks if a user has either an email or a phone number before signing up.
// If they dont have any, return "Please provide contact information".
function checkContactInfo(email, phone) {
    if (email || phone) {
        return "Contact information provided";
    } else {
        return "Please provide contact information";
    }
}

console.log(checkContactInfo("adewaletosin0808@gmail.com", "08068957966")); // Contact information provided
console.log(checkContactInfo("", "")); // Please provide contact information

console.log("============Task 8 below=========");
// Write a function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
// If both are filled, return "Login successful".
function validateLogin(username, password) {
    if (!username || !password) { // Using logical NOT operator to check for empty values
        return "Invalid input";
    } else {
        return "Login successful";
    }
}

console.log(validateLogin("Tosin", "password123")); // Login successful
console.log(validateLogin("", "password123")); // Invalid input
console.log(validateLogin("Tosin", "")); // Invalid input
console.log(validateLogin("", "")); // Invalid input

console.log("============Task 9 below=========");

// Write a function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function checkWorkHours(hours) {
    return (hours >= 40) ? "Full-time" : "Part-time";
}

console.log(checkWorkHours(45)); // Full-time
console.log(checkWorkHours(30)); // Part-time

console.log("============Task 10 below=========");
// Write an arrow function that takes two numbers and returns the larger one.

const findLargerNumber = (num1, num2) => {
    return (num1 > num2) ? num1 : num2; 
}

console.log(findLargerNumber(10, 20)); // 20
console.log(findLargerNumber(30, 25)); // 30


