(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('BNxNgoC7Ef8spurtm'); // ? PUBLIC KEY <-----
})();
window.onload = function () {
    let form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            let submitButton = this.querySelector('.button');
            let phoneValue = this.querySelector('#phone').value;
            let emailValue = this.querySelector('#email').value;

            this.contact_number.value = Math.random() * 100000 | 0;

            let messageValue = this.querySelector('#message').value;
            messageValue += `\n\nContact phone number: ${phoneValue}\nE-Mail: ${emailValue}`;
            this.querySelector('#message').value = messageValue;

            emailjs.sendForm('service_dm42d24', 'template_u9jfs3n', this, 'BNxNgoC7Ef8spurtm')
                .then(function () {
                    console.log('SUCCESS!');

                    submitButton.value = 'Спасибо за ваш отзыв';
                    submitButton.disabled.disabled = true; // Make the button disabled after successful submission
                    submitButton.classList.add('catalogue__added');
                    // Clear form fields
                    form.reset();
                }, function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            console.log('Пожалуйста, заполните все обязательные поля формы.');
        }
    });
}
