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
    scrollHorizontally: true,
    navigation: false,
    autoScrolling: false,
    bigSectionsDestination: top,
    anchors: [
      "info-section1",
      "info-section2",
      "info-section3",
      "info-section4",
      "info-section5",
    ],
    fixedElements: "#header",
    afterLoad: function (anchorLink, index) {
      var navbar2 = document.getElementById("navbar2");
      if (index != 1) {
        navbar2.style.position = "relative";
        if (index == 2) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "#2189FF";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
        } else if (index == 3) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "#2189FF";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
        } else if (index == 4) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "#2189FF";
        }
      } else {
        navbar2.style.position = "";
      }
    },
    
  });
});
