function validateForm() {
    // Get the values of the form input fields
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if the required fields are empty
    if (fname == "") {
      alert("Please fill out your first name");
      return false;
    }

    // Check if the email field is empty and meets the email format requirements
    // This regular expression matches any string that contains one or more characters, followed by an "@" symbol, followed by one or more characters, followed by a ".",
    // and then two or more characters (the domain)
    var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email == "" || !emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    // Check if the message field is empty
    if (message == "") {
      alert("Please enter your message");
      return false;
    }

    // If all validations pass, return true to allow the form to submit
    return true;
  }
