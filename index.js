// Array of user objects
var users = [
    {
        email: "liron.ben-shushan@priority-software.com",
        password: "-928147210"
    },
    {
        email: "omri.danino@priority-software.com",
        password: "-928147209"
    },
    {
        email: "shir.ben.gigi@priority-software.com",
        password: "-928147208"
    }
];


function hashCode(str) {
    let hash = 0;
    if (str.length == 0) {
        return hash;
    }
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// Get the email and password values from the form
    var email = document.getElementById("email").value.toLowerCase();
    var password = hashCode(document.getElementById("password").value);


// Function to validate the email and password entered by the user
function validateForm(event) {
    console.log("validateForm() called");  // Debugging line

    

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
