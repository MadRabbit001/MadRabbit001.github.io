// Array of user objects
var users = [
  {
    email: "liron.ben-shushan@priority-software.com",
    password: "s10EsSHITd32HHvvd465?4d1",
  },
  {
    email: "omri.danino@priority-software.com",
    password: "s10EsSHITd32HHvvd465?4d2",
  },
  {
    email: "shir.ben.gigi@priority-software.com",
    password: "s10EsSHITd32HHvvd465?4d3",
  },
];

// Function to validate the email and password entered by the user
function validateForm() {
  // Get the email and password values from the form
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  email = email.toLowerCase();

  password =
    password.substring(3, 4) +
    "10E" +
    password.substring(3, 4) +
    "SHIT" +
    password.substring(7, 8) +
    "32HHvvd465?4" +
    password.substring(7);

  // Check if the email and password match a user in the array
  if (validateCredentials(email, password)) {
    // Email and password match a user in the array
    // Allow the form submission
    return true;
  } else {
    // Email and password do not match any users in the array
    // Prevent the form submission and display an error message
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

window.onload = function () {
  document.getElementById("loading-animation").style.display = "none";
};

window.onbeforeunload = function () {
  document.getElementById("loading-animation").style.display = "block";
};
