
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value
  
    if (username && password) {
        
        console.log('Login attempt with:', username, password);
        alert('Logged in successfully!');
        window.location.hash = '#dashboard-section';
    } else {
        alert('Please enter both username and password');
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && username && email && password) {
        console.log('Registration attempt with:', name, username, email, password);
        alert('Registration successful!');
        window.location.hash = '#login-section';
    } else {
        alert('Please fill out all fields');
    }
});
document.getElementById('dashboard-section')?.addEventListener('load', function() {
    
    console.log('Welcome to the Dashboard!');
});
function navigateToSection(sectionId) {
    window.location.hash = sectionId;
}

window.addEventListener('hashchange', function() {
    const sections = document.querySelectorAll('section');
    const currentSection = window.location.hash.replace('#', '');

    sections.forEach(function(section) {
        if (section.id === currentSection) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

window.addEventListener('load', function() {
    const defaultSection = window.location.hash ? window.location.hash : '#product-list';
    window.location.hash = defaultSection;
});
