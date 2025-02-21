//массив - структура данных, а не тип
// хотя сам ассотиативный массив в джс - объект
// user['address']['city']... = user.address.city
// можем даже так users['map']
// когда обращаешься по свойству тк объект в памяти, он быстро выдаст значение
// а в массиве нужно будет через мап или файнд искать нужный айдишник и получать значение
// с точки зрения первоманса  когда нужно доставать объекты по айдишнику намного бысрее через ассоциативный массив
// если добавлять значения:
// в массиве через пуш он просто добавится
// а в объекте если такое значение есть - перезапишет, если нет - добавит
// с массивом сложные операции

type UserType = {
    [key: string]: { id: string, name: string }
}

export const users:UserType = {
    '1': {id: '10', name: 'Cristian'},
    '2': {id: '20', name: 'david'},
    '3': {id: '30', name: 'joe'},
    '4': {id: '40', name: 'tom'},
    '5': {id: '50', name: 'qwe'},
    '6': {id: '60', name: 'op'},
    '7': {id: '70', name: 'name'},
    '8': {id: '80', name: 'guy'},
}
Object.keys(users) //[1 2 3 4 5] т. е у нас был объект мы вывели из него массив ключей и уже можем мапиться по нему
Object.values(users) //имена выведет

let user = {id: '100', name: 'new user'}
users[user.id] = user
// delete users[user.id]
users[user.id].name = 'hello world'
console.log(users)


export const userArray = [
    {id: '10', name: 'Cristian'},
    {id: '20', name: 'david'},
    {id: '30', name: 'joe'},
    {id: '40', name: 'tom'},
    {id: '50', name: 'qwe'},
    {id: '60', name: 'op'},
    {id: '70', name: 'name'},
    {id: '80', name: 'guy'},
]

userArray.find (user => user.id === '10')
// запись длиннее чем искать через объект user[1]
userArray.filter(user => user.id === '10')