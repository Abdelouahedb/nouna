document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are correct
    if (username.toLowerCase() === "nourimane" && password.toLowerCase() === "dex") {
        
        localStorage.setItem("loggedIn", "true");

        // Redirect to another page if credentials are correct
        
        window.location.href = "inside.html";


    } else {
        // Display an error message if credentials are incorrect
        alert("EH RDI BALK");
    }
});
