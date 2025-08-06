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