const { reply } = require('alice-renderer')

function greeting() {
    const sayHi = [
        "Привет",
        "Доброго времени суток",
        "Здравтвуйте"
    ]

    const qwestion = [
        "Ком+у будем дарить подарок",
        "Кто получит подарок от Вас",
        "Ком+у предназн+ачен подарок",
        "Для ког+о будет подарок"
    ]
    
    return reply `
        ${sayHi}, меня зовут Оксана, я помогу Вам с выбором подарка.
        ${qwestion}?
    `
}

module.exports = greeting