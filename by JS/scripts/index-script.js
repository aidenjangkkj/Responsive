// fullpage.js 설정

$(document).ready(function() {
  
  if(window.matchMedia("(max-width: 768px)").matches){
    $('.navbar-toggler').on('click', function(){
      $('#mySidebar').toggleClass('active');
    });
    $('.closebtn').on('click', function(){
      $('#mySidebar').removeClass('active');
    });
  }
  else{
    $('#mySidebar').removeClass('active');
  }
  
  
  setImages();
    $('#fullpage').fullpage({
        responsiveWidth: 1200,
        scrollHorizontally: true,
        navigation: false,
        autoScrolling: false,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6','section7','section8'],
        fixedElements: '#header',
        bigSectionsDestination: top,
        afterRender: function() {
          $(document).on('click', '#arrow', function() { 
              $.fn.fullpage.moveSectionDown(); // 화살표로 섹션 넘기기
          });
        },
        afterLoad: function(anchorLink, index){ 
          if(index==1){
            document.querySelectorAll(".nav-link").forEach(function(item) {
              item.classList.add("sec1-color");
              item.classList.add("hover-effect");
            });
            document.querySelectorAll(".navbar-brand").forEach(function(item) {
              item.style.color = "white";
            });
            document.querySelectorAll(".navbar").forEach(function(item) {
              item.style.background = "inherit";
              item.style.border = "none";
              item.classList.add("navbar-dark");
            });
            var arrow = document.getElementById("arrow");
            arrow.style.visibility = "visible";
            
          }
          else if(index==3){
            document.querySelectorAll(".navbar").forEach(function(item) {
              item.style.visibility = "hidden";
            });
          }
          else{
            document.querySelectorAll(".nav-link").forEach(function(item) {
              item.classList.remove("sec1-color");
            });
            document.querySelectorAll(".navbar-brand").forEach(function(item) {
              item.style.color = "black";
            });
            document.querySelectorAll(".navbar").forEach(function(item) {
              item.style.background = "white";
              item.style.border = "1px solid #f7f7f7";
              item.style.visibility = "visible";
              item.classList.remove("navbar-dark");
            });
          }
        },
    });

    // Swiper 슬라이더 설정 및 텍스트 변경


    var text = ["Education", "Technology", "K-Culture"];

    var textbox = document.getElementById("subtext");
    var textbox2 = document.getElementById("subtext2");
    var pagination1 = document.getElementById("pagination1");
    var pagination2 = document.getElementById("pagination2");


    var MainSwiper = new Swiper('.img-slide ', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true,
    });
    var SubSwiper = new Swiper(".text-silde ", {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    MainSwiper.on('slideChange', function() {
      var index = MainSwiper.activeIndex;
      textbox.innerHTML = text[index];
      textbox2.innerHTML = text[index];
      if(index==1){
        textbox.style.visibility = "hidden"
        textbox2.style.visibility = "visible"
        pagination1.style.visibility = "hidden"
        pagination2.style.visibility = "visible"
      }
      else{
        textbox.style.visibility = "visible"
        textbox2.style.visibility = "hidden"
        pagination1.style.visibility = "visible"
        pagination2.style.visibility = "hidden"
      }
    }); 
      MainSwiper.controller.control = SubSwiper;
      SubSwiper.controller.control = MainSwiper;

    var ListSwiper = new Swiper(".mySwiper",{
      direction: "vertical",
      speed: 1000,
      allowTouchMove : false,
      slidesPerView: "5",
      loop: true,
      nested: true,
      autoplay:{
        delay:1000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      on: {
        init: function() {
          updateCirclePosition(this);
          updateSlideOpacity(this);
        },
        slideChange: function() {
          updateCirclePosition(this);
          updateSlideOpacity(this);
        }
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
      updateCirclePosition(ListSwiper);
    });

});

function updateCirclePosition(swiper) {
  var index = swiper.activeIndex;
  var circle = document.getElementById('circle');
  var circle2 = document.getElementById('circle2');
  var slides = swiper.slides;
  var slide = slides[index];
  var textLength = slide.innerText.length;
  var slideRect = slide.getBoundingClientRect();

  var newLeft, newTop, newLeft2;

  if (matchMedia("screen and (min-width: 768px)").matches) {
    newLeft = slideRect.right+20;
  } else {
    console.log(swiper.height);
    newLeft = slideRect.left + slideRect.width / 2 + textLength * 17;
    newTop = slideRect.top-slideRect.height/2;
    newLeft2 = slideRect.left + slideRect.width / 2 - textLength* 17 - 20 + 'px';
  
  }

  circle.style.left = newLeft + 'px';
  circle2.style.left = newLeft2;
  circle.style.top = newTop+ 'px';
  circle2.style.top = newTop+ 'px';
}



function updateSlideOpacity(swiper) {
  var slides = swiper.slides
  slides.forEach(function(slide) {
    slide.classList.remove('list-opacity-0-5', 'list-opacity-0-3','list-opacity-0');
  });

  var activeIndex = swiper.activeIndex;
  
  if (slides[activeIndex - 1]) {
    slides[activeIndex - 1].classList.add('list-opacity-0-5');
  }
  if (slides[activeIndex - 2]) {
    slides[activeIndex - 2].classList.add('list-opacity-0-3');
  }
  if (slides[activeIndex - 3]) {
    slides[activeIndex - 3].classList.add('list-opacity-0');
  }
  if (slides[activeIndex - 4]) {
    slides[activeIndex - 4].classList.add('list-opacity-0');
  }
  if (slides[activeIndex + 1]) {
    slides[activeIndex + 1].classList.add('list-opacity-0-5');
  }
  if (slides[activeIndex + 2]) {
    slides[activeIndex + 2].classList.add('list-opacity-0-3');
  }
  if (slides[activeIndex + 3]) {
    slides[activeIndex + 3].classList.add('list-opacity-0');
  }
  if (slides[activeIndex + 4]) {
    slides[activeIndex + 4].classList.add('list-opacity-0');
  }
}

// 이미지 파일 경로를 설정하는 함수
function setImages() {

    // 섹션 2
    document.getElementById('img1').src = 'img/1.png';
    document.getElementById('img2').src = 'img/2.png';
    document.getElementById('img3').src = 'img/3.png';
    document.getElementById('bg-image').src = 'img/test.png';

    // 섹션 3
    document.getElementById('icon1').src = 'img/icon_book.png';
    document.getElementById('icon2').src = 'img/AI.png';
    document.getElementById('icon3').src = 'img/analyze.png';
    document.getElementById('background-image-right').src = 'img/image 50.png';
    document.getElementById('app-image').src = 'img/Group 34.png';

    // 섹션 4
    document.getElementById('certification-image1').src = 'img/CertificationCenter1.png';
    document.getElementById('certification-image2').src = 'img/CertificationCenter2.png';
    
    // 섹션 5
    document.getElementById('membership-image1').src = 'img/Location.png';
    document.getElementById('membership-image2').src = 'img/Information.png';
    document.getElementById('membership-image3').src = 'img/membership_book.png';
    document.getElementById('membership-image4').src = 'img/Education.png';
    document.getElementById('membership-image5').src = 'img/Phone.png';
    document.getElementById('membership-image6').src = 'img/Lecture.png';
    document.getElementById('membership-image7').src = 'img/Networking.png';
    document.getElementById('membership-image8').src = 'img/Tutor.png';
    
    // footer

}
