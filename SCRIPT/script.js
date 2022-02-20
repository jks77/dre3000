const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbNail = document.getElementsByClassName("thumbnail");
const preview = document.querySelector(".preview");
const recordImg = document.getElementById("record-img");
const thumbnailCover = document.querySelector(".thumbnail-cover");
const thumbnailRecord = document.querySelector(".thumbnail-record");
const thumbnailInfo = document.querySelector(".thumbnail-info");

// navigation 

closeButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
});

openButton.addEventListener('click', () => {
	nav.classList.add('navigation-open');
});

// const records kan beter andere file van maken en importeren
const records = [
  {
  id: 1,
  naamArtiest: "Sugarhill Gang",
  naamAlbum: "Selftitled",
  fotoAlbum: ["PHOTOS/LPS/The Sugar Hill Gang - Sugarhill Gang - front.jpg", "PHOTOS/LPS/The Sugar Hill Gang - Sugarhill Gang.jpg"]
  ,
	fotoPlaat: ["PHOTOS/LPS/The Sugar Hill Gang - Sugarhill Gang A.jpg","PHOTOS/LPS/The Sugar Hill Gang - Sugarhill Gang B.jpg"],
  info: "PHOTOS/LPS/side 1 record vierkant.jpg"
  }
]


thumbnailCover.addEventListener("click", function() {
  console.log(thumbnailCover.className);
  if(thumbnailCover.getAttribute("src") == records[0].fotoAlbum[0]) {
    thumbnailCover.setAttribute("src", records[0].fotoAlbum[1]);
    recordImg.setAttribute("src", records[0].fotoAlbum[1]);
  } else {
    thumbnailCover.setAttribute("src", records[0].fotoAlbum[0]);
    recordImg.setAttribute("src", records[0].fotoAlbum[0]);
  }
})


thumbnailRecord.addEventListener("click", function() {
	if(thumbnailRecord.getAttribute("src") == records[0].fotoPlaat[0]) {
    thumbnailRecord.setAttribute("src", records[0].fotoPlaat[1]);
    recordImg.setAttribute("src", records[0].fotoPlaat[1]);
  } else {
    thumbnailRecord.setAttribute("src", records[0].fotoPlaat[0]);
    recordImg.setAttribute("src", records[0].fotoPlaat[0]);
  }
})

thumbnailInfo.addEventListener("click", function() {
    recordImg.setAttribute("src", records[0].info);
  })

const backgroundImg = [
	"PHOTOS/LPS/The Sugar Hill Gang - Sugarhill Gang.jpg", 
	"PHOTOS/LPS/cover achterkant vierkant.jpg",
	"PHOTOS/LPS/side 1 record vierkant.jpg"                     
]

let counter = 0;

// functie om op elke thumbNail de class 'active' te verwijderen en op aangeklikte thumnail toe te voegen

for(let i = 0; i < (thumbNail.length); i++) {
	thumbNail[i].addEventListener('click', function() {
	  for(let i = 0; i < thumbNail.length; i++) {
	   thumbNail[i].classList.remove("active");      
    }        
	  thumbNail[i].classList.add("active");  
	  // recordImg.src = `${backgroundImg[i]}`;
    counter = i;
	})
}

// functie om met click naar de volgende thumbNail te gaan

// next.addEventListener("click", function() {
	// console.log(`background ${backgroundImg[counter]}`)
//   console.log(thumbNail);
//   console.log(counter);
//   if(counter >= thumbNail.length-1) {  
//     thumbNail[counter].classList.remove("active");   
//     counter = 0;
//     recordImg.src = `${backgroundImg[counter]}`;
//     thumbNail[counter].classList.add("active");     
//     return;
//   }
//   counter++;
//   recordImg.src = `${backgroundImg[counter]}`; 
//   thumbNail[counter].classList.add("active");
//   thumbNail[counter-1].classList.remove("active");
// })

// functie om met click een thumbNail terug te gaan

// prev.addEventListener("click", function() {
//   console.log(thumbNail);
//   console.log(counter);
  
//   if(counter <= 0) {
//     thumbNail[counter].classList.remove("active");  
//     counter = thumbNail.length-1;
//     recordImg.src = `${backgroundImg[counter]}`;
//     thumbNail[counter].classList.add("active");
//     return;
//   }
//   counter--;
//   recordImg.src = `${backgroundImg[counter]}`;  
//   thumbNail[counter].classList.add("active");
//   thumbNail[counter+1].classList.remove("active");
// })

// cover.addEventListener("click", function() {
//   if(recordImg.getAttribute("src") == coverImg[0]) {
//     recordImg.setAttribute("src", coverImg[1]);
//    console.log(recordImg.getAttribute("src"))
//   }
  
//   if(cover.getAttribute("src") == coverImg[0]) {  
//     cover.src = coverImg[1]; 
//     recordImg.setAttribute("src", coverImg[1]); 
//     console.log("recordimg = " + " " + recordImg.src);
//     console.log("cover = " + " " + cover.src);
//     console.log(cover.getAttribute("src"));
//     console.log(recordImg.getAttribute("src") + "coverimg0 =" + coverImg[0]) ;
    
//     console.log("fuck " + recordImg.getAttribute("src"));
//     return;
//     }      
//     console.log(cover.getAttribute("src"));
//     console.log(recordImg.getAttribute("src"));
//     cover.src = coverImg[0];
//     recordImg.src = coverImg[0];
//     console.log("recordimg 2 = " + " " + recordImg.src);
//     console.log("cover 2 = " + " " + cover.src);   
// })
// })