var aboutData = {
    name: "Mieszko",
    bio: "Велопутешественник. Исследую мир на двух колесах. В этом архиве — все мои маршруты и приключения.",
    
    // Ссылки на соцсети. Если оставить ссылку пустой "", кнопка НЕ появится.
    socials: [
        { name: "VK", url: "https://vk.com/your_profile", color: "#0077FF" },
        { name: "YouTube", url: "", color: "#FF0000" }, // Не отобразится, так как ссылка пустая
        { name: "Instagram", url: "https://instagram.com/your_profile", color: "#E1306C" },
        { name: "Telegram", url: "https://t.me/your_channel", color: "#0088cc" }
    ],

    // Раздел поддержки
    supportTitle: "Поддержать мои путешествия",
    supportText: "Если вам нравится то, что я делаю, вы можете помочь проекту:",
    
    // Ссылки на оплату (СБП, Boosty, донаты и т.д.)
    paymentLinks: [
        { name: "Перевод СБП", url: "https://www.tinkoff.ru/rm/your_link/", color: "#28a745" },
        { name: "Закинуть на чай", url: "", color: "#ffc107" } // Не отобразится
    ],

    // QR-коды (фотографии должны лежать в корне гитхаба)
    qrCodes: [
        { name: "Сбербанк / Тинькофф", img: "qr_card.jpg" }
    ]
};