import react from "react";
type ManType ={
    name: string,
    age: number,
    lessons:Array<{title:string}>,
}
type PropsType = {
title: string,
    man: ManType
}
export const Man: React.FC<PropsType>=(props)=>{
    //export const Man: React.FC<PropsType>=({title, man})
    //({title, man...props})
    //({title, man...restProps})
    const {title, man}=props
return <div></div>

}

// массивы
/*let props ={
    name: 'foo',
    age: 12,
    lessons:[{title:'hi'}, {title:'hi'}],
}*/
//const [l1,l2]=props.lessons
//changes for commit
//const [ ,l2]=props.lessons const [,,l2]=props.lessons const [l1,...restLessons]=props.lessons
const[message, setMessage] = React.useState<string>('') //деструктуризация