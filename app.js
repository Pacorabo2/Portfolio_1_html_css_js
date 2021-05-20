// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBb4ubzd3BLW6xY0vvrFzOjgbkkFEZb_WA",
  authDomain: "formulaire-portfolio-b48c7.firebaseapp.com",
  databaseURL: "https://formulaire-portfolio-b48c7-default-rtdb.firebaseio.com",
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
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://youtu.be/B-olvh8Y2_Q?t=3245", "Nouvelle fenêtre")
  }
});

// Listener on #marvelQuizz, on click 
document.querySelector('#marvelQuizz').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://marvel-quiz-app.netlify.app/")
  }
});

// Listener on #marvelQuizzGit, on click 
document.querySelector('#marvelQuizzGit').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://github.com/Pacorabo2/marvelquizz")
  }
});

// Listener on #phsTeam, on click 
document.querySelector('#phsTeam').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://www.phs.team/", )
  }
});

// Listener on #happyNews, on click 
document.querySelector('#happyNews').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://happy-news-np.netlify.app/")
  }
});

// Listener on #happyNewsGit, on click 
document.querySelector('#happyNewsGit').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://github.com/O-clock-Lyra-JS/projet-happy-news")
  }
});

// Listener on #phsTeam, on click 
document.querySelector('#phsTeamCard').addEventListener('click', () => {
  if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
    window.open("https://www.phs.team/")
  }
});


// Listener for event on Skills
const leftAnimTxt = document.querySelector('.skills__skills-text-section')
window.addEventListener('scroll', () => {
  if(window.scrollY > 250) {
    leftAnimTxt.classList.add('leftAnimTxt')
  } else {
    leftAnimTxt.classList.remove('leftAnimTxt')
  }
})

// Listener for event on Skills Img
const rigthAnimImg = document.querySelector('.skills__skill-img')
window.addEventListener('scroll', () => {
  if(window.scrollY > 250) {
    rigthAnimImg.classList.add('rigthAnimImg')
  } else {
    rigthAnimImg.classList.remove('rigthAnimImg')
  }
})

// Listener for event on introduction section
const introductionSection = document.querySelector('#introduction')
window.addEventListener('scroll', () => {
  if(window.scrollY > 700) {
    introductionSection.classList.add('appear')
  } else {
    introductionSection.classList.remove('appear')
  }
})

// Listener for event on introduction section
const serviceTitle = document.querySelector('#services h2, #frontEnd, #backEnd')
window.addEventListener('scroll', () => {
  if(window.scrollY > 1900) {
    serviceTitle.classList.add('appear')
  } else {
    serviceTitle.classList.remove('appear')
  }
})

// Listener for event on introduction section
const frontEnd = document.querySelector('#frontEnd')
const backEnd = document.querySelector('#backEnd')
window.addEventListener('scroll', () => {
  if(window.scrollY > 2000) {
    frontEnd.classList.add('leftAnimTxt')
    backEnd.classList.add('rigthAnimImg')
  } else {
    frontEnd.classList.remove('leftAnimTxt')
    backEnd.classList.remove('rigthAnimImg')
  }
})

// Listener for event on introduction section
const medias = document.querySelector('#medias')
const webQuality = document.querySelector('#webQuality')
window.addEventListener('scroll', () => {
  if(window.scrollY > 2500) {
    medias.classList.add('rigthAnimImg')
    webQuality.classList.add('leftAnimTxt')
  } else {
    medias.classList.remove('leftAnimTxt')
    webQuality.classList.remove('rigthAnimImg')
  }
})

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





