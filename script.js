// Initialize anime.js for animations
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to elements
    const floatElements = document.querySelectorAll('.float');
    floatElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });

    // Certificate data
    const certificates = [
        { title: 'Introduction to JavaScript', icon: 'fa-js' },
        { title: 'Introduction to HTML', icon: 'fa-html5' },
        { title: 'Introduction to CSS', icon: 'fa-css3-alt' },
        { title: 'JavaScript Intermediate', icon: 'fa-js-square' },
        { title: 'Tech for Everyone', icon: 'fa-laptop-code' },
        { title: 'Introduction to Python', icon: 'fa-python' },
        { title: 'Introduction to C++', icon: 'fa-file-code' },
        { title: 'Introduction to Java', icon: 'fa-java' }
    ];

    // Hobbies data
    const hobbies = [
        { title: 'Coding Projects', icon: 'fa-code', description: 'Building personal projects to improve my skills' },
        { title: 'Anime Watching', icon: 'fa-tv', description: 'Enjoying various anime series in my free time' },
        { title: 'Game Development', icon: 'fa-gamepad', description: 'Creating simple games as a hobby' },
        { title: 'Digital Art', icon: 'fa-palette', description: 'Drawing and designing in Figma' }
    ];

    // Skills data - Updated to match your experience
    const skills = [
        { name: 'Figma', level: 85, icon: 'fa-figma' },
        { name: 'Java', level: 80, icon: 'fa-java' },
        { name: 'Python', level: 80, icon: 'fa-python' },
        { name: 'JavaScript', level: 85, icon: 'fa-js' },
        { name: 'HTML', level: 90, icon: 'fa-html5' },
        { name: 'CSS', level: 88, icon: 'fa-css3-alt' }
    ];

    // Populate certificates
    const certContainer = document.querySelector('#certificates .grid');
    certificates.forEach(cert => {
        certContainer.innerHTML += `
            <div class="certificate-card anime-border p-1 rounded-lg">
                <div class="certificate-card-inner glass-card p-6 rounded-lg h-full flex flex-col items-center text-center">
                    <i class="fab ${cert.icon} text-4xl text-cyan-400 mb-4"></i>
                    <h3 class="text-xl font-semibold">${cert.title}</h3>
                </div>
            </div>
        `;
    });

    // Populate hobbies
    const hobbyContainer = document.querySelector('#hobbies .grid');
    hobbies.forEach(hobby => {
        hobbyContainer.innerHTML += `
            <div class="hobby-card glass-card p-6 rounded-lg relative overflow-hidden">
                <i class="fas ${hobby.icon} text-3xl text-purple-400 mb-4"></i>
                <h3 class="text-xl font-semibold mb-2">${hobby.title}</h3>
                <p class="text-slate-300">${hobby.description}</p>
            </div>
        `;
    });

    // Populate skills
    const skillContainer = document.querySelector('#skills .max-w-3xl');
    skills.forEach(skill => {
        skillContainer.innerHTML += `
            <div class="mb-6">
                <div class="flex items-center mb-2">
                    <i class="fab ${skill.icon} text-xl mr-3 text-cyan-400"></i>
                    <span class="font-medium flex-grow">${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `;
    });

    // Contact form
    const contactContainer = document.querySelector('#contact .glass-card');
    contactContainer.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <h3 class="text-2xl font-bold mb-4">Contact Info</h3>
                <div class="space-y-4">
                    <div class="flex items-center">
                        <i class="fas fa-envelope text-cyan-400 mr-4"></i>
                        <span>raineterra@example.com</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-map-marker-alt text-cyan-400 mr-4"></i>
                        <span>San Nicolas 2, Magalang, Pampanga, Philippines</span>
                    </div>
                </div>
                <div class="mt-8">
                    <h4 class="text-xl font-semibold mb-4">Connect with me</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-2xl hover:text-cyan-400 transition">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#" class="text-2xl hover:text-cyan-400 transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <form class="space-y-4">
                    <div>
                        <label for="name" class="block mb-1">Name</label>
                        <input type="text" id="name" class="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    </div>
                    <div>
                        <label for="email" class="block mb-1">Email</label>
                        <input type="email" id="email" class="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                    </div>
                    <div>
                        <label for="message" class="block mb-1">Message</label>
                        <textarea id="message" rows="4" class="w-full bg-slate-700 border border-slate-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
                    </div>
                    <button type="submit" class="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded transition">Send Message</button>
                </form>
            </div>
        </div>
    `;

    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});