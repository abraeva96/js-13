let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vitae."
let arr = str.split("")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "o" || arr[i] == "e" || arr[i] == "u" || arr[i] == "i") {
        arr.splice(i, 1)
        i = i - 1
    }
}
console.log(arr)



// const array = []


// for (let i = 0; i < Infinity; i++) {

//     let a = prompt('Введите команду: add/del/stop');
//     let b = a.split(',');
//     if (b[0] == 'add') {
//         array.push(b[1])
//     } else if (b[0] == 'del') {
//         array.splice(b, 1)
//     }
//     for (let q = 0; q < array.length; q++) {
//         if (b[0] == 'stop') {
//             break
//         }

//     }




// }


// console.log(array)

const array = [] //пустой массив

for (;;) {
    let a = prompt('Введите команду: add/del/stop') //задать команду. Например: добавить элемент 
    let b = a.split(',')

    if (b[0] == 'add') {
        array.push(b[1])
    }

    if (b[0] == "del") {
        let index = array.indexOf(b[1])
        array.splice(index, 1)
            // console.log(index)
    }

    if (b[0] == "stop") {
        break
    }
}

console.log(array)






//     if  {
//         let i = array.indexOf(b[1])
//         array.splice(i, 1)
//             // console.log(i)
//     }


// }