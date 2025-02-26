const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo'); // Fixed variable name
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon'); // Changed to querySelector
const navbar = document.querySelector('header nav'); // Changed to querySelector

// Mobile Menu Toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = (targetSection) => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    
    // Reset all
    header.classList.remove('active');
    barsBox.classList.remove('active');
    sections.forEach(section => section.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Reactivate with delay
    setTimeout(() => {
        header.classList.add('active');
        barsBox.classList.add('active');
        targetSection.classList.add('active');
    }, 1100);
}

// Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        activePage(targetSection);
    });
});

// Logo Click Handler
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    const homeSection = document.querySelector('.home');
    navLinks.forEach(l => l.classList.remove('active'));
    navLinks[0].classList.add('active');
    activePage(homeSection);
});

// Resume Section Tabs
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.textContent.toLowerCase();
        document.querySelectorAll('.resume-detail').forEach(detail => {
            detail.classList.remove('active');
        });
        document.querySelector(`.resume-detail.${target}`).classList.add('active');
    });
});

// Portfolio Carousel
let currentPortfolioIndex = 0;
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
const imgSlide = document.querySelector('.img-slide');

const updatePortfolio = () => {
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[currentPortfolioIndex].classList.add('active');
    imgSlide.style.transform = `translateX(-${currentPortfolioIndex * 100}%)`;
};

document.querySelector('.arrow-right').addEventListener('click', () => {
    if (currentPortfolioIndex < portfolioDetails.length - 1) {
        currentPortfolioIndex++;
        updatePortfolio();
    }
});

document.querySelector('.arrow-left').addEventListener('click', () => {
    if (currentPortfolioIndex > 0) {
        currentPortfolioIndex--;
        updatePortfolio();
    }
});