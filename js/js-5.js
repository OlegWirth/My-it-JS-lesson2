



// 5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
// квадрат.

let a = 10,
    b = 5,
    pr = a * b,
    s = a + b,
    r = a - b;

alert('Произведение: ' + pr);
// alert('Сумма: ' + s);
alert('Разность: ' + r);

if (s > 1) alert('Сумма в квадрате : ' + s * s);