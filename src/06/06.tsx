import {MouseEventHandler} from "react";
import react from "react";

// callback функция - функция кторую мы отдаем кому-то

/*let houses =[]
export const callbackfn = ()=>{
    return 'hello'
}*/

//houses.map(callbackfn)



/*const callback = () => {
    alert('hello')
}
setTimeout(callback, 1000)*/ // дайте функцию которую я вызову через секунду

//callback()- вызов коллбэка
// callback - передача коллбэка без скобочек! функция запустится потом, кто-то запустит функцию

export const User = () => {
    // подписчики
    const deleteUser = (event: React.MouseEvent<HTMLButtonElement>) => {
alert(event.currentTarget.name)

    };
    const saveUser = () => {
        alert('user saved successfully')
    }
    const onNameChanged=()=>{
        console.log('onNameChanged successfully')
    }
    const onBlurChanged=()=>{
        console.log('onBlurChanged lost')
    }
    return <div>
        <textarea onChange={onNameChanged} onBlur={onBlurChanged}>Nastya</textarea> {/*// on blur - когда фокус теряется*/}
        <button name ='delete' onClick={deleteUser}>Delete</button>
       {/* // подписываемся на событие клик*/}
        <button onClick={saveUser}>Save</button>
    </div>
    // когда срабатывает событие - генерируется объект собятия event - содержит всю информацию о приозошедшем событии
}