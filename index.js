const main = document.querySelector('main');

const subscriptionForm = document.querySelector('.subscription form');
const emailInputEl = document.getElementById('email-address');

const successMessage = document.querySelector('.success-message');
const emailOutEl = successMessage.querySelector('b');
const dismissBtn = successMessage.querySelector('button');

function showError(inputEl, errorOutEl, message) {
    inputEl.setAttribute('aria-invalid', 'true');

    errorOutEl.classList.remove('empty', 'fade-in');
    void errorOutEl.offsetWidth;

    errorOutEl.textContent = message;
    errorOutEl.classList.add('fade-in');
}

subscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const errorOutEl = emailInputEl.parentElement.querySelector('.error');

    if (emailInputEl.validity.valueMissing) {
        showError(emailInputEl, errorOutEl, 'Email address is required');

    } else if (!emailInputEl.validity.valid) {
        showError(emailInputEl, errorOutEl, 'Valid email address required');

    } else {
        emailInputEl.setAttribute('aria-invalid', 'false');

        errorOutEl.textContent = '';
        errorOutEl.classList.add('empty');

        main.setAttribute('aria-hidden', 'true');
        successMessage.removeAttribute('aria-hidden');

        emailOutEl.textContent = emailInputEl.value;
        subscriptionForm.reset();
    }
});

dismissBtn.addEventListener('click', () => {
    main.removeAttribute('aria-hidden');
    successMessage.setAttribute('aria-hidden', 'true');
});