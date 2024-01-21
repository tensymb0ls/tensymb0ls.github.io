// Русурсы перевода тут хранятся под каждый язык ключи и слова
// ! Важно: значение атрибутов data-translate в HTML коде должны совпадать с именами ключей
const translates = {
    he: {
        // Иврит
        "simply": "פשוט.",
        "tasty": "טעים.",
        "always": "תמיד!",
        "insta": "האינסטגרם שלנו",
        "slide-2": "מגוון מאפים מתוקים ומפנקים במיוחד",
        "slide-3": "מגוון כריכים טעימים וטריים",
        // modal
        "modal-title": "בוקר טוב,איך תרצה לקבל את ההזמנה שלך?",
        "all": "לכולם",
        "hospital": "בית חולים",
        "campus": "קמפוס",
        "buy": "להזמין",
        "send": "שלח",

        // catalogue
        "catalogue-title": "תפריט",
        "menu__title": "בחר קטגוריה",
        "cat-1": "מאפים מתוקים",
        "cat-2": "מאפים מלוחים",
        "cat-3": "מהויטרינה",
        "cat-4": "בטאבון",
        "cat-5": "כריכים",
        "cat-6": "עוגות פס",
        "cat-7": "עוגיות",
        "cat-8": "לחם",
        "cat-9": "לחמניות",
        "cat-10": "קישים",
        "reset": "Сאיפוס",
        "unit": "י״ח",
        "cart": "סל קניות",
        "greetings": "שלום לכם שכנים שלנו!❤️",
        "greetingsText1": "שמחים שהגעתם אלינו🥨🥐",
        "greetingsText2": "על מנת לבצע הזמנה יש צורך להירשם לאתר",
        "greetingsText3": "ניתן לבצע הזמנה יום לפני עד השעה",
        "greetingsText4": "במקרה ושכחתם לעשות הזמנה-ניתן להתקשר אלינו ולבצע הזמנה מהיום להיום(לא נותן לעשות הזמנה מהיום להיום דרך האתר).",
        "greetingsText5": "אם אתם רוצים לעשות הזמנה גדולה-בבקשה,תתקשרו אלינו לפני זה ותעדכנו אותנו.",
        "greetingsText6": "חשוב מאוד לציין בהזמנה את כל הפרטים הרלוונטים כולל השעה בה אתם רוצים לקבל את ההזמנה!",
        "add_to_cart": "הוסף לסל",
        "added_to_cart": "נוסף לסל",
        "total": 'סה"כ לתשלום',
        "pay": "לשלם",
        "payment-title": "השלמת הזמנה",
        "payment-type": "אמצעי תשלום",
        "terminal": "כרטיס",
        "cash": "מזומן",
        "firstname": "שם מלא",
        "tel": "טלפון",
        "deliv-address": "כתובת למשלוח",
        "mail": "כתובת אימייל",
        "message": "הודעה",
        "feedback": "משוב",
        "contacts": "אנש קשר",
        "time": "שעות פעילות ",
        "timeItem1": "ימים א-ד 07:00-16:00",
        "timeItem2": "יום ה 07:00-17:00",
        "timeItem3": "יום ו-07:00-16:00",
        "timeItem4": "שבת-סגור",
        "address": "כתובת",
        "address-text": "חיפה, רחוב שונית 12",
        "policy": "אנש קשר",
        "terms": "תנאי שימוש",

        // catalogue items
        "item_1": "קרואסון חמאה - קרואסון חמאה קלאסי",
        "item_2": "קרואסון שוקולד - במילוי שוקולד חלב",
        "item_3": "קרואסון שוקולד שקדים - קרואסון שוקולד במילוי קרם שקדים",
        "item_4": "קרואסון פקאן - במילוי קרם פקאן",
        "item_5": "קרואסון פיסטוק - במילוי קרם פיסטוק",
        "item_6": "קרואסון שקדים - במילוי קרם שקדים",
        "item_7": "קינמון - מאפה עם קינמון וסוכר",
        "item_8": "דייניש פירות יער - פירות יער וקרם מסקרפונה",
        "item_9": "קראפין פיסטוק אמרנה - קרם פיסטוק איראני ודובדבני אמרנה",
        "item_10": "קראפין פטל - קרם מסקרפונה ופטל",
        "item_11": "פאן סוויס - קרם פטיסייר ושוקולד מריר",
        "item_12": "גביניות - קרם ריקוטה וניל",
        "item_13": "דייניש קרמבל תפוחים - תפוחים מקורמלים ושטרוייזל",
        "item_14": "קרואסון ג'אנדויה - שוקולד בטעם אגוזי לוז",
        "item_15": "קרואסון בטעם פיסטוק ושוקולד לבן - בטעם פיסטוק ושוקולד לבן",
        "item_16": "בורקס גבינה - תערובת גבינות ושומשום",
        "item_17": "בורקס פטה וזיתים - פטה צאן, קלמטה, אורגנו, גרעיני דלעת, קצח ושומשום",
        "item_18": "בורקס תפוח אדמה - פירה של רובושון, בצל חרוך וקצח",
        "item_19": "בורקס תרד מנגול - תרד, מנגול, זעתר ופטה צאן",
        "item_20": "מאפה פורטובלו - בשמל כמהין, ראגו פטריות, מנצ'נגו ופירורי לחם",
        "item_21": "מאפה גבינת ברי - גבינת ברי וענבים מעושנים",
        "item_22": "מאפה ארטישוק - ארטישוק, עגבניות צלויות, בצל צלוי, קונפי שום ופרמז'ן",
        "item_23": "כרישה עם בצלים - בצלים וגבינת פרובולונה",
        "item_24": "מלכין - חצילים בחמאה חומה, מרווה, דבש ולאבנה",
        "item_25": "עוגת גבינה - פרוסת עוגת גבינה של נעמה",
        "item_26": "טארטלט לימון - קרם לימון ומרנג",
        "item_27": "טארטלט ג'אנדויה - קרם שוקולד ג'אנדויה, קרם אגוזי לוז וקרמל מלוח",
        "item_28": "מילפיי - בצק עלים מקורמל ומוסלין וניל",
        "item_29": "פריז ברסט פיסטוק - פחזנית במילוי מוסלין פיסטוק וקרמל",
        "item_30": "אסטרהאזי - מרנג שקדים וביניהם קרם אגוזים",
        "item_31": "אופרה - עוגת שכבות בטעמי קפה ושוקולד",
        "item_32": "פיתה חצילים - חצילים, פטה ועלי תבלין",
        "item_33": "פיתה זעתר - זעתר ומוצרלה",
        "item_34": "פוקאצ'ה - עגבניות לחות, שום קונפי ורוקט",
        "item_35": "כריך סלמון - סלמון כבוש בעבודת יד, גבינת שמנת, עגבניות, מלפפון, חמוצים וחסה בתוספת סלט אישי",
        "item_36": "כריך ברי - ברי צלויה, ויניגרט, אגס ביין, מלפפון וחסה בתוספת סלט אישי",
        "item_37": "בורקס פינוקים - בורקס גבינה במילוי אריסה, טחינה, חמוצים, עגבניה, ביצה קשה ועלי רוקט",
        "item_38": "סביח תפוח אדמה - בורקס תפוח אדמה במילוי חצילים, ביצה קשה, טחינה, פטרוזיליה וכוסברה",
        "item_39": "פרצעל סלט ביצים - פרצעל עם סלט ביצים, עירית ורוטב הולנדז",
        "item_40": "פרצעל טונה - פרצעל עם טונה ,ביצה, חסה, עירית וגבולים של סלרי, רוטב הולנדז",
        "item_41": "אופרה - ג'אקונד, קרם קפה, שוקולד מריר ואספרסו",
        "item_42": "מילפיי - בצק עלים מקורמל וקרם מוסלין",
        "item_43": "שוקולד רויאל - ג'אקונד, ספונג' שוקולד, שנטילי וקרם שוקולד",
        "item_44": "עוגת לימון - ספונג' שקדים, קרם לימון, שוקולד לבן, לימונצ'לו וריבת אוכמניות",
        "item_45": "עוגת אסטרהאזי - מרנג שקדים וקרם אגוזים",
        "item_46": "עוגיות חמאה - עוגיות חמאה קלאסיות - 200 גרם",
        "item_47": "בראוניז - בראוניז שוקולד - 200 גרם",
        "item_48": "עוגיות שוקולד צ'יפס - קמח שקדים ושוקולד צ'יפס - 7 עוגיות",
        "item_49": "מקרונים - יחידות של מקרונים בטעמים שונים 7",
        "item_50": "לחם כפרי - לחם מחמצת ללא תוספות",
        "item_51": "לחם דגנים - לחם מחמצת בעל תערובת דגנים עשירה",
        "item_52": "לחם אגוזי מלך וחמוציות - לחם מחמצת בתוספת אגוזי מלך וחמוציות",
        "item_53": "לחם זעתר - לחם מחמצת בתוספת זעתר ושומשום קלוי",
        "item_54": "לחם עם עגבניות מיובשות - לחם מחמצת בתוספת עגבניות מיובשות",
        "item_55": "חלה - חלה קלאסית לשבת",
        "item_56": "המבורגר - יחידות לחמניות המבורגר 3",
        "item_57": "בריוש - יחידות לחמניות בריוש 3",
        "item_58": "פרצעל - יחידות לחמניות פרצעל 3",
        "item_59": "קיש סלמון - סלמון, ברוקולי, בצל ,כרישה, שמנת",
        "item_60": "קיש תרד - תרד, מנגול, בצל, ביצים, שמנת, פטה",
        "item_61": "קיש פטריות - פטריות, שמנת, ביצים ובצל",


    },
    'rus': {
        // Русскиq
        "simply": "Просто.",
        "tasty": "Вкусно.",
        "always": "Всегда!",
        "slide-2": "Разнообразие сладких и роскошных выпечек",
        "slide-3": "Разнообразие вкусных и свежих бутербродов",
        "insta": "Наш инстаграм",
        "buy": "Заказать",
        "send": "Отправить",
        // modal
        "modal-title": "Добрый день, как Вы хотите получить свой заказ?",
        "all": "Общее меню",
        "hospital": "Больница",
        "campus": "Кампус",
        // catalogue
        "catalogue-title": "Меню",
        "menu__title": "Выберите категорию",
        "cat-1": "Сладкая выпечка",
        "cat-2": "Соленая выпечка",
        "cat-3": "Деликатесы",
        "cat-4": "Хлеб из печи",
        "cat-5": "Бутерброды",
        "cat-6": "Пасхальные пироги",
        "cat-7": "Печенье",
        "cat-8": "Хлеб",
        "cat-9": "Булочки",
        "cat-10": "Киши	",
        "reset": "Сбросить",
        "unit": "шт.",
        "cart": "Корзина",
        "greetings": "Приветствуем вас, наши соседи❤️",
        "greetingsText1": "Мы рады что вы зашли на наш сайт🥐🥨",
        "greetingsText2": "Для того что бы сделать заказ,нужно зарегистрироваться на сайте",
        "greetingsText3": "Заказ нужно выполнить за день до желаемой даты получения, до 16:00 🕓",
        "greetingsText4": "В случае, если вы забыли заказать вовремя, можно сделать это позвонив нам в пекарню(на сайте не получится создать заказ с сегодняшнего дня на сегодняшний день).",
        "greetingsText5": "Если вы хотите сделать большой заказ, пожалуйста, позвоните нам в пекарню и предупредите нас о заказе.",
        "greetingsText6": "Очень важно заполнить всю информацию во время выполнения заказа, обязательно написать номер телефона и время доставки (когда вы хотите получить ваш заказ).",
        "add_to_cart": "Добавить в корзину",
        "added_to_cart": "Добавлено в корзину",
        "total": 'Итого к оплате',
        "pay": "Оплатить",
        "payment-title": "Оформление заказа",
        "payment-type": "Способ оплаты",
        "terminal": "Терминал",
        "cash": "Наличные",
        "firstname": "Имя Фамилия",
        "tel": "Телефон",
        "deliv-address": "Адрес доставки",
        "mail": "E-Mail адрес",
        "message": "Сообщение",
        "feedback": "Обратная связь",
        "contacts": "Контакты ",
        "time": "Время работы ",
        "timeItem1": "ВС-СР 07:00-16:00",
        "timeItem2": "ЧТ. 07:00-17:00",
        "timeItem3": "ПТ. 07:00-16:00",
        "timeItem4": "СБ - закрыто",
        "address": "Адрес ",
        "address-text": "Хайфа, улица Шунит 12",
        "policy": "Политика конфиденциальности ",
        "terms": "Условия использования",
        // catalogue items
        "item_1": "Круассан с маслом - классический круассан с маслом",
        "item_2": "Круассан с шоколадом - начинка из молочного шоколада",
        "item_3": "Круассан с шоколадом и миндальным кремом - круассан с шоколадом и начинкой из миндального крема",
        "item_4": "Круассан с пеканом - начинка из крема с пеканом",
        "item_5": "Круассан с фисташками - начинка из крема с фисташками",
        "item_6": "Круассан с миндальным начинкой - начинка из миндального крема",
        "item_7": "Канель - выпечка с корицей и сахаром",
        "item_8": "Даниш с лесными ягодами - ягоды леса и крем маскарпоне",
        "item_9": "Крефин с фисташковым кремом и амаретто из вишни",
        "item_10": "Крефин с маскарпоне и малиной",
        "item_11": "Пан Суис - крем Патисьер и темный шоколад",
        "item_12": "Сырники - крем из рикотты и ванили",
        "item_13": "Даниш с карамельными яблоками и орехами штрозель",
        "item_14": "Круассан Джандуя - шоколад с вкусом лесного ореха",
        "item_15": "Круассан Пистачио и белый шоколад - пистачио и белый шоколад",
        "item_16": "Бурексы с сыром - смесь сыров и кунжута",
        "item_17": "Бурексы с фетой и оливками - овечья фета, каламата, орегано, семена льна, сумах и кунжут",
        "item_18": "Бурексы с картошкой - начинка из рататуя, нарезанного лука и сумаха",
        "item_19": "Бурексы с тархуном и манго - тархун, манго, затир и овечья фета",
        "item_20": "Мафе портобелло - в рубашке из кускуса, рагу из грибов, манчего и хлебные крошки",
        "item_21": "Мафе бри - бри и копченый виноград",
        "item_22": "Мафе артишок - артишоки, жареные помидоры, жареный лук, карамель из чеснока и пармезан",
        "item_23": "Киш с луком - лук и прошутто",
        "item_24": "Малькин - баклажаны во фритюре, мята, мед и лаванда",
        "item_25": "Торт сырный - порция торта сыра от Ноемы",
        "item_26": "Лимонный тарт - лимонный крем и маренга",
        "item_27": "Шоколадный тарт Джандуя - крем шоколада Джандуя, фисташковый крем и соленая карамель",
        "item_28": "Милфей - слоеное тесто с карамелью и ванильным муссом",
        "item_29": "Парижский брест пистачи - вафельный пирожок с начинкой из пистача и карамели",
        "item_30": "Астраханский - миндальная маренга и между ними крем из орехов",
        "item_31": "Опера - многослойный торт со вкусом кофе и шоколада",
        "item_32": "Пита с баклажанами - баклажаны, фета и листья трав",
        "item_33": "Пита с затаром - затар и моцарелла",
        "item_34": "Фокачча - сочные помидоры, конфитюр из чеснока и руккола",
        "item_35": "Лососевый сэндвич - ручная нарезка лосося, сметана, помидоры, огурцы, маринованные огурцы и салат",
        "item_36": "Бри сэндвич - запеченный бри, винегрет, груша в вине, огурец и салат",
        "item_37": "Бурексы удовольствий - бурексы с начинкой из хумуса, тахини, огурцов, помидоров, вареного яйца и рукколы",
        "item_38": "Пирожок с картошкой - пирожок с картошкой с начинкой из баклажанов, вареного яйца, тахини, петрушки и кусбара",
        "item_39": "Салат яйца - салат яйца, айвы и соуса Голландский",
        "item_40": "Салат тунца - салат тунца, яйца, салата, яичной листвы и сельдерея, сельдерейной заправки",
        "item_41": "Опера - жаконд, кофейный крем, горький шоколад и эспрессо",
        "item_42": "Милфей - слоеное тесто с карамелью и муссом ванили",
        "item_43": "Шоколад Рояль - жаконд, шоколадный спонж, шантий и шоколадный крем",
        "item_44": "Лимонный торт - миндальный спонж, лимонный крем, белый шоколад, лимончелло и клубничное варенье",
        "item_45": "Тарт Астрахан - миндаль и ореховый крем",
        "item_46": "Печенье с маслом - классическое печенье с маслом - 200 грамм",
        "item_47": "Брауни - шоколадное печенье - 200 грамм",
        "item_48": "Печенье с шоколадными чипсами - миндальная мука и шоколадные чипсы - 7 печенья",
        "item_49": "Макаронсы - единицы макаронов разных вкусов - 7",
        "item_50": "Деревенский хлеб - хлеб на закваске без добавок",
        "item_51": "Хлеб из зерновых - хлеб на закваске с богатой смесью зерен",
        "item_52": "Ореховый хлеб с клюквой - хлеб на закваске с добавлением орехов и клюквы",
        "item_53": "Хлеб со зверобоем - хлеб на закваске с добавлением зверобоя и поджаренного кунжута",
        "item_54": "Хлеб с сушеными помидорами - хлеб на закваске с добавлением сушеных помидоров",
        "item_55": "Хала - классическая хала на Шаббат",
        "item_56": "Гамбургеры - единицы булочек для гамбургеров 3",
        "item_57": "Бриош - единицы булочек бриош 3",
        "item_58": "Пицца с брюкселями - единицы булочек пиццы 3",
        "item_59": "Киш с лососем - лосось, брокколи, лук, картофель, сметана",
        "item_60": "Киш с тыквой - тыква, манголь, лук, яйца, сливки, фета",
        "item_61": "Киш с грибами - грибы, сливки, яйца и лук",


    }
};

