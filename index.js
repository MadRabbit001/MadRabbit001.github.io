// Array of user objects
var users = [
    {
        email: "liron.ben-shushan@priority-software.com",
        password: "password1"
    },
    {
        email: "omri.danino@priority-software.com",
        password: "password2"
    },
    {
        email: "shir.ben.gigi@priority-software.com",
        password: "password3"
    }
];

// Function to validate the email and password entered by the user
// Function to validate the email and password entered by the user
// Function to validate the email and password entered by the user
function validateForm(event) {
    console.log("validateForm() called");  // Debugging line

    // Get the email and password values from the form
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;

    // Check if the email and password match a user in the array
    if (validateCredentials(email, password)) {
        // Email and password match a user in the array
        // Allow the form submission
        return true;
    } else {
        // Email and password do not match any users in the array
        // Prevent the form submission and display an error message
        event.preventDefault();
        alert("Incorrect email or password");
        return false;
    }
}



// Function to check if a given email and password match a user in the array
function validateCredentials(email, password) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            // Email and password match a user in the array
            return true;
        }
    }
    // Email and password do not match any users in the array
    return false;
}
