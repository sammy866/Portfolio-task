function validateForm() {
    //Get form elements values
    var firstName = document.forms["myForm"]["fname"].value.trim();
    var lastName = document.forms["myForm"]["lname"].value.trim();
    var email = document.forms["myForm"]["email"].value.trim();
    var message = document.forms["myForm"]["message"].value.trim();
  
    //regular expression for email validation
    var regEmail= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    //checks Full Name
    if (firstName == "") {
      alert("First name must be filled out");
      return false;
    }
     if (lastName== "")
    {
      alert("Last name must be filled out");
      return false;
    }
  
  //checks Email 
    if(email == "")
    {
      alert("Please provide your e-mail.");
      return false;
    }
  
    if (!email.match(regEmail)) {
      alert("Please enter a valid email address");
      return false;
    }
  
  //checks message
    if(message == '') {
      alert("Message cannot be empty!");
      return false;
    }
  
  //if everything is ok, the form submission will happen, and the function will return true.
    
    return true;
  }