// Определение основного языка по умолчания для страницы при загрузке
let languages = localStorage.getItem('selectedLanguage') || 'he';
// Подключение кнопок переключающих язык
const rus = document.getElementById('rus');
const he = document.getElementById('he');

// Клик на кнопку Русский
rus.onclick = () => {
    setLanguage('rus');
    setLtrDir()
    render();
}
// Клик на кнопку עברית
he.onclick = () => {
    setLanguage('he');
    setRtlDir();
    render();
}
// Функция сеттер языка, сохраняющая язык в localStorage
const setLanguage = (lang) => {
    languages = lang;
    localStorage.setItem('selectedLanguage', lang);
}
// const setLanguage = (lang) => {
//     languages = lang
// }
// Поиск по translates
function localize(key) {
    return translates[languages][key]
}
// ----- Переключаетль языков
$(document).ready(function () {
    let selectedLanguage = localStorage.getItem('selectedLanguage');

    // Проверка языка в localStorage и соответствующее скрытие блоков
    if (selectedLanguage === 'he') {
        $('#rus').show();
        $('#he').hide();
    } else {
        $('#rus').hide();
        $('#he').show();

    }

    // Клик на блок с русским языком
    $('#rus').on('click', function () {
        $('#rus').hide();
        $('#he').show();
    });

    // Клик на блок с ивритом
    $('#he').on('click', function () {
        $('#rus').show();
        $('#he').hide();
    });
});

