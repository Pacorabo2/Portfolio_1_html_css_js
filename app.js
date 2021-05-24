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

// ---------------- Scroll Mes compétences => skills__skills-text-section -------
// ---------------- Apparition Gauche & Droite -------
// Listener for event on Skills
const skillsLeft = document.querySelector('.skills__skills-text-section')
const skillsRight = document.querySelector('.skills__skill-img')
window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    skillsLeft.classList.add('appearLeft')
    skillsRight.classList.add('appearRight')
  } else {
    skillsLeft.classList.remove('appearLeft')
    skillsRight.classList.remove('appearRight')
  }
})

// ---------------- Scroll Je me Présente =>  introduction__heading h2-------
// ---------------- Apparition fondu au noir -------
// Listener for event on introduction section
const introductionHeading = document.querySelector('.introduction__heading h2')
const introductionParagraph = document.querySelector('.introduction__heading__par')
window.addEventListener('scroll', () => {
  if(window.scrollY > 1300) {
    introductionHeading.classList.add('reveal')
    introductionParagraph.classList.add('reveal')
  } else {
    introductionHeading.classList.remove('reveal')
    introductionParagraph.classList.remove('reveal')
  }
})

// Listener for on introduction video
const videoContainer = document.querySelector('.introduction__video')
window.addEventListener('scroll', () => {
  if (window.scrollY > 1550) {
    videoContainer.classList.add('appearDown')
  }
})

// ---------------- Scroll Skills =>  servicesTitle-------
// ---------------- Apparition fondu au noir -------
// Listener for event on services Title section
const skillsTitle = document.querySelector('#servicesTitle')
window.addEventListener('scroll', () => {
  if(window.scrollY > 2100) {
    skillsTitle.classList.add('reveal')
  } else {
    skillsTitle.classList.remove('reveal')
  }
})
// Listener for event on services Paragraphs section
const frontEnd = document.querySelector('#frontEnd')
const backEnd = document.querySelector('#backEnd')
window.addEventListener('scroll', () => {
  if(window.scrollY > 2200) {
    frontEnd.classList.add('appearLeft')
    backEnd.classList.add('appearRight')
  } else {
    frontEnd.classList.remove('appearLeft')
    backEnd.classList.remove('appearRight')
  }
})

const medias = document.querySelector('#medias')
const webQuality = document.querySelector('#webQuality')
window.addEventListener('scroll', () => {
  if(window.scrollY > 2500) {
    medias.classList.add('appearDown')
    webQuality.classList.add('appearDown')
  } else {
    medias.classList.remove('appearDown')
    webQuality.classList.remove('appearDown')
  }
})

const realisationTitle = document.querySelector('#myRealisations h2')
const cards = document.querySelector('.container')
window.addEventListener('scroll', () => {
  if(window.scrollY > 3000) {
    realisationTitle.classList.add('reveal')
  } else {
    realisationTitle.classList.remove('reveal')
  }
  if(window.scrollY > 3200) {
    cards.classList.add('reveal')
  } else {
    cards.classList.remove('reveal')
  }
})


const formtitle = document.querySelector('#contact h2')
const joinTitle = document.querySelector('#contact h3')
const parHeading = document.querySelector('#contact p')
const phoneSection = document.querySelector('.contactMe.phone')
const mailSection = document.querySelector('.contactMe.mail')
const titleOfTheForm = document.querySelector('.form__title')
const form = document.querySelector('form')
window.addEventListener('scroll', () => {
  if (window.scrollY > 3700) {
    formtitle.classList.add('appearDown')
  } else {
    formtitle.classList.remove('appearDown')
  }

  if (window.scrollY > 3900) {
    joinTitle.classList.add('appearUp')
    parHeading.classList.add('appearUp')
  } else {
    joinTitle.classList.remove('appearUp')
    parHeading.classList.remove('appearUp')
  }

  if (window.scrollY > 4000) {
    phoneSection.classList.add('appearLeft')
    mailSection.classList.add('appearRight')
  } else {
    phoneSection.classList.remove('appearLeft')
    mailSection.classList.remove('appearRight')
  }

  if (window.scrollY > 4100) {
    titleOfTheForm.classList.add('appearUp')
  } else {
    titleOfTheForm.classList.remove('appearUp')
  }

  if(window.scrollY > 4200) {
    form.classList.add('reveal')
  } else {
    form.classList.remove('reveal')
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





