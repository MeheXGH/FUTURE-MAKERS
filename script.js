const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBt = document.querySelector(".next-slide");
const prevBt = document.querySelector(".prev-slide");

let slideIndex = 0;
slides[slideIndex].classList.add('active');


function previousSlide() {
    const currentSlide = slides[slideIndex];
    const input = currentSlide.querySelector('input');
    const inputValue = input.value.trim(); // Remove leading/trailing spaces


    currentSlide.classList.remove('active');

    // Check if it's not the first slide
    if (slideIndex > 0) {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    }

    slides[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}




function nextSlide() {
    const currentSlide = slides[slideIndex];
    const input = currentSlide.querySelector('input');
    const inputValue = input.value.trim(); // Remove leading/trailing spaces

    // Check if the input value is empty
    if (inputValue === '') {
        alert('Please Enter Required Details');
        return; // Exit the function and do not proceed to the next slide
    }

    currentSlide.classList.remove('active');
    if (slideIndex < slides.length - 1) {
        slideIndex = (slideIndex + 1) % slides.length;
    }
    slides[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Add event listener for Enter key press on all input fields with the "common-input" class
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && event.target.classList.contains('common-input')) {
        nextSlide();
        getValue();
    }
});


// Define an empty object to store user information
const userInfo = {};

function getValue() {
    // Get the input elements by their IDs
    var userNameInput = document.getElementById("userInput");
    var userAgeInput = document.getElementById("userInput2");
    var userClassInput = document.getElementById("userInput3");
    var userExamMarksInput = document.getElementById("userInput4");

    // Get the values entered by the user
    var userName = userNameInput.value;
    var userAge = userAgeInput.value;
    var userClass = userClassInput.value;
    var userExamMarks = userExamMarksInput.value;

    // Populate the userInfo object with the user information
    userInfo.name = userName;
    userInfo.age = userAge;
    userInfo.class = userClass;
    userInfo.examMarks = userExamMarks;

    // Display the userInfo object in the console
    console.log(userInfo);

    // Update the HTML element with the user's name
    var userNameDisplay = document.getElementById("userNameDisplay");
    userNameDisplay.textContent = "Hi! " + userName;

}

// Get references to the dropdown button and content
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

// Toggle the dropdown menu on button click
dropdownButton.addEventListener("click", function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Close the dropdown menu if the user clicks outside of it
document.addEventListener("click", function(event) {
    if (!event.target.matches("#dropdownButton")) {
        dropdownContent.style.display = "none";
    }
});
