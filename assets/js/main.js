document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Preloader

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  // Sticky header on scroll

  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  // Navbar links active state on scroll

  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  // Mobile nav toggle

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  // Hide mobile nav on same-page/hash links

  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  // toggle mobile nav dropdowns

  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  // scroll top button

  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  //  glightbox init

  const glightbox = GLightbox({
    selector: '.glightbox'
  });
 
  //  Animation on scroll function and init
  
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// Add 'active' class to the clicked button and remove it from the rest
$('.btn-group .btn').click(function() {
  $('.btn-group .btn').removeClass('active');
  $(this).addClass('active');
});

  $(document).ready(function(){
    $(".btn-consult").click(function(){
      $("#protocolModal").modal("show");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var openModalLinks = document.querySelectorAll(".open-modal");

    openModalLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        $("#protocolModal").modal("show");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const images = [      
      "url('assets/img/hero/Hero 1.1.jpg')",
      "url('assets/img/hero/Hero 2 - UERJ.jpg')",
      "url('assets/img/hero/Hero 2.1.jpg')",
      "url('assets/img/hero/Hero 3 - Mangueira.jpg')",
      "url('assets/img/hero/Hero 3.1.jpg')",
      "url('assets/img/hero/Hero 4 - Museu.jpg')",
      "url('assets/img/hero/Hero 4.1.jpg')",
      "url('assets/img/hero/Hero 1 - Coreto.jpg')"
    ];
  
    const heroSection = document.getElementById("hero");
    let index = 0;
  
    function changeBackground() {
      heroSection.style.backgroundImage = images[index];
      index = (index + 1) % images.length;
    }
  
    setInterval(changeBackground, 5000);
  });

  // Requirements Modal Function
  $(document).ready(function () {
    $('.list-group-item').click(function () {
        $(this).find('[data-bs-toggle="collapse"]').click();
    });
});

$(document).ready(function () {
  $('.list-group-item').click(function () {
      $('.list-group-item').removeClass('selected');
      $(this).addClass('selected');
  });
});

$(document).ready(function () {
  $('.list-group-item').click(function () {
      $('.list-group-item').removeClass('selected');
      $(this).addClass('selected');
  });

  $('.collapse').on('hidden.bs.collapse', function () {
      $('.list-group-item').removeClass('selected');
  });
});

//  Select all elements with 'list-group-item' class inside the modal
let listItems = document.querySelectorAll('.modal .list-group-item');

listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        let collapseItems = document.querySelectorAll('.modal .collapse');
        collapseItems.forEach(function(collapse) {
            collapse.classList.remove('show');
        });

        let targetCollapse = item.querySelector('.collapse');
        if (targetCollapse) {
            targetCollapse.classList.add('show');
        }
    });
});