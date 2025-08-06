function toggleFavorite(iconElement) {
            iconElement.classList.toggle('favorited');
        }

        // Initialize all carousels on the page
        document.addEventListener('DOMContentLoaded', function () {
            // Select all elements with the class 'carousel'
            const carousels = document.querySelectorAll('.carousel');
            // Loop through each carousel and initialize it as a Bootstrap carousel
            carousels.forEach(function (carousel) {
                new bootstrap.Carousel(carousel, {
                    interval: 3000, // Change slide every 3 seconds
                    wrap: true // Continue sliding from the last item to the first
                });
            });
        });