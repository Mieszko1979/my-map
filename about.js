const aboutData = {
    name: "Mieszko",
    bio: "Велопутешественник. Исследую мир на двух колесах. В этом архиве — все мои маршруты и приключения.",
    
    // ДОБАВЛЯЙ ЛЮБЫЕ СОЦСЕТИ ТУТ
    socials: [
        { id: 'vk', url: "https://vk.com/mieszko_travel" },
        { id: 'Dzen', url: "https://dzen.ru/mieszko_travel" },
        { id: 'youtube', url: "https://youtube.com/..." },
        { id: 'telegram', url: "https://t.me/..." },
        { id: 'instagram', url: "" }, // Если пусто, иконка не появится
        { id: 'odnoklassniki', url: "https://ok.ru/group/54355827359920" },
        { id: 'strava', url: "https://strava.com/..." },
        { id: 'komoot', url: "https://komoot.com/..." }
    ],

    support: {
        // КУАР-КОДЫ (Для ПК версии слева)
        qrCodes: [
            { name: "Сбербанк", img: "qr_sber.png" },
            { name: "Т-Банк", img: "qr_tbank.png" }
        ],
        // СПОСОБЫ ОПЛАТЫ (Для ПК версии справа, для мобилок - списком)
        // Добавляй любые: donationalerts, donatpay, boosty и т.д.
        buttons: [
            { name: "Т-Банк (CloudTips)", url: "https://pay.cloudtips.ru/p/977f6357", color: "#ffdd00", textColor: "#000" },
            { name: "ЮMoney", url: "https://yoomoney.ru/to/410014509615752", color: "#803cff", textColor: "#fff" },
            { name: "Donationalerts", url: "https://donationalerts.com/...", color: "#ffad23", textColor: "#fff" },
            { name: "DonatPay", url: "https://donatpay.ru/...", color: "#673ab7", textColor: "#fff" },
            { name: "VK Pay", url: "", color: "#0077ff", textColor: "#fff" },
            { name: "Boosty", url: "", color: "#f15f2c", textColor: "#fff" },
            { name: "Дзен", url: "https://dzen.ru/mieszko_travel?donate=true", color: "#0077ff", textColor: "#fff" },
        ]
    }
};
