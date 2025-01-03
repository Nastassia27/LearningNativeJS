/*const user={
    name: 'John',
    age: 12
}*/
//мутабельный мир, мутирующе операции
export type UserType={
    name: string,
    age: number

}
export type UserType2={
    name: string,
    age: number
    address:{
        title: string
    }
}


function increaseAge(u: UserType){
    u.age++
}
 test ('reference type test', ()=> {
 let user: UserType = {
     name: 'John',
     age: 12
 }
 increaseAge(user)
     expect(user.age).toBe(13)
     const superman = user
     superman.age=1000
     expect(user.age).toBe(1000)
 })

test ('reference type test 2', ()=> {
    let user: UserType2 = {
        name: 'John',
        age: 12,
        address:{
            title: 'minsk'
        }
    }
   //let addr = user.address

    let user2: UserType2={
        name: 'John',
        age: 12,
        address: user.address
    }

    user2.address.title='Kanary'
   expect( user.address.title).toBe('Kanary')
   expect( user.address).toBe(user2.address)


})

test ('array type test', ()=> {
    let users = [
        {
            name: 'John',
            age: 12
        },
        {
            name: 'John',
            age: 12
        }
    ]
    let admins = users
    admins.push({
        name: 'Nastya',
        age: 15
    })

    expect(users[2]).toEqual({
        name: 'Nastya',
        age: 15
    })

})

test ('value type test', ()=> {
    let usersCount = 1000
    let adminsCount = usersCount
    adminsCount = adminsCount + 1


})