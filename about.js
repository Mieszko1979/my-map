const aboutData = {
    name: "Здравствуйте!",
    bio: "Меня зовут Михаил. Перед вами — карта моего велопутешествия.\n\nЕсли я сейчас в пути, вы можете следить за моим маршрутом в реальном времени. Нажимайте на точки, чтобы узнать детали дня: где была ночевка, посмотреть трек (если он был записан) и перейти к ежедневному отчету в ВК. Можно посмотреть фотографии на маршруте.\n\nВ меню также доступны архивы прошлых велопутешествий.\n\nПодписывайтесь на мои соцсети и приятного просмотра! А если у вас возникнет желание поддержать проект, сделать это можно по кнопке ниже.\n\nВсем спасибо!",
    
    // ФОТО (имена файлов, которые ты сохранил)
    authorPhoto: "my_photo.jpg",
    bikePhoto: "bike_photo.jpg",
    mobileCover: "mobile_cover.jpg",

    // СОЦИАЛЬНЫЕ СЕТИ
    socials: [
        { id: 'vk', url: "https://vk.com/mieszko_travel" },
        { id: 'dzen', url: "https://dzen.ru/mieszko_travel" },
        { id: 'odnoklassniki', url: "https://ok.ru/mieszkotravel" },
        { id: 'youtube', url: "https://www.youtube.com/@map9" },
        { id: 'telegram', url: "https://t.me/mieszko_travel" },
        { id: 'instagram', url: "https://www.instagram.com/mieszko_9/" },
        { id: 'strava', url: "https://www.strava.com/athletes/mieszko9" },
        { id: 'komoot', url: "https://www.komoot.com/user/2104612336027" }
    ],

    support: {
        // КУАР-КОДЫ (ПК версия, левая панель)
        qrCodes: [
            { name: "CloudTips (Т-Банк)", img: "CloudTips.png" },
            { name: "OZON Банк", img: "Qrozon.png" },
            { name: "DonationAlerts", img: "DA.png" }
        ],
        // КНОПКИ ОПЛАТЫ (ПК версия - справа, Мобайл - списком)
        buttons: [
            { name: "CloudTips (Т-Банк)", url: "https://pay.cloudtips.ru/p/977f6357", color: "#FFDD00", textColor: "#000" },
            { name: "ЮMoney", url: "https://yoomoney.ru/to/410014509615752", color: "#803CFF", textColor: "#fff" },
            { name: "Ozon Банк", url: "https://finance.ozon.ru/apps/sbp/ozonbankpay/019ddf2d-15f0-702f-93c2-e82fcba8fb1b", color: "#005BFF", textColor: "#fff" },
            { name: "Дзен донаты", url: "https://dzen.ru/mieszko_travel?donate=true", color: "#000", textColor: "#fff" },
            { name: "VK Pay", url: "https://vk.com/mieszko_travel?w=app5727453_-171082824", color: "#0077FF", textColor: "#fff" },
            { name: "Donationalerts", url: "https://www.donationalerts.com/r/mieszko", color: "#FFAD23", textColor: "#fff" },
            { name: "DonatPay", url: "", color: "#673AB7", textColor: "#fff" }, // Кнопка не появится, пока нет ссылки
            { name: "Boosty", url: "", color: "#F15F2C", textColor: "#fff" },    // Кнопка не появится, пока нет ссылки
            { name: "Alipay", url: "https://www.donationalerts.com/r/mieszko", color: "#00A3EE", textColor: "#fff" }
        ],
        // КРИПТОВАЛЮТА (в конце списка оплаты)
        crypto: [
            { name: "USDT (TRC-20)", address: "TAxPGZAEb7mjacpaqgt8k8299Dvc6UrX9i" },
            { name: "USDC (ERC-20)", address: "0x95dF5539430154F833e5455272a422A794D2aCb6" }
        ]
    }
};
