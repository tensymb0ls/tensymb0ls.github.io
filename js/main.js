// loader
window.onload = function () {
    setTimeout(function () {
        let galleryElements = document.getElementsByClassName('body');
        let loader = document.getElementsByClassName('loader');
        for (let i = 0; i < galleryElements.length; i++) {
            galleryElements[i].style.opacity = '1';
            loader[i].style.opacity = '0';
        }
    }, 200);
};

$(document).ready(function () {
    const openButton = $(".open");
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
    // Скрыть выпадающее меню при клике на ссылку или вне элемента
    $('.dropdown-menu').on('click', 'a', function () {
        $('.dropdown-menu').slideUp('fast');
        $('.dropdown-toggle').removeClass('active');
    });
    $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').slideUp('fast'); // Используем slideUp() для скрытия меню
            $('.dropdown-toggle').removeClass('active'); // Удалить класс активности у кнопки
        }
    });
    // Выпадающие строки фильтра
    $('.filter-toggle').click(function () {
        $('.filter-menu').slideToggle('fast');
        $(this).toggleClass('active'); // Добавление/удаление класса при клике на кнопку
    });
    // Скрыть выпадающее меню при клике на ссылку или вне элемента
    $('.filter-menu').on('click', 'a', function () {
        $('.filter-menu').slideUp('fast');
        $('.filter-toggle').removeClass('active');
    });
    $(document).click(function (event) {
        if (!$(event.target).closest('.filter').length) {
            $('.filter-menu').slideUp('fast'); // Используем slideUp() для скрытия меню
            $('.filter-toggle').removeClass('active'); // Удалить класс активности у кнопки
        }
    });

    // * --------- Cart ------------------------------------------
    // Проверка корзины при загрузке страницы и активация\деактивация кнопки оплаты
    $(document).ready(function () {
        updatePaymentButton();
    });

    // Добавление товара в корзину
    $('.catalogue__button').on('click', function () {
        let addButton = $(this);
        if (!addButton.hasClass('catalogue__added')) {
            let description = addButton.siblings('.catalogue__item-description').text().trim();
            let priceText = addButton.siblings('.price').find('.item-price').text().trim();
            let price = parseFloat(priceText.replace(/[^\d.]/g, '')); // Извлечение числа из строки цены

            // Получение значений атрибутов data-translate и dir из карточки товара
            let dataTranslate = addButton.siblings('.catalogue__item-description').data('translate');
            let dirAttribute = addButton.siblings('.catalogue__item-description').attr('dir');

            let existingItem = $('.cart li').filter(function () {
                return $(this).find('p').text() === description;
            });

            if (existingItem.length > 0) {
                let countSpan = existingItem.find('.count');
                let count = parseInt(countSpan.text());
                countSpan.text(count + 1);
            } else {
                let newItem = '<li data-price="' + price + '"><p class="p_cartItem" data-translate="' + dataTranslate + '" dir="' + dirAttribute + '">' + description + '</p><div class="controls"><a href="#" class="increment" title="Добавить одну"><img src="images/controls_plus_icon.svg" alt="Добавить одну"></a><span class="count">1</span><a href="#" class="decrement" title="Убрать одну"><img src="images/controls_minus_icon.svg" alt="Убрать одну"></a><a href="#" class="del-item" title="Удалить из корзины"><img src="images/controls_edit_icon.svg" alt="Удалить из корзины"></a></div></li>';
                $('.cart').append(newItem);
            }

            addButton.addClass('catalogue__added').prop('disabled', true).attr('data-translate', 'added_to_cart'); // Изменение текста кнопки
            render();
            updateTotal(); // Обновление итоговой суммы при добавлении товара
            updatePaymentButton(); // Обновление состояния кнопки оплаты
        }
    });


    // Удаление товара из корзины
    $('.cart').on('click', '.del-item', function (event) {
        event.preventDefault();
        let item = $(this).closest('li');
        let addButton = $('.catalogue__button').filter(function () {
            return $(this).siblings('.catalogue__item-description').text().trim() === item.find('p').text().trim();
        });

        addButton.removeClass('catalogue__added').prop('disabled', false).attr('data-translate', 'add_to_cart'); // Изменение текста кнопки
        item.remove();
        render();
        updateTotal(); // Обновление итоговой суммы при удалении товара
        updatePaymentButton(); // Обновление состояния кнопки оплаты
    });


    // Увеличение количества товара
    $('.cart').on('click', '.increment', function (event) {
        event.preventDefault();
        let countSpan = $(this).siblings('.count');
        let count = parseInt(countSpan.text());
        countSpan.text(count + 1);
        updateTotal(); // Обновление итоговой суммы при изменении количества товара
    });

    // Уменьшение количества товара
    $('.cart').on('click', '.decrement', function (event) {
        event.preventDefault();
        let countSpan = $(this).siblings('.count');
        let count = parseInt(countSpan.text());
        if (count > 1) {
            countSpan.text(count - 1);
            updateTotal(); // Обновление итоговой суммы при изменении количества товара
        }
    });

    // Функция для обновления итоговой суммы
    function updateTotal() {
        let total = 0;
        $('.cart li').each(function () {
            let price = parseFloat($(this).data('price'));
            let count = parseInt($(this).find('.count').text());
            total += price * count;
        });
        $('.payment__amount').text(total.toFixed(2) + ' ₪'); // Округление суммы до двух знаков после запятой
    }
    // Передаем итоговую сумму в форму оплаты 
    $('#openPayment').on('click', function () {
        let totalAmount = $('.payment__amount').text(); // Получение итоговой суммы из корзины
        $('.order-info-item b').text(totalAmount); // Обновление текста блока "Итого" в форме оформления заказа

    });
    // Функция для обновления состояния кнопки оплаты
    function updatePaymentButton() {
        let cartItems = $('.cart li');
        let paymentButton = $('#openPayment');
        if (cartItems.length === 0) {
            paymentButton.prop('disabled', true);
            paymentButton.addClass('catalogue__added');
        } else {
            paymentButton.prop('disabled', false);
            paymentButton.removeClass('catalogue__added');
        }
    }
    // *----------- Slider ----------------------------------
    $('.single-slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });
});

// ---------------- Video -------------------------------------
let currentVideo = 0;
let videos = [
    "/Tasty_choice/video/motorcycle.mp4",
    // "/Tasty_choice/video/coffee.mp4",
];
function run() {
    currentVideo++;
    if (currentVideo >= videos.length) currentVideo = 0;
    var player = document.getElementById('video__player');
    player.src = videos[currentVideo];
    player.load();
    player.play();
}

// --------------- main video -------
document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video-container video");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Измените этот порог, чтобы настроить точность активации видео при скроллинге
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
                observer.unobserve(entry.target);
            } else {
                video.pause();
            }
        });
    }, options);

    observer.observe(video);
});

// ----------------- Category filter -------------------
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.menu__item a');
    const linksDrop = document.querySelectorAll('.dropdown-menu a');
    const items = document.querySelectorAll('.catalogue__item');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const category = this.getAttribute('data-translate'); // Получаем значение data-translate
            applyFilter(category);
        });
    });

    linksDrop.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const category = this.getAttribute('data-translate'); // Получаем значение data-translate
            applyFilter(category);
        });
    });

    function applyFilter(category) {
        items.forEach(item => {
            const itemCategory = item.getAttribute('category');

            if (category === 'all' || category === 'reset' || itemCategory === category) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
});