const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbNail = document.getElementsByClassName("thumbnail");
const recordImg = document.getElementById("record-img");
const preview = document.querySelector(".preview");
const cover = document.querySelector(".cover");

console.log(cover.src);

const records = [
  {
  id: 1,
  naamAlbum: "Naam van album",
  fotoAlbumVoorkant: "PHOTOS/LPS/cover voorkant vierkant.JPG",
  fotoAlbumAchterkant: "PHOTOS/LPS/cover achterkant vierkant.JPG",
	fotoPlaatKant1: "PHOTOS/LPS/side 1 record vierkant.JPG",
  fotoPlaatKant2: "PHOTOS/LPS/side 2 record vierkant.JPG" 
  }
]

const coverImg = [
	"PHOTOS/LPS/cover voorkant vierkant.jpg", 
	"PHOTOS/LPS/cover achterkant vierkant.jpg"                 
]

const backgroundImg = [
	"PHOTOS/LPS/cover voorkant vierkant.jpg", 
	"PHOTOS/LPS/cover achterkant vierkant.jpg",
	"PHOTOS/LPS/side 1 record vierkant.jpg"                     
]

let counter = 0;

// navigation 

closeButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
	nav.classList.add('navigation-open');
});


// functie om op elke thumbNail de class 'active' te verwijderen en op aangeklikte thumnail toe te voegen

for(let i = 0; i < (thumbNail.length); i++) {
	thumbNail[i].addEventListener('click', function() {
	  for(let i = 0; i < thumbNail.length; i++) {
	   thumbNail[i].classList.remove("active");      
    }        
	  thumbNail[i].classList.add("active");  
	  recordImg.src = `${backgroundImg[i]}`;
    counter = i;
	})
}

// functie om met click naar de volgende thumbNail te gaan

next.addEventListener("click", function() {
	// console.log(`background ${backgroundImg[counter]}`)
  console.log(thumbNail);
  console.log(counter);
  if(counter >= thumbNail.length-1) {  
    thumbNail[counter].classList.remove("active");   
    counter = 0;
    recordImg.src = `${backgroundImg[counter]}`;
    thumbNail[counter].classList.add("active");     
    return;
  }
  counter++;
  recordImg.src = `${backgroundImg[counter]}`; 
  thumbNail[counter].classList.add("active");
  thumbNail[counter-1].classList.remove("active");
})

// functie om met click een thumbNail terug te gaan

prev.addEventListener("click", function() {
  console.log(thumbNail);
  console.log(counter);
  
  if(counter <= 0) {
    thumbNail[counter].classList.remove("active");  
    counter = thumbNail.length-1;
    recordImg.src = `${backgroundImg[counter]}`;
    thumbNail[counter].classList.add("active");
    return;
  }
  counter--;
  recordImg.src = `${backgroundImg[counter]}`;  
  thumbNail[counter].classList.add("active");
  thumbNail[counter+1].classList.remove("active");
})

