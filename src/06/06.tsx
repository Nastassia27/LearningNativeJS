// callback функция - функция кторую мы отдаем кому-то

/*let houses =[]
export const callbackfn = ()=>{
    return 'hello'
}*/

//houses.map(callbackfn)

const callback =()=>{
    alert('hello')
}
setTimeout(callback, 1000) // дайте функцию которую я вызову через секунду

//callback()- вызов коллбэка
// callback - передача коллбэка без скобочек! функция запустится потом, кто-то запустит функцию
export const User = ()=>{
    const deleteUser = ()=>{
        alert('user deleted successfully')
    }
    const saveUser = ()=>{
        alert('user saved successfully')
    }
    return <div>Nastya
        <button onClick={deleteUser}>Delete</button> // подписываемся на событие клик
        <button onClick={saveUser}>Save</button>
        </div>
}