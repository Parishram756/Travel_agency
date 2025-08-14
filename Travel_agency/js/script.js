$(document).ready(function() {
            // Function to set a cookie
            function setCookie(name, value, days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = name + "=" + value + ";" + expires + ";path=/";
            }

            // Function to get a cookie value
            function getCookie(name) {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for(let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            // Check for the cookie when the page loads
            if (!getCookie('cookieConsent')) {
                $('#cookie-banner').show();
            }

            // Click handler for "I Agree" button
            $('#agree-btn').on('click', function() {
                setCookie('cookieConsent', 'agreed', 365); // Save cookie for 365 days
                $('#cookie-banner').fadeOut('slow');
            });

            // Click handler for "I Disagree" button
            $('#disagree-btn').on('click', function() {
                $('#cookie-banner').fadeOut('slow');
            });
});


