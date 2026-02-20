let myCurrentIndex = 0 // done
let myImages = [] // done 
const mUrl = 'myImages.json' // done
const mWaitTime = 5000 // unchanged


$(document).ready(() =>  {
  $('.details').hide() 

fetchJSON()

$('#nextPhoto').click(() => {
  showNextPhoto()
})

})



// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  
      $.getJSON(mUrl, function(data) {
    myImages = data;

    swapPhoto()

  });
  // Use $.getJSON here to request the JSON data from mUrl
  // On success, parse the JSON and push each image object into mImages array
  // After JSON is loaded, call swapPhoto() to display the first image
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {

  const currentImage = myImages[myCurrentIndex]

  $('#photo').attr('src', currentImage.imgPath)
  $('.location').text('Location: ' + currentImage.location)
  $('.description').text('Description: ' + currentImage.description)
  $('.date').text('Date: ' + currentImage.date)
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  myCurrentIndex++;

  if (myCurrentIndex  >= myImages.length) {
    myCurrentIndex = 0;
  }
  swapPhoto();
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
       MyCurrentIndex--;

     if(myCurrentIndex < 0) {
      myCurrentIndex = myImages.length - 1;
     }

     swapPhoto()
}

// Starter code for the timer function
function startTimer () {
  slideTimer = setInterval(showNextPhoto, 5000)
}
