// mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.nav__mobile-toggle');
    const mobileMenu = document.querySelector('.nav__mobile-menu');
    const mobileLinks = document.querySelectorAll('.nav__mobile-link');
    
    if (mobileToggle && mobileMenu) {
        // toggle mobile menu
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);
            
            // toggle classes
            this.classList.toggle('nav__mobile-toggle--active');
            mobileMenu.classList.toggle('nav__mobile-menu--active');
            
            // prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        
        // close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('nav__mobile-toggle--active');
                mobileMenu.classList.remove('nav__mobile-menu--active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // close menu when clicking outside
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === this) {
                mobileToggle.classList.remove('nav__mobile-toggle--active');
                this.classList.remove('nav__mobile-menu--active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
        
        // close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('nav__mobile-menu--active')) {
                mobileToggle.classList.remove('nav__mobile-toggle--active');
                mobileMenu.classList.remove('nav__mobile-menu--active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
});