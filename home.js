const inputFieldsValue = {
  eventType: "",
  PickUpLocation: "",
  DropOffLocation: "",
  DateAndTime: "",
  NumberOfPassengers: ""
};

const eventType = document.getElementById("eventType");
const pickUp = document.getElementById("pickUp");
const dropOff = document.getElementById("dropOff");
const dateAndTime = document.getElementById("dateAndTime");
const passengerNumber = document.getElementById("passengerNumber");
const RentButton = document.getElementById("RentButton");

RentButton.onclick = function() {
  // Validate input fields
  if (pickUp.value === "") {
    window.alert("Pick up location cannot be empty!");
    return;
  }

  if (dropOff.value === "") {
    window.alert("Drop off location cannot be empty!");
    return;
  }

  if (dateAndTime.value === "") {
    window.alert("Date and time cannot be empty!");
    return;
  }

  if (passengerNumber.value === "") {
    window.alert("Passenger number cannot be empty!");
    return;
  }
  else {
    window.alert("Thank you! We will inform you of the details of the ride today.")
  }

  // Get the values from the input fields and assign them directly to inputFieldsValue properties
  inputFieldsValue.eventType = eventType.value;
  inputFieldsValue.NumberOfPassengers = passengerNumber.value;
  inputFieldsValue.PickUpLocation = pickUp.value;
  inputFieldsValue.DropOffLocation = dropOff.value;
  inputFieldsValue.DateAndTime = dateAndTime.value;

  console.log(inputFieldsValue);
};


















// Step by step guide on how to creat a user data base :
// creat an admin page user-data.html only accesed by you you might want to know how to creat permisons for other devs in case of a future website.
// make a const with empty strings that duplicate and input what ever user name / email / password the user inputed and add it as a string basicly.
// make a new html / java script menue on every page related to account linking the node.js user data base to a certain html display that automaticly dispalyes the user info such as user name and email.
// make an if statment: if user account = true then he can automaticly just pay for the program without inputing any of his details such as email passowr user name if not leave it default.
// make an if element for example if user.rily inputed username: yohan password: postal2 email: rily1243@gmail.com then { acces yohan account data base}