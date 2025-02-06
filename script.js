
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');  

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




const backToTopButton = document.getElementById('backToTop');  

window.onscroll = function() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};


document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        const content = dropdown.nextElementSibling; 
        const isOpen = dropdown.classList.contains('open');

        
        document.querySelectorAll('.dropdown.open').forEach((openDropdown) => {
            openDropdown.classList.remove('open');
            openDropdown.nextElementSibling.style.display = 'none';
        });

        if (!isOpen) {
            dropdown.classList.add('open');
            content.style.display = 'block';
        } else {
            dropdown.classList.remove('open');
            content.style.display = 'none';
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function createVideoLink(videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
}

document.querySelectorAll('.more-info').forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = button.getAttribute('data-video-id'); 
        if (videoId) {
            window.open(createVideoLink(videoId), '_blank'); 
        } else {
            alert('Video not available!');
        }
    });
});


function openTab(event, tabId) {
  
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

function downloadFile(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const modal1 = document.getElementById('myModal1');  
const modal2 = document.getElementById('myModal2');  

const joinNowBtn = document.getElementById('joinNowBtn');  
const learnMoreBtn = document.getElementById('learnMoreBtn');  

const closeButton1 = modal1 ? modal1.querySelector('.close-button') : null;
const closeButton2 = modal2 ? modal2.querySelector('.close-button') : null;


if (joinNowBtn && modal1 && closeButton1) {  
    joinNowBtn.addEventListener('click', () => {
        modal1.style.display = 'block';
    });

    closeButton1.addEventListener('click', () => {
        modal1.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            modal1.style.display = 'none';
        }
    });
}


if (learnMoreBtn && modal2 && closeButton2) {  
    learnMoreBtn.addEventListener('click', () => {
        modal2.style.display = 'block';
    });

    closeButton2.addEventListener('click', () => {
        modal2.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal2) {
            modal2.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {

    const reviewCards = document.querySelectorAll(".review-card");

    reviewCards.forEach(card => {
        card.addEventListener("click", () => {
            const inner = card.querySelector(".review-inner");
            const isFlipped = inner.style.transform === "rotateY(180deg)";
            
          
            inner.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
        });
    });


    document.addEventListener("click", (event) => {
        reviewCards.forEach(card => {
            const inner = card.querySelector(".review-inner");
            if (!card.contains(event.target)) {
                inner.style.transform = "rotateY(0deg)";
            }
        });
    });
});
