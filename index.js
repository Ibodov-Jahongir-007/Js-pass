let user = {
    name: "Amal",
    surName: "truev",
    age: 29,
    wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
    wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
    polniImya: function() {
        return this.name + ' ' + this.surName
    }
}

let passport = {
    serries: "AC",
    number: 213123123,
    date: "2019-06-06",
    exp: "2029-06-06",
}
let one = Object.assign({} ,user,{passport})
// console.log(one);
let keys = Object.keys(one)
// console.log(keys);
let values = Object.values(one)
// console.log(values);
const five = [].concat(keys,values)
// console.log(five);

let type = {
    string: [],
    number: [],
    object: [],
    boolean: [],
    function: []
}


let sort = five.forEach((typ) => {
    if(typeof typ === 'string') {
       type.string.push(typ)
    } else if(typeof typ === 'number') {
        type.number.push(typ)
    } else if(typeof typ === 'object') {
        type.object.push(typ)
    } else if(typeof typ === 'boolean') {
        type.boolean.push(typ)
    } else {
        type.function.push(typ)
    }
}) 


console.log(type);
    
// }


// TZ
// Соеденить два объекта в одно целое (новый объект)
// Получить все ключи из нового объекта и сохранить их в новую переменную
// Получить все значения из нового объекта и сохранить их в новую переменную
// Соеденить две этих массива (ключи и значения)
// Отфильтровать массив по их типам элементов

