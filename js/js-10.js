



// 10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
//     задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
//     т.д.). Скрипт определение поры года написать через switch.


let day = prompt('Введите колличество дней от 1 дo 365');

switch(true) {
    case day <= 0 || day > 365:
        alert('Введите колличество дней от 1 дo 365');
    break;    
    case  day >= 1 && day <= 31:
           alert('Cейчас зима - январь месяц');  
    break;         
    case   day > 31 && day < 60:
        alert('Cейчас зима - февраль месяц'); 
    break;      
    case   day >= 60 && day <= 90:
        alert('Cейчас весна - март месяц'); 
    break;
    case   day > 90 && day <= 120:
        alert('Cейчас весна - апрель месяц'); 
    break;
    case   day > 120 && day <= 151:
        alert('Cейчас весна - май месяц'); 
    break; 
    case   day > 151 && day <= 181:
        alert('Cейчас лето - июнь месяц'); 
    break;        
    case   day > 181 && day <= 212:
        alert('Cейчас лето - июль месяц'); 
    break;        
    case   day > 212 && day <= 243:
        alert('Cейчас лето - август месяц'); 
    break;        
    case   day > 243 && day <= 273:
        alert('Cейчас осень - сентябрь месяц'); 
    break;        
    case   day > 273 && day <= 304:
        alert('Cейчас осень - октябрь месяц'); 
    break;        
    case   day > 304 && day <= 334:
        alert('Cейчас осень - ноябрь месяц'); 
    break;        
    case   day > 334 && day <= 365:
        alert('Cейчас зима - декабрь месяц'); 
    break;        
}





