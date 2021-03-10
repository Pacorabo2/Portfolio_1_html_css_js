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

// Listener on #redirect, on click 
document.querySelector('#redirect').addEventListener('click', () => {
  // confirm('En cliquant sur ce lien, vous acceptez la lecture de son contenu dans une autre page');
  // window.open(
  //   "https://youtu.be/B-olvh8Y2_Q?t=3245",
  //   "Mon projet vidéo",
  //    )
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://youtu.be/B-olvh8Y2_Q?t=3245", "Nouvelle fenêtre")
  }
});

// Listener on #redirect, on click 
document.querySelector('#phsTeam').addEventListener('click', () => {
  // confirm('En cliquant sur ce lien, vous acceptez la lecture de son contenu dans une autre page');
  // window.open(
  //   "https://youtu.be/B-olvh8Y2_Q?t=3245",
  //   "Mon projet vidéo",
  //    )
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://www.phs.team/", )
  }
});

function submitForm(e) {
  e.preventDefault();
  console.log("Je suis dans la fonction submitForm");
  // Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
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
}

// Send Email Info
function sendEmail(name, email, message) {
  console.log("Depuis la fonction sendEmail");
  Email.send({
    SecureToken: "43a0bcc1-e8a0-466e-bcfc-0a1423c91901",
    To: 'contact.nicolas.plaza@gmail.com',
    From: `${email}`,
    Subject: `${name} vous a envoyé un message` ,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`, 
  }).then((message) => alert("le message a bien été envoyé"));
}





