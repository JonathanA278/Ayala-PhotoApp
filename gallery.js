let mCurrentIndex = 0 // done
let mImages = [] // done 
const mUrl = 'myImages.json' // done
const mWaitTime = 5000 // unchanged

$(document).ready(function() {

})

$(document).ready(function()  {
  $('.details').hide() 

  $("#moreIndicator").click(function () {
    $("#metadata").slideToggle();
    $(this).toggleClass("rotate");
  })

function showPhoto(index) {
  let photo = myImages[index];

  $("galleryImage").attr("src", photo.imgPath);
  $("description").text(photo.description);
  $("location").text(photo.location);
  $("#date").text(photo.date);
}
  // Call a function here to start the timer for the slideshow

  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section

  // Select the "Next Photo" button and add a click event to call showNextPhoto

  // Select the "Previous Photo" button and add a click event to call showPrevPhoto

  // Call fetchJSON() to load the initial set of images hi
  fetchJSON()
})



// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  
      $.getJSON(mUrl, function(data) {
    myImages = data;

    showPhoto(currentIndex);

    startTimer();
  });
  // Use $.getJSON here to request the JSON data from mUrl
  // On success, parse the JSON and push each image object into mImages array
  // After JSON is loaded, call swapPhoto() to display the first image
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  currentIndex++;

  if (currentIndex >= myImages.length) {
    currentIndex = 0;
  }
  showPhoto(currentIndex);
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
       currentIndex--;

     if(currentIndex< 0) {
      currentIndex = myImages.length - 1;
     }

     showPhoto(currentIndex)
}

// Starter code for the timer function
function startTimer () {
  slideTimer = setInterval(showNextPhoto, 5000)
}
