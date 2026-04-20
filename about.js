var aboutData = {
    name: "Mieszko",
    bio: "Велопутешественник. Исследую мир на двух колесах. В этом архиве — все мои маршруты и приключения.",
    
    // СОЦСЕТИ (будут иконками в верхней части окна)
    socials: [
        { id: "vk", url: "https://vk.com/mieszko_travel" },
        { id: "dzen", url: "https://dzen.ru/mieszko_travel" },
        { id: "odnoklassniki", url: "https://ok.ru/profile/..." },
        { id: "instagram", url: "https://instagram.com/..." },
        { id: "youtube", url: "https://youtube.com/..." },
        { id: "telegram", url: "https://t.me/..." }
    ],

    // КНОПКИ ОПЛАТЫ
    supportTitle: "Поддержать проект",
    supportText: "Вы можете поддержать мои путешествия через удобный вам сервис:",
    paymentButtons: [
        { name: "Сбербанк", url: "https://www.sberbank.ru/...", color: "#21a038" },
        { name: "Т-Банк", url: "https://www.tbank.ru/...", color: "#ffdd2d", textColor: "#000" },
        { name: "ЮMoney", url: "https://yoomoney.ru/...", color: "#8b3ffd" },
        // ДОБАВИЛИ ДЗЕН ПОД ЮМАНИ
        { name: "Дзен", url: "https://dzen.ru/mieszko_travel?donate=true", color: "#000000" }
    ],

    // QR-КОДЫ (будут скрыты под кнопкой, картинки должны лежать в корне гитхаба)
    qrCodes: [
        { name: "QR-код СБП", img: "qr_sbp.jpg" }
    ]
};
