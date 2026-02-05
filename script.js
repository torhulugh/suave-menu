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
    "desktopMenu-collapse-button",
  );
  // desktop-open-button
  const desktopOpenButton = document.getElementById("desktopMenu-open-button");
  // desktop-open-button
  const desktopMenuOpenBtnIcon = document.getElementById(
    "desktopMenu-open-btn-icon",
  );
  // desktop-open-button
  const desktopMenuCollapseBtnIcon = document.getElementById(
    "desktopMenu-collapse-btn-icon",
  );
  // desktop menu
  const desktopMenu = document.getElementById("desktop-menu");
  const pageTheme = document.getElementById("theme");
  const themeName = document.getElementById("themeName");
  // desktop-background-color
  const desktopBackground = document.getElementById(
    "desktopMenu-background-color",
  );
  // desktop menu icons
  const desktopMenuIcons = document.querySelectorAll(".desktopMenuIcon");
  const desktopMenuIconsNames = document.querySelectorAll(
    ".desktopMenuIconsName",
  );
  const body = document.body;
  //   ----------------- mobile menu elements ----------------- \\
  // mobile-menu
  const mobileMenu = document.getElementById("mobile-menu");
  // mobile-background-color
  const mobileBackground = document.getElementById(
    "mobileMenu-background-color",
  );
  // mobileMenu-icon-tray1
  const mobileMenuIconTray1 = document.getElementById("mobileMenu-icon-tray1");
  // mobile menu icon containers
  const mobileMenuIconContainers = document.querySelectorAll(
    ".mobileMenuIconContainer",
  );
  // mobile menu icons
  const mobileMenuIcons = document.querySelectorAll(".mobileMenuIcon");
  //mobile menu icons names
  const mobileMenuIconsNames = document.querySelectorAll(
    ".mobileMenuIconsName",
  );
  //   mobile menu close button
  const mobileMenuCloseBtn = document.getElementById("mobile-menu-close-btn");
  mobileMenuIcons[5].style.display = "none";

  pageTheme.onclick = function () {
    if (body.style.backgroundColor === "rgb(230, 230, 230)") {
      applyDarkMode();
      saveThemePreference("dark");
    } else {
      applyLightMode();
      saveThemePreference("light");
    }
  };

  //   Mobile menu open button....................................................................................
  mobileMenuIconContainers[4].onclick = function () {
    mobileMenu.style.transform = "translateY(0)";
    mobileMenuIconContainers[4].style.display = "none";
    mobileMenuIcons[5].style.display = "flex";
    mobileMenuIcons[5].style.zIndex = "9999";
    mobileMenuCloseBtn.style.display = "flex";
  };
  mobileMenuCloseBtn.onclick = function () {
    mobileMenu.style.transform = "translateY(90px)";
    mobileMenuIconContainers[4].style.display = "flex";
    mobileMenuIcons[5].style.display = "none";
    if (mobileMenuIconsNames[4]) {
      mobileMenuIconsNames[4].textContent = "More";
      mobileMenuCloseBtn.style.display = "none";
    }
  };

  // Function to apply light mode styles
  function applyLightMode() {
    if (siteLogo) siteLogo.style.backgroundColor = "#fff";
    if (desktopCollapseButton) {
      desktopCollapseButton.style.boxShadow = " 0px 4px 4px 0px #ffffff50";
    }
    if (desktopMenu) desktopMenu.style.backgroundColor = "#ebebeb21";
    if (desktopBackground) {
      desktopCollapseButton.style.backgroundColor = "#E1E0E3";
      desktopBackground.style.backgroundImage =
        "linear-gradient(50deg, #e9eaee80, #f3f3f38f, #f3f3f39f, #e9eaee93, #ffffff70)";
      desktopBackground.style.backgroundColor = "#efeff05e";
      desktopBackground.style.border = "1px solid #ffffff";
      desktopBackground.style.boxShadow =
        "10px 13px 10px #cac7c76a, -10px -13px 10px #dddddd70";
      desktopBackground.style.backdropFilter = "opacity(70%) blur(8px)";
      desktopMenuIconsNames.forEach((name) => {
        name.style.color = "#282a2c";
      });
    }
    desktopMenuIcons.forEach((icon) => {
      icon.style.filter = "brightness(40%)";
    });
    body.style.backgroundColor = "#E6E6E6";
    if (lightModeToggle) lightModeToggle.style.display = "none";
    if (darkModeToggle) darkModeToggle.style.display = "flex";
    if (darkModeToggle) darkModeToggle.style.filter = "brightness(80.8%)";
    if (themeName) themeName.textContent = "Dark";
    themeName.style.color = "#96a1b2";
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
    desktopMenuIconsNames.forEach((name) => {
      name.style.color = "#979292";
    });
    desktopMenuIcons.forEach((icon) => {
      icon.style.filter = "brightness(80.8%)";
    });
    body.style.backgroundColor = "#161616";
    if (lightModeToggle) lightModeToggle.style.display = "flex";
    if (darkModeToggle) darkModeToggle.style.display = "none";
    if (themeName) themeName.textContent = "Light";
    themeName.style.color = "#f2f5e6";
  }

  // save theme preference to localStorage
  function saveThemePreference(theme) {
    localStorage.setItem("theme-preference", theme);
  }

  // get theme preference from localStorage
  function getThemePreference() {
    const saved = localStorage.getItem("theme-preference");
    if (saved) {
      return saved;
    }
    // If no saved preference, check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light"; // fallback to light mode
  }

  // Apply saved theme on page load
  const savedTheme = getThemePreference();
  if (savedTheme === "dark") {
    applyDarkMode();
    saveThemePreference("dark"); // Save the preference if it was detected from system
  } else {
    applyLightMode();
    saveThemePreference("light"); // Save the preference if it was detected from system
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

  // Desktop Menu collapse button event
  if (desktopCollapseButton) {
    desktopCollapseButton.onclick = function () {
      header.style.transformOrigin = "96.5% 96.5%";
      header.style.transform = "scaleX(0)";
      header.style.transition = "transform 0.3s ease-in-out";
      header.style.overflow = "hidden";
      desktopCollapseButton.style.display = "none";
      desktopOpenButton.style.display = "flex";
    };
  }
  // Desktop Menu open button event
  if (desktopOpenButton) {
    desktopOpenButton.onclick = function () {
      header.style.transformOrigin = "96.5% 96.5%";
      header.style.transform = "scaleX(1)";
      header.style.transition = "transform 0.3s ease-in-out";
      header.style.overflow = "visible";
      desktopCollapseButton.style.display = "flex";
      desktopOpenButton.style.display = "none";
    };
  }

  // desktop menu elements
  const desktopMenuIcon = document.getElementsByClassName(
    "desktopMenuIconContainer",
  );

  const desktopMenuIconsHover = document.getElementsByClassName(
    "desktopMenuIconHoverEffect",
  );
  let desktopIconIndex = null;

  // mouse enter
  Array.from(desktopMenuIcon).forEach((desktopMenuIconContainer, index) => {
    desktopMenuIconContainer.onmouseover = menuIconHoverEffect;
    function menuIconHoverEffect() {
      desktopIconIndex = index;
      desktopMenuIconsHover[desktopIconIndex].style.display = "flex";
    }
  });
  // mouse leave
  Array.from(desktopMenuIcon).forEach((desktopMenuIconContainer, index) => {
    desktopMenuIconContainer.onmouseleave = menuItemMouseLeave;
    function menuItemMouseLeave() {
      desktopIconIndex = index;
      desktopMenuIconsHover[desktopIconIndex].style.display = "none";
    }
  });

  // Theme button hover effects
  if (pageTheme) {
    pageTheme.onmouseenter = function() {
      if (body.style.backgroundColor === "rgb(230, 230, 230)") {
        // Light mode hover effect
        pageTheme.style.backgroundColor = "#9dbee7)";
        
        
      } else {
        // Dark mode hover effect
        pageTheme.style.backgroundColor = "#595959";
      }
    };
    
    pageTheme.onmouseleave = function() {
      // Reset to default background
      pageTheme.style.backgroundColor = "";
      pageTheme.style.boxShadow = "";
    };
  }
};
// -------------------------------------------------------------------------------
