$(document).ready(function () {
    const openButton = $("#open");
    const closeButton = $("#close");
    const modal = $("#myModal");
    const payment = $("#payment");
    const openPayment = $("#openPayment");
    const closePayment = $("#closePayment")
    openButton.click(function () {
        modal.css("display", "flex").hide().fadeIn(); // Первоначально устанавливаем display: flex; и запускаем fadeIn
    });


    closeButton.click(function () {
        modal.fadeOut(); // Используем fadeOut() для исчезновения модального окна
    });

    openPayment.click(function () {
        payment.css("display", "flex").hide().fadeIn();
    });


    closePayment.click(function () {
        payment.fadeOut();
    });

    // Показать/скрыть выпадающее меню при клике на кнопку
    $('.dropdown-toggle').click(function () {
        $('.dropdown-menu').slideToggle('fast');
        $(this).toggleClass('active'); // Добавление/удаление класса при клике на кнопку
    });

    // Скрыть выпадающее меню при клике вне элемента
    $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').slideUp('fast'); // Используем slideUp() для скрытия меню
            $('.dropdown-toggle').removeClass('active'); // Удалить класс активности у кнопки
        }
    });

});