const inputFieldsValue = {
  name: "",
  email: "",
  message: "",
};


const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const message = document.getElementById("messageInput");


submitButton.onclick = function() {
  if (name.value === "") {
    window.alert("name cannot be empty!");
    return;
  }
  if (name.value.length > 30) {
    window.alert("name has to be between 1 and 30 characters!");
    return;
  }
  
  if (email.value === "") {
    window.alert("email cannot be empty!");
    return;
  }
  if (email.value > 100) {
    window.alert("email cannot exceed 100 characters!");
    return;
  }
  if (message.value === "") {
    window.alert("message cannot be empty!");
    return;
  }

  if (message.value.length > 500) {
    window.alert("User name has to be between 4 and 20 characters!");
    return;
  }
  else {
    window.alert("Thank you! an agent will reply soon")
  }

  inputFieldsValue.name = name.value;
  inputFieldsValue.email = email.value;
  inputFieldsValue.message = message.value;
  

  console.log(inputFieldsValue);
}