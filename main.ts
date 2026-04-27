var express = require('express');
var app = express();

// Налаштовуємо головний маршрут із типізацією змінних req та res
app.get('/', (req: any, res: any) => {
    // Відправляємо відформатоване повідомлення
    res.send('<h1 style="text-align: center;">Привіт, мій друже!</h1>');
});

// Запускаємо сервер на порту 3000
app.listen(3000, () => {
    console.log('Сервер працює на порту 3000!');
});