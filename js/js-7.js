

// 7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).


let a = prompt("Введите число от 0 до 59");
switch(true){
    case a > 0 && a < 16 :
        alert("Первая четверть");
        break;
    case a > 15 && a < 31 :   
    alert("Вторая четверть"); 
         break;   
    case a > 30 && a < 46 :   
    alert("Третья четверть"); 
         break;   
    case a > 45 && a < 60 :   
    alert("Четвёртая четверть"); 
         break; 
    default:
            alert('Только число и от 0 до 60'); 
}
