// Simple script to add hover effects to destination cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.destination-card');
    
    cards.forEach(card => {
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        // Add simple touch feedback
        card.addEventListener('click', function() {
            this.style.opacity = '0.95';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 150);
        });
    });
});


        // Custom js for about page
                // Simple scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            fadeElements.forEach(element => {
                observer.observe(element);
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // CTA button functionality
            document.querySelector('.btn-cta').addEventListener('click', function(e) {
                e.preventDefault();
                alert('Thank you for your interest! Our travel experts will contact you shortly to discuss your dream trip.');
            });
        });
        // End of custom js for about page