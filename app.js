// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBb4ubzd3BLW6xY0vvrFzOjgbkkFEZb_WA",
  authDomain: "formulaire-portfolio-b48c7.firebaseapp.com",
  projectId: "formulaire-portfolio-b48c7",
  storageBucket: "formulaire-portfolio-b48c7.appspot.com",
  messagingSenderId: "677576153292",
  appId: "1:677576153292:web:0159ec83cb1cb2c2a58a69"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit and fire submitForm function
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("Je suis dans la fonction submitForm");

  // Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;

  // console.log(name, email, message);

  // Save values input form
  saveContactInfo(name, email, message);

  // Emptying input
  document.querySelector(".contact-form").reset();

  sendEmail(name, email, message);
}

function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });

  // retrieveInfos();
}

// Retrieve Infos
// function retrieveInfos() {
//   let ref = firebase.database().ref("infos");
//   ref.on("value", gotData);
// }


// function gotData(data) {
//   let info = data.val();
//   let keys = Object.keys(info);

//   for (let i = 0; i < keys.length; i++) {
//     let infoData = keys[i];
//     let name = info[infoData].name;
//     let email = info[infoData].email;
//     let message = info[infoData].message;
//     console.log(name, email, message);

//     let infosResults = document.querySelector(".infosResults");

//     infosResults.innerHTML += `<div>
//     <p><strong>Name: </strong>${name} <br>
//     <a><strong>Email: </strong>${email}</a> <br>
//     <a><strong>Message: </strong>${message}</a> <br>
//     </div>`;
//   }
// }

// retrieveInfos();

// Send Email Info
function sendEmail(name, email, message) {
  console.log("Depuis la fonction sendEmail");
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'contact.nicolas.plaza@gmail.com',
    Password: "iomqgtfdhpmfxpkj",
    To: 'contact.nicolas.plaza@gmail.com',
    From: `${email}`,
    Subject: `${name} vous a envoyé un message` ,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`, 
  }).then((message) => alert("le message a bien été envoyé"));
}



