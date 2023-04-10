let year = +prompt('Введите год');
console.log(`Проверяется год ${year}`);

if(year % 400 == 0){
    alert(`Год ${year} високостный`);
} else if (year % 100 == 0) {
    alert(`Год ${year} не високостный`);
} else if(year % 4 == 0){
    alert(`Год ${year} високосный`);
} else{
    alert(`Год ${year} не високосный`);
}
