let totalClicks = 3;
let maxClicks = 3;
function Album(name, src, clicks, favourite) {
  // constructor function
  this.name = name;
  this.src = src;
  this.clicks = clicks; //these are empty properties (src, name, clicks)
  this.favourite = favourite;
  //putting a number zero means me can change it
  Album.allAlbums.push(this); //we are calling the new function, and pushing the 'this' into the all products array. it belongs to the constructor.
}

Album.allAlbums = [];
// setting a constructor of PRODUCT outside of my function. everytime call new. Product the above will now run.

const albumNames = [
  "air-moon-safari",
  "alfa-mist- variables",
  "alfa-mist-antiphon",
  "bowie-hunkydory",
  "Cure-wish",
  "drycleaning-ep",
  "chris-and-cosey-Elemental7",
  "bob-marley-exodus",
  "fleetwood-mac-rumours",
  "goatgirl-on-all-fours",
  "mehmet-aslan-the-sun-is-parallel",
  "chris-and-cosey-muzik-fantastique",
  "Nivarna-never-mind",
  "the-orb-adventures-beyond-the-ultra-world",
  "the-orb-sounds-are-out-of-bounds",
  "iron-+-wine-our-endless-numbered-days",
  "Plaid-double-figure",
  "Plaid-mind-over-rhythm",
  "SAULT 11",
  "SAULT aiir",
  "siouxsie-and-the-banshees",
  "smiths-queenisdead",
  "steevio-acatalepsy",
  "the-strokes-is-this-it",
  "trees-speak-mind-maze",
  "the-orb-U.F.ORB",
  "wolfmother-wolfmother",
  "Nicolette-no-goverment",
  "vulfpeck-the-joy-of-music",
];

function randomAlbumIndex() {
  return Math.floor(Math.random() * Album.allAlbums.length);
}

for (let i = 0; i < albumNames.length; i++) {
  new Album(albumNames[i], `favourite/${albumNames[i]}.jpg`, 0);
}
// have the images chosen randomly from array

function renderImages() {
  //retrieve image elements (tags) - the variable IS the tag, setting the variable to be the image
  //'img1' is an object here. get element is the tag

  const imgContainer = document.getElementById("img-container");

  for (let i = 0; i < Album.allAlbums.length; i++) {
    let img = document.createElement("img");
    // create new image tag document.createElement
    // set the src of image tag to be the next item in the array -setting the src like 81

    img.alt = Album.allAlbums[i].name;
    img.src = Album.allAlbums[i].src;
    if (Album.allAlbums[i].favourite == true) {
      img.classList.add("favourite");
    }
    //append that imge to container

    imgContainer.appendChild(img);
  }

  // setting the src attribute of imgs to be src from random products from image index . use alt bcs its name
  //'img1' is an attribute - we are setting this to the value of the name of our product
}
renderImages();

/// using renderImages() as a template, create a new function that does the exact same thing, except, only puts the image onto the page if it is a favourite

function renderFavourites() {
  const favourite = document.getElementById("favourite-list");

  favourite.innerHTML = "";
  for (let k = 0; k < Album.allAlbums.length; k++) {
    let theAlbum = Album.allAlbums[k];
    let li = document.createElement("li");
    li.textContent = `${theAlbum.name}: ${theAlbum.clicks} votes`;
    favourite.appendChild(li);
  }
}
renderFavourites();

if (localStorage.getItem("albumData") === null) {
  for (let i = 0; i < albumNames.length; i++) {
    new Album(albumNames[i], `albumcovers/$albumtNames [i].jpeg`, 0, 0);
  }
} else {
  const albumData = JSON.parse(localStorage.getItem("albumData"));

  //creates a new product
  for (let i = 0; i < albumData.length; i++) {
    new Album(
      albumData[i].name,
      albumData[i].src,
      albumData[i].clicks,
      albumData[i].favourite
    );
  }
}

//listen for clicks on the images
function handleClick(event) {
  //we loop through our projects, checking if the event - the actual click itself, the target is the event and the alt is the image.
  //

  console.log(event.target);
  for (let i = 0; i < Album.allAlbums.length; i++) {
    //every album - checks if alt tag is same as name
    console.log(Album.allAlbums[i]);
    if (event.target.alt === Album.allAlbums[i].name) {
      Album.allAlbums[i].favourite = true;
      Album.allAlbums[i].clicks++;

      break;
    }
  }

  totalClicks++;
  console.log(totalClicks);

  const albumsStr = JSON.stringify(Album.allAlbums);
  localStorage.setItem("albumData", albumsStr);
  renderFavourites();
}
// check max clicks each time we click
//if we have dont render more imgs
// remove the event listener on the img container
//if we havent render more images

//we can 'remove' the event listener bcs the parameters are idnetical, so we can write remove because the 'click,handleclick' on the last line of code' is the same .

function renderResults() {
  const rating = document.getElementById("rating");

  for (let i = 0; i < Album.allAlbums.length; i++) {
    let theAlbum = Album.allAlbums[i];
    let li = document.createElement("li");
    li.textContent = `${theAlbum.name}: ${theAlbum.clicks} clicks ${theAlbum.views} views`;
    rating.appendChild(li);
  }
}

renderImages();

//   // add click totals to chart
//   const imgContainer = document.getElementById("img-container");
//   imgContainer.addEventListener("click", handleClick);

//   function renderChart() {}
//   let labels = [];
//   let albumNames = [];
//   let favourite = [];

//   //variable one is the chart

//   function renderChart() {
//     const theChart = document.getElementById("chart");
//     let labels = [];
//     let albumData = [];
//     let favouriteData = [];

//     for (let i = 0; i < Album.allAlbums.length; i++) {
//       labels.push(Album.allAlbums[i].name);
//       albumData.push(Album.allAlbums[i].albumNames);
//       favouriteData.push(Product.allProducts[i].favourite);
//     }
//   }
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "# of views",
//         data: viewsData,
//         borderWidth: 1,
//       },
//       {
//         label: "# of Votes",
//         data: clicksData,
//         borderWidth: 1,
//       },
//     ],
//   };
//   const config = {
//     type: "bar",
//     data: data,
//   };
//   new Chart(theChart, config);
// }
