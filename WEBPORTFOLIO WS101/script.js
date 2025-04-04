   // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (!nameInput.value.trim()) {
                nameInput.classList.add('error');
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameInput.classList.remove('error');
                nameError.classList.add('hidden');
            }

            // Validate email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('error');
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
                emailError.classList.add('hidden');
            }

            // Validate message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (!messageInput.value.trim()) {
                messageInput.classList.add('error');
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageInput.classList.remove('error');
                messageError.classList.add('hidden');
            }

            // If form is valid, show success message
            if (isValid) {
                showToast('Message sent successfully!');
                contactForm.reset();
            }
        });
    }

    // Toast notification function
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-10 opacity-0';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('translate-y-10');
            toast.classList.remove('opacity-0');
            toast.classList.add('translate-y-0');
            toast.classList.add('opacity-100');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('translate-y-0');
            toast.classList.remove('opacity-100');
            toast.classList.add('translate-y-10');
            toast.classList.add('opacity-0');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
