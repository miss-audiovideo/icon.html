var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGxI0ybtamhHfXktObvJ95pBaXoLAogss",
  authDomain: "contact-3980d.firebaseapp.com",
  projectId: "contact-3980d",
  storageBucket: "contact-3980d.appspot.com",
  messagingSenderId: "524713322077",
  appId: "1:524713322077:web:5162003a4c2e72e1d14fb4",
});
firebase.initializeApp(config);

let messageRef = firebase.database().ref("contacts");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getInputValue("name");
  let email = getInputValue("email");
  let phone = getInputValue("phone");
  let message = getInputValue("message");
  let option = getInputValue(
    "opt-1" + "opt-2" + "opt-3" + "opt-4" + "opt-5" + "opt-6"
  );

  saveMessage(name, email, phone, message, option);

  document.getElementById("form").reset();
}

function getInputValue(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, message, option) {
  let newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
    option: option,
  });
}
