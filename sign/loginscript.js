var current = null;
const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('focus', function (e) {
        if (current) current.pause();
        current = anime({
                targets: 'path',
                strokeDashoffset: {
                        value: 0,
                        duration: 700,
                        easing: 'easeOutQuart'
                },
                strokeDasharray: {
                        value: '240 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                }
        });
});
password.addEventListener('focus', function (e) {
        if (current) current.pause();
        current = anime({
                targets: 'path',
                strokeDashoffset: {
                        value: -336,
                        duration: 700,
                        easing: 'easeOutQuart'
                },
                strokeDasharray: {
                        value: '240 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                }
        });
});
document.querySelector('#submit').addEventListener('focus', function (e) {
        if (current) current.pause();
        current = anime({
                targets: 'path',
                strokeDashoffset: {
                        value: -730,
                        duration: 700,
                        easing: 'easeOutQuart'
                },
                strokeDasharray: {
                        value: '530 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                }
        });
});

// // validate email
email.addEventListener('input', function (e) {
        // regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailInvalid = document.getElementById('email-invalid');
        if (!regex.test(email.value)) {
               emailInvalid.style.display = 'block';
        } else {
                emailInvalid.style.display = 'none';
        }
});

// // validate password
password.addEventListener('input', function (e) {
        // regex
        const regex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
        const passInvalid = document.getElementById('pass-invalid');
        if (!regex.test(password.value)) {
               passInvalid.style.display = 'block';
        } else {
                passInvalid.style.display = 'none';
        }
});

// validate form
document.getElementById('form').addEventListener('submit', function (e) {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        if (!email.value || !password.value || email.classList.contains('invalid') || password.classList.contains('invalid')) {
                e.preventDefault();
                alert('Invalid email or password');
        }
});