// Функция render для отрисовки на UI
// const render = () => {
//     document.getElementById('welcome').textContent = localize('welcome');
// }
const render = () => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = localize(key);
        element.value = localize(key);
    });
}
// Первый рендер переводов
render();


// При загрузке страницы устанавливаем язык из localStorage
document.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        languages = selectedLanguage;
        render(); // Перерисовываем интерфейс на выбранном языке
    }
});

// ----- RTL
// список элементов, для которых будет переключаться направление текста
const elements = [
    ...document.querySelectorAll('.catalogue__item-description'),
    ...document.querySelectorAll('.link-list'),
    ...document.querySelectorAll('.menu__title'),
    ...document.querySelectorAll('.payment__details'),
    ...document.querySelectorAll('.payment__title'),
    ...document.querySelectorAll('.payment__amount'),
    // Добавь сюда другие элементы, если нужно расширить список
];

function setRtlDir() {
    let selectedLanguage = localStorage.getItem('selectedLanguage');
    if (!selectedLanguage) {
        selectedLanguage = 'he'; // Если язык не выбран, устанавливаем по умолчанию 'he'
        localStorage.setItem('selectedLanguage', selectedLanguage); // Сохраняем выбранный язык
    }

    if (selectedLanguage === 'he') {
        elements.forEach(element => {
            element.setAttribute('dir', 'rtl');
        });
    } else {
        elements.forEach(element => {
            element.setAttribute('dir', 'ltr');
        });
    }
}

function setLtrDir() {
    let selectedLanguage = localStorage.getItem('selectedLanguage');
    if (!selectedLanguage) {
        selectedLanguage = 'he'; // Если язык не выбран, устанавливаем по умолчанию 'he'
        localStorage.setItem('selectedLanguage', selectedLanguage); // Сохраняем выбранный язык
    }

    if (selectedLanguage === 'rus') {
        elements.forEach(element => {
            element.setAttribute('dir', 'ltr');
        });
    } else {
        elements.forEach(element => {
            element.setAttribute('dir', 'rtl');
        });
    }
}

// Вызываем функцию при первичной загрузке страницы
setRtlDir();



