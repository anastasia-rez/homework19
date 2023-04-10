let mass = +prompt('Масса тела (в кг)');
console.log(`Масса тела ${mass} кг.`);

let height = +prompt('Рост (в м)');
console.log(`Рост ${height} м.`);

let index = mass / (height ** 2);
alert(`Ваш индекс массы тела: ${index}`);

if(index < 16){
    alert('Выраженный дефицит массы тела');
} else if(index < 18.5){
    alert('Недостаточная (дефицит) масса тела');
} else if(index < 25){
    alert('Норма');
} else if(index < 30){
    alert('Избыточная масса тела (предожирение)');
} else if(index < 35){
    alert('Ожирение 1 степени');
} else if(index < 40){
    alert('Ожирение 2 степени');
} else if(index > 40){
    alert('Ожирение 3 степени');
}