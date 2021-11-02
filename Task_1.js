// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и
//  выводит в консоль все ключи и значения только собственных свойств. 
//  Данная функция не должна возвращать значение.

const origin = {
    b: 134,
}

const obj = Object.create(origin);

obj.a = 123

for(let key in obj){
    if (obj.hasOwnProperty(key)){
        console.log(key);
    }
}