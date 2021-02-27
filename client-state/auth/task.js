const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const signinButton = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');

if(localStorage.userId) {
    userId.innerText = localStorage.userId;
    welcome.classList.add('welcome_active');
} else {
    signIn.classList.add('signin_active');
}

signinButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('signin__form');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.userId = response.user_id;
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = localStorage.userId;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    };
    xhr.send(formData);
});