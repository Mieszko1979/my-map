var aboutData = {
    name: "Mieszko",
    bio: "Велопутешественник. Исследую мир на двух колесах. В этом архиве — все мои маршруты и приключения.",
    
    // СОЦСЕТИ
    socials: [
        { id: "vk", url: "https://vk.com/mieszko_travel" },
        { id: "dzen", url: "https://dzen.ru/mieszko_travel" },
        { id: "instagram", url: "https://instagram.com/mieszko_travel" },
        { id: "youtube", url: "https://youtube.com/..." },
        { id: "telegram", url: "https://t.me/..." },
        { id: "komoot", url: "https://www.komoot.com/user/..." },
        { id: "strava", url: "https://www.strava.com/athletes/..." }
    ],

    // КНОПКИ ОПЛАТЫ
    supportTitle: "Поддержать проект",
    supportText: "Вы можете поддержать мои путешествия через удобный вам сервис:",
    paymentButtons: [
        { name: "Сбербанк", url: "https://www.sberbank.ru/...", color: "#21a038" },
        { name: "Т-Банк", url: "https://www.tbank.ru/...", color: "#ffdd2d", textColor: "#000" },
        
        // ВАЖНО: Вместо ссылки для ЮMoney теперь специальный тип
        { id: "yoomoney_widget", name: "ЮMoney" }, 

        { name: "Дзен", url: "https://dzen.ru/mieszko_travel?donate=true", color: "#000000" }
    ],

    // QR-КОДЫ
    qrCodes: [
        { name: "QR-код СБП", img: "qr_sbp.jpg" }
    ]
};
