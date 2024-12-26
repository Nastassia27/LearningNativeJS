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
export const Man: React.FC<PropsType>=(props)=>{//export const Man: React.FC<PropsType>=({title, man})
    const {title, man}=props
return <div></div>

}