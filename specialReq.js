const inputFieldsValue = {
  nameInput: "",
  emailInput: "",
  numberInput: "",
  eventType: "",
  cityInput: "",
  dateTimeInput: "",
  vechicalType: "",
  passengerNumberInput: "",
  specialRequestInput: "",
};



const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const numberInput = document.getElementById("numberInput");
const eventType = document.getElementById("eventType");
const cityInput = document.getElementById("cityInput");
const dateTimeInput = document.getElementById("dateTimeInput");
const vechicalType = document.getElementById("vechicalType");
const passengerNumberInput = document.getElementById("passengerNumberInput");
const specialRequestInput = document.getElementById("specialRequestInput");
const submitButton = document.getElementById("submitButton");


submitButton.onclick = function() {
  if (nameInput.value === "") {
    window.alert("name input cannot be empty!");
    return;
  }
  if (nameInput.value.length > 30) {
    window.alert("name has to be between 1 and 30 characters!");
    return;
  }
  if (emailInput.value === "") {
    window.alert("email cannot be empty!");
    return;
  }
  if (emailInput.value.length > 100) {
    window.alert("Email cannot exceed 100 characters");
    return;
  }
  if (numberInput.value === "") {
    window.alert("phone number cannot be empty!");
    return;
  }
  if (nameInput.value.length > 25) {
    window.alert("phone number length cannot exceed 25 characters");
    return;
  }
  if (cityInput.value === "") {
    window.alert("city cannot be empty!");
    return;
  }
  if (cityInput.value.length > 200) {
    window.alert("city character length cannot exceed 200 characters");
    return;
  }
  if (dateTimeInput.value === "") {
    window.alert("date and time cannot be empty!");
    return;
  }
  if (dateTimeInput.value.length > 100) {
    window.alert("date and time character length cannot exceed 100 characters");
    return;
  }
  if (passengerNumberInput.value === "") {
    window.alert("passenger number cannot be empty");
    return;
  }
  if (+passengerNumberInput.value > 14) {
    window.alert("The maximum number of passengers in one limousine is 14.");
  }
  if (specialRequestInput.value === "") {
    window.alert("Request details cannot be empty.");
    return;
  }
  if (specialRequestInput.value.length > 1000) {
    window.alert("Request details cannot exceed 1000 characters.");
    return;
  }
  else {
    window.alert("The request has been successfully sent!")
  }
 

  inputFieldsValue.nameInput = nameInput.value;
  inputFieldsValue.emailInput = emailInput.value;
  inputFieldsValue.numberInput = numberInput.value;
  inputFieldsValue.eventType = eventType.value;
  inputFieldsValue.cityInput = cityInput.value;
  inputFieldsValue.dateTimeInput = dateTimeInput.value;
  inputFieldsValue.vechicalType = vechicalType.value;
  inputFieldsValue.passengerNumberInput = passengerNumberInput.value;
  inputFieldsValue.specialRequestInput = specialRequestInput.value;
  

  console.log(inputFieldsValue);
}