const inputFieldsValue = {
  userName: "",
  firstName: "",
  lastName: "",
  Email: "",
  Password: ""
};

const userName = document.getElementById("userName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const SignUpButton = document.getElementById("SignUpButton");
const LogInButton = document.getElementById("LogInButton");
const accountDiv = document.getElementById("accountDiv"); // Assuming this is defined elsewhere in your HTML

let signupInitialized = false;
let loginInitialized = false;

function initializeSignUp() {
  // Apply styles for signup button
  firstName.style.opacity = "1";
  lastName.style.opacity = "1";
  firstName.style.height = "40px";
  lastName.style.width = "492px";
  accountDiv.style.height = "600px";
  userName.style.marginBottom = "0px";
  LogInButton.style.marginTop = "-50px";
  
  signupInitialized = true;
  loginInitialized = false; // Reset login initialization flag
}

function initializeLogIn() {
  // Apply styles for login button
  firstName.style.opacity = "0";
  lastName.style.opacity = "0";
  firstName.style.height = "0px";
  lastName.style.width = "0px";
  accountDiv.style.height = "400px";
  userName.style.marginBottom = "-110px";
  LogInButton.style.marginTop = "-50px";
  
  loginInitialized = true;
  signupInitialized = false; // Reset signup initialization flag
}

SignUpButton.onclick = function() {
  if (!signupInitialized) {
    initializeSignUp();
    return;
  }


  if (userName.value === "") {
    window.alert("User name cannot be empty!");
    return;
  }
  if (userName.value.length < 4 || userName.value.length > 20) {
    window.alert("User name has to be between 4 and 20 characters!");
    return;
  }
  
  if (firstName.value === "") {
    window.alert("First name cannot be empty!");
    return;
    
  }
  if (firstName.value.length < 1 || firstName.value.length > 20) {
    window.alert("First name has to be between 1 and 20 charcters!");
    return;
    
  }
  if (lastName.value === "") {
    window.alert("last name cannot be empty!");
    return;
    
  }
  if (lastName.value.length < 1 || lastName.value.length > 20) {
    window.alert("last name has to be between 1 and 20 charcters!");
    return;
    
    
  }
  if (Password.value === "") {
    window.alert("Password cannot be empty!");
    return;
    
  }
  if (Password.value.length < 4 || Password.value.length > 30) {
    window.alert("Password has to be between 1 and 20 charcters!");
    return;
    
  }
  if (Email.value === "") {
    window.alert("Email cannot be empty!");
    return;
  }
  

  window.alert("Sign up successful!");

  // Store input values
  inputFieldsValue.userName = userName.value;
  inputFieldsValue.firstName = firstName.value;
  inputFieldsValue.lastName = lastName.value;
  inputFieldsValue.Email = Email.value;
  inputFieldsValue.Password = Password.value;

  console.log(inputFieldsValue);
};

LogInButton.onclick = function() {
  if (!loginInitialized) {
    initializeLogIn();
    return;
  }

  // Validation logic for login
  if (userName.value === "") {
    window.alert("User name cannot be empty!");
    return;
  }
  if (userName.value.length < 4 || userName.value.length > 20) {
    window.alert("User name has to be between 4 and 20 characters!");
    return;
  }
  if (Email.value === "") {
    window.alert("Email cannot be empty!");
    return;
  }
 
  

 
  if (Password.value === "") {
    window.alert("Password cannot be empty!");
    return;
    
  }
  if (Password.value.length < 4 || Password.value.length > 30) {
    window.alert("Password has to be between 1 and 20 charcters!");
    return;
    
  }
  
  // More validation checks for Login

  window.alert("Login successful!");
};