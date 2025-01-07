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

    navigation: false,
    autoScrolling: false,
    scrollBar: true,
    fitToSection: true,
    bigSectionsDestination: top,
    anchors: [
      "class-section1",
      "class-section2",
      "class-section3",
      "class-section4",
      "class-section5",
      "class-section6",
      "class-section7",
      "class-section8",
      "class-section9",
      "class-footer",
    ],
    fixedElements: "#header",
    afterLoad: 
    function (anchorLink, index,origin, destination, direction) {
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
        if (index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "#2189FF";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
        } else if (index == 7) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "#2189FF";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
        } else if (index == 9) {
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "#2189FF";
        }
        else if(index==8){
          document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
          document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
        }
        
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
        document.getElementById("navbar2-item-1").style.backgroundColor = "transparent";
        document.getElementById("navbar2-item-2").style.backgroundColor = "transparent";
        document.getElementById("navbar2-item-3").style.backgroundColor = "transparent";
      }
    },
  });

});

function toggleTabs(currentButtonId, otherButtonId1, otherButtonId2,otherButtonId3, showContentId1, hideContentId1, showContentId2, hideContentId2) {
  document.getElementById(currentButtonId).classList.add('active');
  document.getElementById(otherButtonId1).classList.remove('active');
  document.getElementById(otherButtonId2).classList.remove('active');
  document.getElementById(otherButtonId3).classList.add('active');
  
  $(document.getElementById(hideContentId1)).collapse('hide');
  $(document.getElementById(showContentId1)).collapse('show');
  $(document.getElementById(hideContentId2)).collapse('hide');
  $(document.getElementById(showContentId2)).collapse('show');
}

// 현재 스크롤 위치 저장

document.getElementById('offline-btn').addEventListener('click', function () {
  toggleTabs('offline-btn', 'online-btn', 'online-btn2','offline-btn2', 'offline-tab', 'online-tab', 'offline-tab2', 'online-tab2');
});

document.getElementById('online-btn').addEventListener('click', function () {
  toggleTabs('online-btn', 'offline-btn', 'offline-btn2', 'online-btn2','online-tab', 'offline-tab', 'online-tab2', 'offline-tab2');
});

document.getElementById('offline-btn2').addEventListener('click', function () {
  toggleTabs('offline-btn2', 'online-btn2', 'online-btn','offline-btn','offline-tab', 'online-tab', 'offline-tab2', 'online-tab2');
});
$(document).on('click', '#online-btn2', function() {
  toggleTabs('online-btn2', 'offline-btn2', 'offline-btn','online-btn', 'online-tab', 'offline-tab', 'online-tab2', 'offline-tab2');
});
$('#online-tab').on('shown.bs.collapse', function () {
  $.fn.fullpage.reBuild();
});
$('#online-tab').on('hidden.bs.collapse', function () {
  $.fn.fullpage.reBuild();
});

