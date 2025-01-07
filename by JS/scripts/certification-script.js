
$(document).ready(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".navbar-toggler").on("click", function () {
      $("#mySidebar").toggleClass("active");
    });
    $(".closebtn").on("click", function () {
      $("#mySidebar").removeClass("active");
    });
  } else {
    $("#mySidebar").removeClass("active");
  }
  $("#fullpage").fullpage({
    responsiveWidth: 1200,
    scrollHorizontally: true,
    navigation: false,
    autoScrolling: false,
    bigSectionsDestination: top,
    anchors: [
      "ceticication-section1",
      "ceticication-section2",
      "ceticication-section3",
      "ceticication-section4",
      "ceticication-footer",
    ],
    fixedElements: "#header",
    afterLoad: function (anchorLink, index) {
      var navbar2 = document.getElementById("navbar2");
      if (index != 1) {
        navbar2.style.position = "relative";
        document
          .querySelectorAll(".navbar1 .nav-link")
          .forEach(function (item) {
            item.style.color = "black";
          });
        document
          .querySelectorAll(".navbar1 .nav-item")
          .forEach(function (item) {
            item.style.color = "black";
          });
        document
          .querySelectorAll(".navbar-brand")
          .forEach(function (item) {
            item.style.color = "black";
          });
        document.querySelectorAll(".navbar1").forEach(function (item) {
          item.style.background = "white";
          item.style.border = "1px solid #f7f7f7";
          item.classList.remove("navbar-dark");
        });
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-4").style.backgroundColor = "#2189FF";
      } else {
        navbar2.style.position = "";
        document
          .querySelectorAll(".navbar1 .nav-link")
          .forEach(function (item) {
            item.style.color = "white";
            item.classList.add("hover-effect");
          });
        document
          .querySelectorAll(".navbar1 .nav-item")
          .forEach(function (item) {
            item.style.color = "white";
            item.classList.add("hover-effect");
          });
        document
          .querySelectorAll(".navbar-brand")
          .forEach(function (item) {
            item.style.color = "white";
          });
        document.querySelectorAll(".navbar1").forEach(function (item) {
            item.style.background = "inherit";
            item.style.border = "none";
            item.classList.add("navbar-dark");
        });
      }
    },
  });
});
