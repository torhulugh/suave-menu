window.onload = function () {
  // ----------------- header elements ----------------- \\
  // header
  const header = document.querySelector("header");
  // header-site-logo
  const siteLogo = document.getElementById("header-site-logo");
  // //light-mode-icon
  const lightModeToggle = document.getElementById("light-mode");
  // dark-mode-icon
  const darkModeToggle = document.getElementById("dark-mode");
  // desktop-collapse-button
  const desktopCollapseButton = document.getElementById(
    "desktopMenu-collapse-button"
  );
  // desktop-open-button
  const desktopOpenButton = document.getElementById("desktopMenu-open-button");
  // desktop-open-button
  const desktopMenuOpenBtnIcon = document.getElementById(
    "desktopMenu-open-btn-icon"
  );
  // desktop-open-button
  const desktopMenuCollapseBtnIcon = document.getElementById(
    "desktopMenu-collapse-btn-icon"
  );
  // desktop menu
  const desktopMenu = document.getElementById("desktop-menu");
  // desktop-background-color
  const desktopBackground = document.getElementById(
    "desktopMenu-background-color"
  );
  // desktop menu icons
  const desktopMenuIcons = document.querySelectorAll(".desktopMenuIcon");
  const body = document.body;
  //   ----------------- mobile menu elements ----------------- \\
  // mobile-menu
  const mobileMenu = document.getElementById("mobile-menu");
  // mobile-background-color
  const mobileBackground = document.getElementById(
    "mobileMenu-background-color"
  );
  // mobileMenu-icon-tray1
  const mobileMenuIconTray1 = document.getElementById("mobileMenu-icon-tray1");
  // mobile menu icon containers
  const mobileMenuIconContainers = document.querySelectorAll(
    ".mobileMenuIconContainer"
  );
  // mobile menu icons
  const mobileMenuIcons = document.querySelectorAll(".mobileMenuIcon");
  //mobile menu icons names
  const mobileMenuIconsNames = document.querySelectorAll(".mobilMenuIconsName");
//   mobile menu close button
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  mobileMenuIcons[5].style.display = "none";


  //   ....................................................................................
  mobileMenuIconContainers[4].onclick = function () {
    mobileMenu.style.transform = "translateY(0)";
    mobileMenuIcons[4].style.display = "none";
    mobileMenuIcons[5].style.display = "flex";
    mobileMenuIcons[5].style.zIndex = "9999";
    mobileMenuCloseBtn.style.display = "flex";

    // Check if element exists before trying to change text
    if (mobileMenuIconsNames[4]) {
      mobileMenuIconsNames[4].textContent = "About";
    }
  };
  mobileMenuCloseBtn.onclick = function () {
    mobileMenu.style.transform = "translateY(90px)";
    mobileMenuIcons[4].style.display = "flex";
    mobileMenuIcons[5].style.display = "none";

    // Check if element exists before trying to change text
    if (mobileMenuIconsNames[4]) {
      mobileMenuIconsNames[4].textContent = "More";
      mobileMenuCloseBtn.style.display = "none";
    }
  };

  // Function to apply light mode styles
  function applyLightMode() {
    if (siteLogo) siteLogo.style.backgroundColor = "#fff";
    if (desktopCollapseButton) {
      desktopCollapseButton.style.backgroundImage = "none";
      desktopCollapseButton.style.backgroundColor = "#f0f0f0ff";
      desktopCollapseButton.style.boxShadow = "0px 1px 5px 3px #acacad28";
    }
    if (desktopMenu) desktopMenu.style.backgroundColor = "#ebebeb21";
    if (desktopBackground) {
      desktopBackground.style.backgroundImage =
        "linear-gradient(50deg, #e9eaee80, #f3f3f38f, #f3f3f39f, #e9eaee93, #ffffff70)";
      desktopBackground.style.backgroundColor = "#efeff05e";
      desktopBackground.style.border = "0.5px solid #ffffff36";
      desktopBackground.style.boxShadow = "0px 3px 10px #cac7c76a";
      desktopBackground.style.backdropFilter = "opacity(70%) blur(8px)";
    }
    desktopMenuIcons.forEach((icon) => {
<<<<<<< HEAD
      icon.style.filter = "brightness(35%)";
=======
      icon.style.filter = "brightness(80.8%)";
>>>>>>> 901e29f3215324af3f4b55e7c851e12c0ed621bc
    });
    body.style.backgroundColor = "#E6E6E6";
    if (lightModeToggle) lightModeToggle.style.display = "none";
    if (darkModeToggle) darkModeToggle.style.display = "flex";
    if (darkModeToggle) darkModeToggle.style.filter = "brightness(80.8%)";
  }

  // Function to apply dark mode styles
  function applyDarkMode() {
    if (siteLogo) siteLogo.style.backgroundColor = "#000";
    if (desktopCollapseButton) {
      desktopCollapseButton.style.boxShadow = "0px 2px 5px 2px #00000050";
      desktopCollapseButton.style.backgroundImage = "none";
      desktopCollapseButton.style.backgroundColor = "#2c2b2e";
    }
    if (desktopMenu) desktopMenu.style.backgroundColor = "#0d0c0d8a";
    if (desktopBackground) {
      desktopBackground.style.backgroundImage =
        "linear-gradient(50deg, #1b1a1a7a, #0f0f0f92, #1b1a1a94, #0f0f0f94, #2726266b)";
      desktopBackground.style.backgroundColor = "#0f0f0f55";
      desktopBackground.style.border = "0.5px solid #55555505";
      desktopBackground.style.boxShadow = "0px 3px 10px #0000006a";
      desktopBackground.style.backdropFilter = "opacity(70%) blur(8px)";
    }
    desktopMenuIcons.forEach((icon) => {
      icon.style.filter = "brightness(80.8%)";
    });
    body.style.backgroundColor = "#161616";
    if (lightModeToggle) lightModeToggle.style.display = "flex";
    if (darkModeToggle) darkModeToggle.style.display = "none";
  }

<<<<<<< HEAD
  // save theme preference to localStorage
=======
  // Function to save theme preference to localStorage
>>>>>>> 901e29f3215324af3f4b55e7c851e12c0ed621bc
  function saveThemePreference(theme) {
    localStorage.setItem("theme-preference", theme);
  }

<<<<<<< HEAD
  // get theme preference from localStorage
=======
  // Function to get theme preference from localStorage
>>>>>>> 901e29f3215324af3f4b55e7c851e12c0ed621bc
  function getThemePreference() {
    return localStorage.getItem("theme-preference") || "light"; // default to light mode
  }

  // Apply saved theme on page load
  const savedTheme = getThemePreference();
  if (savedTheme === "dark") {
    applyDarkMode();
  } else {
    applyLightMode();
  }

  // Light mode toggle event
  if (lightModeToggle) {
    lightModeToggle.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      applyLightMode();
      saveThemePreference("light");
    };
  }

  // Dark mode toggle event
  if (darkModeToggle) {
    darkModeToggle.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      applyDarkMode();
      saveThemePreference("dark");
    };
  }

  // Mobile Menu collapse button event
  if (desktopCollapseButton) {
    desktopCollapseButton.onclick = function () {
      header.style.transformOrigin = "96.5% 96.5%";
      header.style.transform = "scale(50px)";
      header.style.transform = "scaleX(0)";
      header.style.transition = "transform 0.3s ease-in-out";
      header.overflow = "hidden";
      desktopCollapseButton.style.display = "none";
      desktopOpenButton.style.display = "flex";
    };
  }
  // Mobile Menu revert button event
  if (desktopOpenButton) {
    desktopOpenButton.onclick = function () {
      header.style.transformOrigin = "96.5% 96.5%";
      header.style.transform = "scaleX(100%)";
      header.style.transition = "transform 0.3s ease-in-out";
      desktopCollapseButton.style.display = "flex";
      desktopOpenButton.style.display = "none";
    };
  }
};
<<<<<<< HEAD
// -------------------------------------------------------------------------------
=======
>>>>>>> 901e29f3215324af3f4b55e7c851e12c0ed621bc
