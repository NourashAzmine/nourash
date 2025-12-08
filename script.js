$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".nav_bar").addClass("sticky");
        }else{
            $(".nav_bar").removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.rm-btn2').addClass("show");
        }else{
            $('.rm-btn2').removeClass("show");
        }
    });
    
    
    // slide-up script
    $('.rm-btn2').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav_bar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu_btn').click(function(){
        $('.nav_bar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student",  "Data Science Enthusiast","Research Assistant","Researcher", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student",  "Data Science Enthusiast","Research Assistant", "Developer", "Researcher", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "block"; 
    }
}

function toggleProjects() {
    var moreProjects = document.getElementById("more-projects");
    var btnText = document.getElementById("loadMoreBtn");

    if (moreProjects.classList.contains("active")) {
        // Hide them
        moreProjects.classList.remove("active");
        btnText.innerHTML = "Load More Projects";
        // Optional: Scroll back up to the top of projects slightly
        document.getElementById("projects").scrollIntoView({behavior: "smooth"});
    } else {
        // Show them
        moreProjects.classList.add("active");
        btnText.innerHTML = "Show Less";
    }
}

window.onscroll = function() {
    updateProgressBar();
    // ... your existing scroll logic here ...
};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



// Magnetic Button Logic
const magnets = document.querySelectorAll('.magnetic');

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', function(e) {
        const position = magnet.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        // Move the button slightly towards the mouse (divided by 3 for resistance)
        magnet.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
        magnet.children[0].style.transform = "translate(" + x * 0.2 + "px, " + y * 0.2 + "px)";
    });

    magnet.addEventListener('mouseout', function(e) {
        // Snap back to center
        magnet.style.transform = "translate(0px, 0px)";
        magnet.children[0].style.transform = "translate(0px, 0px)";
    });
});


