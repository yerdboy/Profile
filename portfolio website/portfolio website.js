// Function to filter projects by name
function filterProjectsByName() {
  const input = document.getElementById("project-filter");
  const filter = input.value.toUpperCase();
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    const title = project.querySelector("h3");
    if (title.textContent.toUpperCase().includes(filter)) {
      project.style.display = "";
    } else {
      project.style.display = "none";
    }
  });
}

document
  .getElementById("project-filter")
  .addEventListener("input", filterProjectsByName);

//navbar
const sidebar = document.querySelector(".sidebar");
const navLink = document.querySelector(".nav_link");

sidebar.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Show hire modal
document.getElementById("hire-button").addEventListener("click", function () {
  document.getElementById("hire-modal").style.display = "block";
});

// Close modal when clicking on the close button
document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("hire-modal").style.display = "none";
  });

// Toggle dark mode when clicking the dark mode button
document
  .getElementById("toggle-dark-mode")
  .addEventListener("click", toggleDarkMode);
document
  .getElementById("toggle-dark-mode-sidebar")
  .addEventListener("click", toggleDarkMode);

// Filter projects when typing in the filter input field
document
  .getElementById("project-filter")
  .addEventListener("input", filterProjectsByName);

// Function to open specific tab content
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to open sidebar
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

// Function to close sidebar
function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}

// Image slider functionality
var slideIndex = 0;
var slides = document.getElementsByClassName("slides");

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

showSlides(); // Start the slideshow automatically
