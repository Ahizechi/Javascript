var userAge = prompt("How old are you: ");

if (!isNaN(userAge) && userAge.trim() !== "") {
    
    userAge = Number(userAge);

    if (Number.isInteger(userAge) && userAge > 0) {

        if (userAge > 17 && userAge < 22) {
            console.log("You can be served at this time, but not too much.");
        } else if (userAge >= 22) {
            console.log("It's time to party!");
        } else {
            console.log("You must grow first, young one.");
        }

    } else {
        console.log("Please enter a valid positive integer.");
    }

} else {
    console.log("Enter a valid number!");
}
