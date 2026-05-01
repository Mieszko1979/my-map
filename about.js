const aboutData = {
    name: "Мое велопутешествие",
    bio: "Меня зовут Михаил. Это карта моего велопутешествия (если я в пути). Также здесь собраны все мои предыдущие велопутешествия. После нажатия на кружок откроется окошко, там будет небольшпя информация от ночевке. Также будет ссылка на пост в ВК, и трек за текущий день (конечно если он будет записан).",
    
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
        // КУАР-КОДЫ (Для ПК версии слева)
        qrCodes: [
            { name: "CloudTips (Т-Банк)", img: "CloudTips.png" },
            { name: "OZON Банк", img: "Qrozon.png" }
        ],
        // КНОПКИ ОПЛАТЫ (Для ПК версии справа, для мобилок - списком)
        buttons: [
            { name: "CloudTips (Т-Банк)", url: "https://pay.cloudtips.ru/p/977f6357", color: "#FFDD00", textColor: "#000" },
            { name: "ЮMoney", url: "https://yoomoney.ru/to/410014509615752", color: "#803CFF", textColor: "#fff" },
            { name: "Ozon Банк", url: "https://finance.ozon.ru/apps/sbp/ozonbankpay/019ddf2d-15f0-702f-93c2-e82fcba8fb1b", color: "#005BFF", textColor: "#fff" },
            { name: "Дзен донаты", url: "https://dzen.ru/mieszko_travel?donate=true", color: "#000", textColor: "#fff" },
            { name: "VK Pay", url: "https://vk.com/mieszko_travel?w=app5727453_-171082824", color: "#0077FF", textColor: "#fff" },
            { name: "Donationalerts", url: "https://www.", color: "#FFAD23", textColor: "#fff" },
            { name: "DonatPay", url: "", color: "#673AB7", textColor: "#fff" },
            { name: "Boosty", url: "", color: "#F15F2C", textColor: "#fff" },
            { name: "Alipay", url: "https://www.", color: "#00A3EE", textColor: "#fff" }
        ]
    }
};
