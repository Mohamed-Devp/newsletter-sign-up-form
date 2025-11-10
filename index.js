const subscriptionForm = document.querySelector('.subscription form');

function showError(inputEl, errorOutEl, message) {
    inputEl.setAttribute('aria-invalid', 'true');

    errorOutEl.classList.remove('empty', 'fade-out');
    void errorOutEl.offsetWidth;

    errorOutEl.textContent = message;
    errorOutEl.classList.add('fade-out');
}

subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInputEl = document.getElementById('email-address');
    const errorOutEl = emailInputEl.parentElement.querySelector('.error');

    if (emailInputEl.validity.valueMissing) {
        showError(emailInputEl, errorOutEl, 'Email address is required');

    } else if (!emailInputEl.validity.valid) {
        showError(emailInputEl, errorOutEl, 'Valid email address required');

    } else {
        emailInputEl.setAttribute('aria-invalid', 'false');

        errorOutEl.textContent = '';
        errorOutEl.classList.add('empty');
    }
});