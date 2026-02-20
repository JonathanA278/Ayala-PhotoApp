// Track current image index
let mCurrentIndex = 0

// Array to hold image objects
let mImages = []

// URL of JSON file (must be in same folder as HTML)
const mUrl = 'myImages.json'

// Interval for slideshow auto-advance
const mWaitTime = 5000

// Timer variable
let mTimer = null

$(document).ready(() => {
    // Hide details initially
    $('.details').hide()

    // Load JSON images
    fetchJSON()

    // Next button click
    $('#nextPhoto').click(() => {
        showNextPhoto()
    })

    // Previous button click
    $('#prevPhoto').click(() => {
        showPrevPhoto()
    })
})

// Fetch JSON and store images
function fetchJSON() {
    $.getJSON(mUrl, function(data) {
        mImages = data // store array
        swapPhoto()     // display first image
        startTimer()    // start auto slideshow
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Failed to load JSON:", textStatus, error)
    })
}

// Display current image and metadata
function swapPhoto() {
    const currentImage = mImages[mCurrentIndex]

    $('#photo').attr('src', currentImage.imgPath)
    $('.location').text('Location: ' + currentImage.location)
    $('.description').text('Description: ' + currentImage.description)
    $('.date').text('Date: ' + currentImage.date)
}

// Go to next photo
function showNextPhoto() {
    mCurrentIndex++
    if (mCurrentIndex >= mImages.length) mCurrentIndex = 0
    swapPhoto()
}

// Go to previous photo
function showPrevPhoto() {
    mCurrentIndex--
    if (mCurrentIndex < 0) mCurrentIndex = mImages.length - 1
    swapPhoto()
}

// Start automatic slideshow timer
function startTimer() {
    if (mTimer !== null) {
        clearInterval(mTimer)
    }
    mTimer = setInterval(() => {
        showNextPhoto()
    }, mWaitTime)
}