document.addEventListener("DOMContentLoaded", function () {
  const welcomeScreen = document.getElementById("welcome-screen");
  const backToTopButton = document.getElementById("back-to-top");
  const socialMediaButton = document.getElementById("social-media");
  const socialMediaLinks = document.getElementById("social-media-links");
  let body = document.getElementsByTagName("body")[0];

  setTimeout(function () {
    welcomeScreen.style.display = "none";
  }, 1000);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Schließen der Social-Media-Links, wenn außerhalb geklickt wird
  document.addEventListener("click", function (event) {
    if (
      !socialMediaLinks.contains(event.target) &&
      event.target !== socialMediaButton
    ) {
      socialMediaLinks.style.display = "none";
    }
  });

  socialMediaButton.addEventListener("click", function () {
    if (socialMediaLinks.style.display === "block") {
      socialMediaLinks.style.display = "none";
    } else {
      socialMediaLinks.style.display = "inline-block";
    }
  });
});
