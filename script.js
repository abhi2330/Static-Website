const typed = new Typed('.text', {
    strings: ['DevOps Engineer', 'AWS Specialist', 'Cloud Enthusiast', 'Tech Professional'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function showMessage() {
    document.getElementById('message').innerText = 'Automation is awesome! This app runs in a Docker container.';
}