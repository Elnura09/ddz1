var zodiacSign = prompt('Введите месяц')
var date = Number(prompt('Введите дату рождения'))

if (zodiacSign === 'Март' && date >= 21 && date <= 31){
    console.log('Овен')
}else if (zodiacSign === 'Март' && date <= 20 && date >= 31){
    console.log('Рыбы')
}else if (zodiacSign === 'Апрель' && date >= 20 && date <= 30){
    console.log('Телец')
}else if (zodiacSign === 'Апрель' && date <= 19 && date >= 30){
    console.log('Овен')
}else if (zodiacSign === 'Май' && date >= 21 && date <= 31){
    console.log('Блтзнецы')
}else {
    console.log('error')
}