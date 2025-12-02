// // JavaScript for Navbar Scroll Effect
// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

// // JavaScript for Fade-in Animations
// const fadeInElements = document.querySelectorAll(".fade-in");

// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1, // Trigger when 10% of the element is visible
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("visible");
//       observer.unobserve(entry.target); // Stop observing once visible
//     }
//   });
// }, observerOptions);

// fadeInElements.forEach((element) => {
//   observer.observe(element);
// });

// // Fix for "What We Do" navigation
// document.addEventListener("DOMContentLoaded", function () {
//   const whatWeDoLink = document.querySelector('a[href="./services.html"]');
//   const whatWeDoDropdown = document.getElementById("whatWeDoDropdown");

//   // Tabs
//   const tabBtns = document.querySelectorAll(".tab-btn");
//   const tabPanes = document.querySelectorAll(".tab-pane");

//   if (whatWeDoLink && whatWeDoDropdown) {
//     // Handle direct click on "What We Do" link
//     whatWeDoLink.addEventListener("click", function (e) {
//       // Only navigate if it's a direct click (not from dropdown toggle)
//       if (!e.target.classList.contains("dropdown-toggle")) {
//         window.location.href = "./services.html";
//       }
//     });

//     // Handle mobile dropdown toggle
//     whatWeDoDropdown.addEventListener("click", function (e) {
//       // On mobile, if dropdown is closed, open it instead of navigating
//       if (window.innerWidth < 992) {
//         const dropdownMenu = this.nextElementSibling;
//         if (dropdownMenu && !dropdownMenu.classList.contains("show")) {
//           e.preventDefault();
//           // Use Bootstrap's dropdown toggle
//           const bsDropdown = new bootstrap.Dropdown(this);
//           bsDropdown.toggle();
//         }
//       }
//     });

//     // Add hover effect for desktop
//     const whatWeDoItem = whatWeDoLink.parentElement;
//     if (whatWeDoItem) {
//       whatWeDoItem.addEventListener("mouseenter", function () {
//         if (window.innerWidth >= 992) {
//           const dropdownMenu = this.querySelector(".dropdown-menu");
//           if (dropdownMenu) {
//             dropdownMenu.classList.add("show");
//           }
//         }
//       });

//       whatWeDoItem.addEventListener("mouseleave", function () {
//         if (window.innerWidth >= 992) {
//           const dropdownMenu = this.querySelector(".dropdown-menu");
//           if (dropdownMenu) {
//             dropdownMenu.classList.remove("show");
//           }
//         }
//       });
//     }
//   }

//   // if (tabBtns && tabPanes) {
//     tabBtns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         // Remove active class from all buttons and panes
//         tabBtns.forEach((b) => b.classList.remove("active"));
//         tabPanes.forEach((p) => p.classList.remove("active"));

//         // Add active class to clicked button
//         this.classList.add("active");

//         // Show corresponding tab pane
//         const tabId = this.getAttribute("data-tab");
//         const tabPane = document.getElementById(tabId);
//         if (tabPane) {
//           tabPane.classList.add("active");
//         }
//       });
//     });
//   // }
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const currentPage = window.location.pathname.split("/").pop() || "index.html";
//   const links = document.querySelectorAll(".nav-link");

//   links.forEach(link => {
//     const href = link.getAttribute("href");

//     // Match current page
//     if (href === currentPage) {
//       link.classList.add("active");

//       // Highlight parent if it's inside a dropdown
//       const dropdownParent = link.closest(".what-we-do");
//       if (dropdownParent) {
//         const mainLink = dropdownParent.querySelector(".main-link");
//         if (mainLink) mainLink.classList.add("active");
//       }
//     }

//     // Special case for HOME page
//     if ((currentPage === "index.html" || currentPage === "") && link.textContent.trim() === "HOME") {
//       link.classList.add("active");
//     }
//   });
// });



// New script:

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // 1️⃣ Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2️⃣ Fade-in Animations
  const fadeInElements = document.querySelectorAll(".fade-in");
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  fadeInElements.forEach(el => observer.observe(el));

  // 3️⃣ Dropdown Navigation Handling
  const dropdowns = document.querySelectorAll(".what-we-do");
  dropdowns.forEach(item => {
    const mainLink = item.querySelector(".main-link");
    const toggle = item.querySelector(".toggle-icon");

    // Desktop hover effect
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 992) {
        const menu = item.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("show");
      }
    });
    item.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 992) {
        const menu = item.querySelector(".dropdown-menu");
        if (menu) menu.classList.remove("show");
      }
    });

    // Mobile toggle click
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
          const menu = this.nextElementSibling;
          if (menu && !menu.classList.contains("show")) {
            e.preventDefault();
            const bsDropdown = new bootstrap.Dropdown(this);
            bsDropdown.toggle();
          }
        }
      });
    }

    // Direct click navigation
    if (mainLink) {
      mainLink.addEventListener("click", function (e) {
        if (!e.target.classList.contains("dropdown-toggle")) {
          window.location.href = mainLink.href;
        }
      });
    }
  });

  // 4️⃣ Tabs (if present)
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      this.classList.add("active");
      const tabId = this.getAttribute("data-tab");
      const tabPane = document.getElementById(tabId);
      if (tabPane) tabPane.classList.add("active");
    });
  });

  // 5️⃣ Active Page Highlighting
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach(link => {
    let href = link.getAttribute("href");

    // Ignore links that are just '#' anchors
    if (!href || href === "#") return;

    // Normalize paths for comparison
    href = href.split("/").pop();
// console.log(href)
      console.log(currentPath)
    if (href === currentPath) {
      
      console.log(href === currentPath)
      link.classList.add("active");

      // If it's inside a dropdown, highlight the parent
      const dropdownParent = link.closest(".services");
      if (dropdownParent) {
        const parentLink = dropdownParent.querySelector(".main-link");
        if (parentLink) parentLink.classList.add("active");
      }
    }

    // Special case: Home page
    if ((currentPath === "index.html" || currentPath === "") && link.textContent.trim().toUpperCase() === "HOME") {
      link.classList.add("active");
    }
  });

});
