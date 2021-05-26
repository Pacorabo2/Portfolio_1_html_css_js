// Import queriesSelectors as selected
import * as selected from './queriesSelectors.js'

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

// Listener onScroll to animate aparitions on page
window.addEventListener('scroll', () => {

  // If scroll = 400 px
  // Skills Section animations
  window.scrollY > 400 ? (
    selected.skillsLeft.classList.add('appearLeft'),
    selected.skillsRight.classList.add('appearRight')
  ) : (
    selected.skillsLeft.classList.remove('appearLeft'),
    selected.skillsRight.classList.remove('appearRight')
  )

  // if scroll = 1300 px
  // Introduction Section animations
  window.scrollY > 1300 ? (
    selected.introductionHeading.classList.add('reveal'),
    selected.introductionParagraph.classList.add('reveal')
  ) : (
    selected.introductionHeading.classList.remove('reveal'),
    selected.introductionParagraph.classList.remove('reveal')
  )

  // if scroll = 1550 px
  // Introduction Section video Animation
  window.scrollY > 1550 ? (
    selected.videoContainer.classList.add('appearDown')
  ) : (
    selected.videoContainer.classList.remove('appearDown')
  )

  // if scroll = 2100 px
  // Services Title animations
  window.scrollY > 2100 ? (
    selected.skillsTitle.classList.add('reveal')
  ) : (
    selected.skillsTitle.classList.remove('reveal')
  )

  // if scroll = 2200 px
  // Services Front-end & Back-end paragraphs section animations
  window.scrollY > 2200 ? (
    selected.frontEnd.classList.add('appearLeft'),
    selected.backEnd.classList.add('appearRight')
  ) : (
    selected.frontEnd.classList.remove('appearLeft'),
    selected.backEnd.classList.remove('appearRight')
  )

  // if scroll = 2500px
  // Services Medias & Web-Quality paragraphs section animations
  window.scrollY > 2500 ? (
    selected.medias.classList.add('appearDown'),
    selected.webQuality.classList.add('appearDown')
  ) : (
    selected.medias.classList.remove('appearDown'),
    selected.webQuality.classList.remove('appearDown')
  )

  // if scroll = 3000px
  // My Realisations Section Title animation
  window.scrollY > 3000 ? (
    selected.realisationTitle.classList.add('reveal')
  ) : (
    selected.realisationTitle.classList.remove('reveal')
  )

  // if scroll = 3200px
  // My Realisations Section Cards animation
  window.scrollY > 3200 ? (
    selected.cards.classList.add('reveal')
  ) : (
    selected.cards.classList.remove('reveal')
  )

  // if scroll = 3700px
  // Form Section Title animation
  window.scrollY > 3700 ? (
    selected.formtitle.classList.add('appearDown')
  ) : (
    selected.formtitle.classList.remove('appearDown')
  )

  // if scroll = 3900px
  // Form Section Title paragraph animation
  window.scrollY > 3900 ? (
    selected.joinTitle.classList.add('appearUp'),
    selected.parHeading.classList.add('appearUp')
  ) : (
    selected.joinTitle.classList.remove('appearUp'),
    selected.parHeading.classList.remove('appearUp')
  )

  // if scroll = 4000px
  // Form Section phone & mail paragraph animation
  window.scrollY > 4000 ? (
    selected.phoneSection.classList.add('appearLeft'),
    selected.mailSection.classList.add('appearRight')
  ) : (
    selected.phoneSection.classList.remove('appearLeft'),
    selected.mailSection.classList.remove('appearRight')
  )

  // if scroll = 4100px
  // Form Section description form paragraph animation
  window.scrollY > 4100 ? (
    selected.titleOfTheForm.classList.add('appearUp')
  ) : (
    selected.titleOfTheForm.classList.remove('appearUp')
  )

  // if scroll = 4200px
  // Form Section form reveal animation
  window.scrollY > 4200 ? (
    selected.form.classList.add('reveal')
  ) : (
    selected.form.classList.remove('reveal')
  )
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





