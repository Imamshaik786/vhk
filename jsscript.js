document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Display form values
    var result = document.getElementById("result");
    result.innerHTML = "<p>Name: " + name + "</p>" +
                       "<p>Email: " + email + "</p>" +
                       "<p>Message: " + message + "</p>";
    
    // You can perform further actions with the form data here (e.g., send it to a server)
  });
  