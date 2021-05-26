// Import queriesSelectors as selected
import * as selected from './queriesSelectors.js'

// Fetching data from firebase
fetch('https://firestore.googleapis.com/v1/projects/portfolio-data-9d1f0/databases/(default)/documents/projects')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    let datas = data.documents
    datas.map((sites) => {
      const site = sites.fields
      const { ImageUrl, title, git_link, skills, technoTitle, url_app } = site

      // destructuring array of skills
      const skillsArray = site.skills.arrayValue.values


      // Structure d'une card

      // -------------- Front-Side ----------------

      // Création d'une div .card
      const card = document.createElement('div')
      // Ajout de la classe card
      card.classList.add('card')
      // Selection du container
      selected.cards.appendChild(card)

      // Création d'une div .card__side card__side--front
      const cardSideCardFront = document.createElement('div')
      // Ajout de la classe .card__side card__side--front
      cardSideCardFront.classList.add('card__side')
      cardSideCardFront.classList.add('card__side--front')
      // Ajout de la propriété backgroundimage dynamiquement
      cardSideCardFront.style.backgroundImage =`url(${site.ImageUrl.stringValue})`
      // Ajout de la div à .card
      card.appendChild(cardSideCardFront)

      // Creation d'une div .card__theme
      const cardTheme = document.createElement('div')
      // Ajout de la classe . card__theme
      cardTheme.classList.add('card__theme')
      // Insertion de la div dans la div parente
      cardSideCardFront.appendChild(cardTheme)

      // Creation d'une div .card__theme-box
      const cardThemeBox = document.createElement('div')
      // Ajout de la classe . card__theme
      cardThemeBox.classList.add('card__theme-box')
      // Insertion de la div dans la div parente
      cardTheme.appendChild(cardThemeBox)

      // création d'un p
      const p1 = document.createElement('p')
      //  attribution d'une classe card__subjet
      p1.classList.add('card__subject')
      // Ajout du contenu avec variable technoTitle
      p1.textContent = technoTitle.stringValue
      // insertion des p créés dans la div.card__theme-box
      cardThemeBox.appendChild(p1)
  
      // création d'un p
      const p2 = document.createElement('p')
      // attribution d'une class card__title
      p2.classList.add('card__title')
      // Ajout du contenu avec variable title
      p2.textContent = title.stringValue
      // insertion des p créés dans la div.card__theme-box
      cardThemeBox.appendChild(p2)

      // -------------- Back-Side ----------------
      // Création de la div container back
      const cardSideCardSideBack = document.createElement('div')
      cardSideCardSideBack.classList.add('card__side')
      cardSideCardSideBack.classList.add('card__side--back')
      card.appendChild(cardSideCardSideBack)

      // Création de la div enfante de cardSideCardSideBack
      const cardCover = document.createElement('div')
      cardCover.classList.add('card__cover')
      cardSideCardSideBack.appendChild(cardCover)

      // Création du h4 enfant de cardCover
      const cardHeading = document.createElement('h4')
      cardHeading.classList.add('card__heading')
      cardCover.appendChild(cardHeading)

      // Création du span enfant de cardHeading
      const cardHeadingSpan = document.createElement('span')
      cardHeadingSpan.classList.add('card__heading-span')
      //Ajout du texte
      cardHeadingSpan.textContent = 'Skills'
      cardHeading.appendChild(cardHeadingSpan)

      //création de la div container de la liste
      const cardDetails = document.createElement('div')
      cardDetails.classList.add('card__details')
      cardSideCardSideBack.appendChild(cardDetails)

      // Création de la ul
      const cardDetailsList = document.createElement('ul')
      cardDetailsList.classList.add('card__details__list')
      cardDetails.appendChild(cardDetailsList)

      // Création des li en itérant dans notre tableau
      skillsArray.forEach(skill => {
        const skillItem = document.createElement('li')
        skillItem.textContent = `${skill.stringValue}`
        cardDetailsList.appendChild(skillItem)
      })

      // Création de la div container des boutons
      const cardDetailsBtn = document.createElement('div')
      cardDetailsBtn.classList.add('card__details--btn')
      cardSideCardSideBack.appendChild(cardDetailsBtn)
      
      // Création du 1er p enfant de la div
      const siteLinkOne = document.createElement('p')
      siteLinkOne.classList.add('siteLink')
      cardDetailsBtn.appendChild(siteLinkOne)

      //Création du lien enfant du p
      const siteLink = document.createElement('a')
      siteLink.classList.add('card__details--btn__first')
      siteLink.textContent = 'Voir le site'
      siteLink.setAttribute('target', '_blank')
      siteLink.setAttribute('id', `${site.title.stringValue}`)
      siteLink.setAttribute('href', `${site.url_app.stringValue}`)
      siteLink.setAttribute('title', `Ce lien ouvre une nouvelle fenêtre qui vous redirige vers le site ${site.title.stringValue}`)
      siteLinkOne.appendChild(siteLink)

      //Création du deuxième p enfant de la div
      const siteLinkTwo = document.createElement('p')
      siteLinkTwo.classList.add('gitLink')
      cardDetailsBtn.appendChild(siteLinkTwo)

      // Création du lien enfant de ce p
      const gitLink = document.createElement('a')
      gitLink.classList.add('card__details--btn__last')
      gitLink.textContent = 'Github'
      gitLink.setAttribute('target', '_blank')
      gitLink.setAttribute('id', `${site.title.stringValue}`)
      gitLink.setAttribute('href', `${site.git_link.stringValue}`)
      gitLink.setAttribute('title', `Ce lien ouvre une nouvelle fenêtre qui vous redirige vers le repo github de ${site.title.stringValue}`)
      siteLinkTwo.appendChild(gitLink)

      // Ajout de l'url au css de ImageUrl
    })
  })

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
// document.querySelector('#redirect').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://youtu.be/B-olvh8Y2_Q?t=3245", "Nouvelle fenêtre")
//   }
// });



// Listener on #marvelQuizz, on click 
// document.querySelector(`${site.title.stringValue}`).addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://marvel-quiz-app.netlify.app/")
//   }
// });

// Listener on #marvelQuizzGit, on click 
// document.querySelector('#marvelQuizzGit').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://github.com/Pacorabo2/marvelquizz")
//   }
// });

// Listener on #phsTeam, on click 
// document.querySelector('#phsTeam').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://www.phs.team/", )
//   }
// });

// Listener on #happyNews, on click 
// document.querySelector('#happyNews').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://happy-news-np.netlify.app/")
//   }
// });

// Listener on #happyNewsGit, on click 
// document.querySelector('#happyNewsGit').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://github.com/O-clock-Lyra-JS/projet-happy-news")
//   }
// });

// Listener on #phsTeam, on click 
// document.querySelector('#phsTeamCard').addEventListener('click', () => {
//   if (window.confirm("Une nouvelle fenêtre va s'ouvrir")) {
//     window.open("https://www.phs.team/")
//   }
// });

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





