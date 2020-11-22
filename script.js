const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbnail = document.getElementsByClassName("thumbnail");
const recordImg = document.getElementById("record-img");
const preview = document.querySelector(".preview");

const records = [
  {
  id: 1,
  naamAlbum: "Naam van album",
  fotoAlbumVoorkant: "cover voorkant vierkant.JPG",
  fotoAlbumAchterkant: "cover achterkant vierkant.JPG",
	fotoPlaatKant1: "side 1 record vierkant.JPG",
  fotoPlaatKant2: "side 2 record vierkant.JPG" 
  }
]

const backgroundImg = [
	"cover voorkant vierkant.jpg", 
	"cover achterkant vierkant.jpg",
	"side 1 record vierkant.jpg",
	"side 2 record vierkant.jpg"                      
]

let counter = 0;

// navigation 

closeButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
	nav.classList.add('navigation-open');
});


// functie om op elke thumbnail de class 'active' te verwijderen en op aangeklikte thumnail toe te voegen

for(let i = 0; i < (thumbnail.length); i++) {
	thumbnail[i].addEventListener('click', function() {
	  for(let i = 0; i < thumbnail.length; i++) {
	   thumbnail[i].classList.remove("active");      
    }        
	  thumbnail[i].classList.add("active");  
	  recordImg.src = `${backgroundImg[i]}`;
    counter = i;
	})
}

// functie om met click naar de volgende thumbnail te gaan

next.addEventListener("click", function() {
	console.log(`background ${backgroundImg[counter]}`)
  if(counter >= 3) {  
    thumbnail[counter].classList.remove("active");   
    counter = 0;
    recordImg.src = `${backgroundImg[counter]}`;
    thumbnail[counter].classList.add("active");     
    return;
  }
  counter++;
  recordImg.src = `${backgroundImg[counter]}`; 
  thumbnail[counter].classList.add("active");
  thumbnail[counter-1].classList.remove("active");
})

// functie om met click een thumbnail terug te gaan

prev.addEventListener("click", function() {
  if(counter <= 0) {
    thumbnail[counter].classList.remove("active");  
    counter = 3;
    recordImg.src = `${backgroundImg[counter]}`;
    thumbnail[counter].classList.add("active");
    return;
  }
  counter--;
  recordImg.src = `${backgroundImg[counter]}`;  
  thumbnail[counter].classList.add("active");
  thumbnail[counter+1].classList.remove("active");
})

