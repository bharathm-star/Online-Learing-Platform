
document.querySelector('.btnn a').addEventListener('click', function(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Login attempted with Email: ${email}`);
    }
});

function adjustLoginForm() {
    const form = document.querySelector('.form');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        form.style.width = '90%'; 
        form.style.left = '5%';
        form.style.transform = 'none'; 
        form.style.width = '250px'; 
        form.style.left = '870px';
        form.style.transform = 'translate(0%,-5%)';
    }
}

adjustLoginForm();

window.addEventListener('resize', adjustLoginForm);
