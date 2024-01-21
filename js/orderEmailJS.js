(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('BNxNgoC7Ef8spurtm'); // ? PUBLIC KEY <-----
})();
document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.payment-form__data');
    let submitButton = document.querySelector('.payment-form__order-info-button');
    let paymentTypeRadios = document.querySelectorAll('.payment-form__type input[name="radio"]');
    let selectedPaymentType = '';

    paymentTypeRadios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            selectedPaymentType = event.target.nextElementSibling.querySelector('.radio__text').innerText; // Получаем текст из тега <p class="radio__text"></p>
        });
    });

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            let firstNameValue = document.getElementById('fname').value;
            let phoneValue = document.getElementById('phone').value;
            let addressValue = document.getElementById('adr').value;
            let emailValue = document.getElementById('email').value;

            let formData = {
                from_name: firstNameValue,
                contact_number: phoneValue,
                address: addressValue,
                user_email: emailValue,
                payment_type: selectedPaymentType
            };

            emailjs.send('service_dm42d24', 'template_071zpvf', formData, 'BNxNgoC7Ef8spurtm')
                .then(function () {
                    console.log('SUCCESS!');

                    submitButton.textContent = 'Спасибо за ваш заказ';
                    submitButton.disabled = true;
                    submitButton.classList.add('catalogue__added');
                    form.reset();
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                });
        } else {
            console.log('Пожалуйста, заполните все обязательные поля формы.');
        }
    });
});
