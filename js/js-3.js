// 3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.


    let a = prompt('Введите 6 цифр');
    if ((a[0] + a[1] + a[2]) == (a[3] + a[4] + a[5])){
        alert('yes');
        }else {
           alert('NO');
        }


        