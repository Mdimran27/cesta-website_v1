// JavaScript for Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// JavaScript for Fade-in Animations
const fadeInElements = document.querySelectorAll(".fade-in");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

fadeInElements.forEach((element) => {
  observer.observe(element);
});

// Fix for "What We Do" navigation
document.addEventListener("DOMContentLoaded", function () {
  const whatWeDoLink = document.querySelector('a[href="./services.html"]');
  const whatWeDoDropdown = document.getElementById("whatWeDoDropdown");

  // Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (whatWeDoLink && whatWeDoDropdown) {
    // Handle direct click on "What We Do" link
    whatWeDoLink.addEventListener("click", function (e) {
      // Only navigate if it's a direct click (not from dropdown toggle)
      if (!e.target.classList.contains("dropdown-toggle")) {
        window.location.href = "./services.html";
      }
    });

    // Handle mobile dropdown toggle
    whatWeDoDropdown.addEventListener("click", function (e) {
      // On mobile, if dropdown is closed, open it instead of navigating
      if (window.innerWidth < 992) {
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu && !dropdownMenu.classList.contains("show")) {
          e.preventDefault();
          // Use Bootstrap's dropdown toggle
          const bsDropdown = new bootstrap.Dropdown(this);
          bsDropdown.toggle();
        }
      }
    });

    // Add hover effect for desktop
    const whatWeDoItem = whatWeDoLink.parentElement;
    if (whatWeDoItem) {
      whatWeDoItem.addEventListener("mouseenter", function () {
        if (window.innerWidth >= 992) {
          const dropdownMenu = this.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            dropdownMenu.classList.add("show");
          }
        }
      });

      whatWeDoItem.addEventListener("mouseleave", function () {
        if (window.innerWidth >= 992) {
          const dropdownMenu = this.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            dropdownMenu.classList.remove("show");
          }
        }
      });
    }
  }

  // if (tabBtns && tabPanes) {
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons and panes
        tabBtns.forEach((b) => b.classList.remove("active"));
        tabPanes.forEach((p) => p.classList.remove("active"));

        // Add active class to clicked button
        this.classList.add("active");

        // Show corresponding tab pane
        const tabId = this.getAttribute("data-tab");
        const tabPane = document.getElementById(tabId);
        if (tabPane) {
          tabPane.classList.add("active");
        }
      });
    });
  // }
});
