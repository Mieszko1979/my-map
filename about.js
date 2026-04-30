const aboutData = {
    name: "Mieszko",
    bio: "Велопутешественник. Исследую мир на двух колесах. В этом архиве — все мои маршруты и приключения.",
    
    // Соцсети (как и были)
    socials: [
        { id: 'vk', url: "https://vk.com/mieszko" },
        { id: 'dzen', url: "https://dzen.ru/mieszko" },
        { id: 'odnoklassniki', url: "" },
        { id: 'instagram', url: "" },
        { id: 'youtube', url: "https://youtube.com/@mieszko" },
        { id: 'telegram', url: "https://t.me/mieszko" },
        { id: 'komoot', url: "" },
        { id: 'strava', url: "" }
    ],

    // Настройки донатов
    support: {
        // Куар-коды (только для ПК)
        qrCodes: [
            { name: "Сбербанк", img: "qr_sber.png" },
            { name: "Т-Банк", img: "qr_tbank.png" }
        ],
        // Кнопки-ссылки
        buttons: [
            { id: "cloudtips", name: "Т-Банк (CloudTips)", url: "https://pay.cloudtips.ru/p/...", color: "#ffdd00", textColor: "#000" },
            { id: "yoomoney", name: "ЮMoney", url: "https://yoomoney.ru/to/...", color: "#803cff", textColor: "#fff" },
            { id: "vkpay", name: "VK Pay", url: "", color: "#0077ff", textColor: "#fff" },
            { id: "boosty", name: "Boosty", url: "", color: "#f15f2c", textColor: "#fff" },
            { id: "dzen", name: "Дзен (Донат)", url: "https://dzen.ru/...", color: "#000", textColor: "#fff" }
        ],
        // Криптовалюта
        crypto: {
            name: "USDT (TRC20)",
            address: "UQBc...твой_адрес_кошелька" // Оставь пустым "", если не нужно
        }
    }
};
