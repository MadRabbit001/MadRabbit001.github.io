function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email != "liron.ben-shushan@priority-software.com") {
        alert("Incorrect email address");
        return false;
    }

    if (password != "password") {
        alert("Incorrect password");
        return false;
    }

    return true;
}
