$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".nav_bar").addClass("sticky");
        } else {
            $(".nav_bar").removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.rm-btn2').addClass("show");
        } else {
            $('.rm-btn2').removeClass("show");
        }
    });


    // slide-up script
    $('.rm-btn2').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.nav_bar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu_btn').click(function () {
        $('.nav_bar .menu').toggleClass("active");
        $('.menu_btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Data Science Enthusiast", "Research Assistant", "Researcher", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Data Science Enthusiast", "Research Assistant", "Developer", "Researcher", "Freelancer"],
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
        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });
    } else {
        // Show them
        moreProjects.classList.add("active");
        btnText.innerHTML = "Show Less";
    }
}

window.onscroll = function () {
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

document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



// Magnetic Button Logic
const magnets = document.querySelectorAll('.magnetic');

magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', function (e) {
        const position = magnet.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        // Move the button slightly towards the mouse (divided by 3 for resistance)
        magnet.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
        magnet.children[0].style.transform = "translate(" + x * 0.2 + "px, " + y * 0.2 + "px)";
    });

    magnet.addEventListener('mouseout', function (e) {
        // Snap back to center
        magnet.style.transform = "translate(0px, 0px)";
        magnet.children[0].style.transform = "translate(0px, 0px)";
    });
});



/* =========================================
   ADVANCED "THINKING" BOT LOGIC
   ========================================= */

/* =========================================
   ADVANCED CHATBOT LOGIC (Simulated AI)
   ========================================= */

// 1. The Brain (Knowledge Base)
const knowledgeBase = [{
        keywords: ["hello", "hi", "hey", "start"],
        response: "Hello! I am ready to assist. You can ask about my skills, projects, education, or how to contact me."
    },
    {
        keywords: ["skill", "python", "java", "coding", "tech"],
        response: "My technical arsenal includes Python, Java, C++, and Web Tech (React, Django). In AI, I specialize in TensorFlow, PyTorch, and Computer Vision."
    },
    {
        keywords: ["project", "work", "app", "built"],
        response: "I have built high-impact projects like a Cataract Detection App (Medical AI), a Bangla Sign Language Translator, and a Fake News Detector using BERT."
    },
    {
        keywords: ["contact", "email", "mail", "hire"],
        response: "You can reach me at nourashazmine@gmail.com. I am also available on WhatsApp and LinkedIn via the buttons in the 'Start a Conversation' section."
    },
    {
        keywords: ["phone", "mobile", "whatsapp", "call"],
        response: "My contact number is +880 1521 536 463. Feel free to click the WhatsApp button to chat directly!"
    },
    {
        keywords: ["resume", "cv", "pdf"],
        response: "You can view my detailed professional history by clicking the 'Read More' button in the Overview section."
    },
    {
        keywords: ["location", "live", "address"],
        response: "I am currently based in Bashundhara R/A, Dhaka, Bangladesh."
    },
    {
        keywords: ["who", "name", "about"],
        response: "I am Nourash Azmine Chowdhury, a Researcher and Developer passionate about solving real-world problems using Deep Learning and Computer Vision."
    }
];

const defaultResponse = "I am analyzing your request... I specialize in Nourash's professional background. Try asking about 'Skills', 'Projects', or 'Contact Info'.";


// 2. Core Functions
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}

function handleEnter(e) {
    if (e.key === 'Enter') processUserMessage();
}

async function processUserMessage() {
    const inputField = document.getElementById('userInput');
    const userText = inputField.value.trim();

    if (!userText) return;

    // A. Add User Message
    addMessage(userText, 'user');
    inputField.value = '';

    // B. Show Thinking State
    showTypingIndicator();
    updateStatus("Computing...", true);

    // C. Wait (Fake processing delay)
    await new Promise(r => setTimeout(r, 1500));

    // D. Get Response & Type it out
    const response = findBestMatch(userText);
    removeTypingIndicator();
    updateStatus("● Online", false);
    typeWriterEffect(response);
}


// 3. Logic Helpers
function findBestMatch(text) {
    const lowerText = text.toLowerCase();
    for (let item of knowledgeBase) {
        if (item.keywords.some(keyword => lowerText.includes(keyword))) {
            return item.response;
        }
    }
    return defaultResponse;
}

function updateStatus(text, isThinking) {
    const statusEl = document.getElementById('botStatus');
    statusEl.innerText = text;
    if (isThinking) statusEl.classList.add('thinking');
    else statusEl.classList.remove('thinking');
}

// 4. Visual Effects (Typing & Bubbles)
function showTypingIndicator() {
    const chatBody = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.classList.add('typing-indicator');
    div.id = 'typing-dots';
    div.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
    chatBody.appendChild(div);
    scrollToBottom();
}

function removeTypingIndicator() {
    const dots = document.getElementById('typing-dots');
    if (dots) dots.remove();
}

function typeWriterEffect(text) {
    const chatBody = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.classList.add('message', 'bot');
    chatBody.appendChild(div);

    let i = 0;

    function type() {
        if (i < text.length) {
            div.innerHTML += text.charAt(i);
            i++;
            scrollToBottom();
            setTimeout(type, 30); // Speed of typing
        }
    }
    type();
}

function addMessage(text, sender) {
    const chatBody = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.innerText = text;
    chatBody.appendChild(div);
    scrollToBottom();
}

function scrollToBottom() {
    const chatBody = document.getElementById('chatBody');
    chatBody.scrollTop = chatBody.scrollHeight;
}