// script.js - Main JavaScript for Website

// ==================== Gallery Functionality ====================

// Gallery Filter Function
function filterGallery(category) {
    // Update active tab
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(category)) {
            tab.classList.add('active');
        }
    });
    
    // Show all items if 'all' is selected
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
            // Reset featured item to full width
            if (item.classList.contains('main-featured')) {
                item.style.gridColumn = '1 / -1';
            }
        } else {
            if (item.dataset.category === category) {
                item.style.display = 'block';
                // Make first matching item featured
                if (!document.querySelector('.gallery-item[data-category="' + category + '"].main-featured')) {
                    item.classList.add('main-featured');
                    item.style.gridColumn = '1 / -1';
                } else {
                    item.classList.remove('main-featured');
                    item.style.gridColumn = '';
                }
            } else {
                item.style.display = 'none';
                item.classList.remove('main-featured');
                item.style.gridColumn = '';
            }
        }
    });
    
    // Ensure only one featured item exists per category
    if (category !== 'all') {
        const firstVisible = document.querySelector('.gallery-item[data-category="' + category + '"]');
        if (firstVisible) {
            firstVisible.classList.add('main-featured');
            firstVisible.style.gridColumn = '1 / -1';
        }
    }
}

// Gallery Hover Effects
function initGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ==================== Contact Form Functionality ====================

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('⚠️ Please fill in all fields before submitting.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this example, we'll just show a success message
            alert(`✅ Thank you, ${name}! Your message has been sent successfully.\n\nI'll get back to you at ${email} as soon as possible.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ==================== Live Clock Functionality ====================

// Live Clock Function
function updateClock() {
    const now = new Date();
    
    // Format time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Format date (Day, DD Month YYYY)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // Update the HTML elements
    const liveTimeElement = document.getElementById('liveTime');
    const liveDateElement = document.getElementById('liveDate');
    
    if (liveTimeElement) {
        liveTimeElement.textContent = timeString;
    }
    
    if (liveDateElement) {
        liveDateElement.textContent = dateString;
    }
}

// Add hover effect for clock
function initClockHover() {
    const clockElement = document.querySelector('.live-clock');
    if (clockElement) {
        clockElement.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        });
        
        clockElement.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    }
}

// ==================== Music Player Functionality ====================

// Music Player Controls
function initMusicPlayer() {
    const audioPlayer = document.querySelector('audio');
    if (audioPlayer) {
        // Set default volume to 50%
        audioPlayer.volume = 0.5;
        
        // Optional: Add fade in effect when page loads
        audioPlayer.addEventListener('loadeddata', function() {
            this.volume = 0;
            let vol = 0;
            const fadeIn = setInterval(() => {
                if (vol < 0.5) {
                    vol += 0.05;
                    this.volume = vol;
                } else {
                    clearInterval(fadeIn);
                }
            }, 100);
        });
    }
}

// ==================== Family Cards Functionality ====================

// Family Card Hover Effects
function initFamilyCards() {
    const familyCards = document.querySelectorAll('.family-card');
    familyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.family-image');
            if (image) {
                image.style.transform = 'scale(1.05)';
                image.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.family-image');
            if (image) {
                image.style.transform = 'scale(1)';
                image.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';
            }
        });
    });
}

// ==================== Profile Image Functionality ====================

// Profile Image Hover Effect
function initProfileImage() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
            this.style.boxShadow = '0 15px 40px rgba(52, 152, 219, 0.4)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(52, 152, 219, 0.3)';
        });
    }
}

// ==================== Main Initialization ====================

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);
    initClockHover();
    
    // Initialize contact form if it exists
    initContactForm();
    
    // Initialize other features
    initMusicPlayer();
    initGalleryHover();
    initFamilyCards();
    initProfileImage();
    
    console.log('Website JavaScript initialized successfully!');
});