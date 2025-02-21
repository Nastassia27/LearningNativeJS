export type UserType = {
    name: string;
    hair: number;
    address: {
        title: string,
        house: number
    };

};
export type LaptopType = {
    name: string;
};
type hasLaptopType = UserType & {
    laptop: LaptopType
}

// чистая функция должна обязательно что-то ретурнуть

function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    /*const copy = {
        hair: u.hair/ power,
        ...u, - shallow copy - поверхностная копия, еслив объекте есть объект то скопируется только ссылка!!!

    }- ..u перезатрет измененные волосы на оригинальные */
    // copy.hair = u.hair/power
    return copy
}

function moveUser(u: hasLaptopType, name: string) {
    const copy = {
        ...u, address: {...u.address, title: name}
    }
    return copy
}
function upgrateUserLaptop(u: hasLaptopType, title: string) {
    const copy = {...u, laptop: {...u.laptop, name: title}};
    return copy
}

test("Reference type test", () => {
    let user: UserType = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
    };
    const awesomeUser = makeHairStyle(user, 2)
    makeHairStyle(user, 2);

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(awesomeUser.address).toBe(user.address);
});

test("change address", () => {
    let user: hasLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Daniil"},
    };
    const awesomeUser = moveUser(user, 'Kiev')
    //user = awesomeUser

    expect(user).not.toBe(awesomeUser);
    expect(user.address).not.toBe(awesomeUser.address);
    expect(awesomeUser.laptop).toBe(user.laptop);
    expect(awesomeUser.address.title).toBe('Kiev');
});

test("upgrate  to macbook", () => {
    let user: hasLaptopType = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
    };
    const userWithNewLaptop = upgrateUserLaptop(user, 'Macbook')
    //user = awesomeUser

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.address).toBe(userWithNewLaptop.address);
    expect(userWithNewLaptop.laptop).not.toBe(user.laptop);
    expect(userWithNewLaptop.laptop.name).toBe('Macbook');
    expect(user.laptop.name).toBe("Zenbook");
});


type userWithBooks= hasLaptopType & {
    books: Array<string>
}
type withCompanies=  {
    companies: Array<companiesType>
}
type companiesType={
    id: number,
    title: string
}
///////////////////////////////////// arrays:
function moveUserToOtherHouse(u: userWithBooks, number: number) {
    const copy = {...u, address: {...u.address,  house: number}};
    return copy
}
function addNewBooksToUser(u: userWithBooks, newArr: Array<string>) {
   // const copyArray = u.books.push(...newArr)
    //const copyArray = u.books.concat(newArr) - concat - мимутабельное склеивание
    //const copy = {...u, books: [...u.books, copyArray]};
    const copy = {...u, books: [...u.books,...newArr]}; // [...u.books,...newArr] - will add
    //the whole newArr as one element  ['HTML', 'React', 'JS', ['ts', 'restAPI']]
    return copy
}
const changeBooks = (u: userWithBooks, el1: string, el2: string)=>({
    //const copy = {...u, books: [...u.books, u.books.map(b=> b===el1? el2: el1 )]};
   // const copy = {...u, books: [...u.books.map(b=> b===el1? el2: b )]};
   ...u, books: u.books.map(b=> b===el1? el2: b )
})
test("user with books", () => {
    let user: userWithBooks = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
        books: ['HTML','React','JS']
    };
    const userWithNewLaptop = moveUserToOtherHouse(user, 56)

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.books).toBe(userWithNewLaptop.books);
    expect(userWithNewLaptop.laptop).toBe(user.laptop);
    expect(userWithNewLaptop.address).not.toBe(user.address);
    expect(userWithNewLaptop.address.house).toBe(56);
});

test("add new books to user", () => {
    let user: userWithBooks = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
        books: ['HTML','React','JS']
    };
    const userWithNewLaptop = addNewBooksToUser(user, ['ts', 'restAPI'])

    expect(user).not.toBe(userWithNewLaptop);
    expect(user.books).not.toBe(userWithNewLaptop.books);
    expect(userWithNewLaptop.laptop).toBe(user.laptop);
    expect(userWithNewLaptop.address).toBe(user.address);

    expect(userWithNewLaptop.books.length).toBe(5);
    expect(userWithNewLaptop.books[4]).toBe('restAPI');
    expect(userWithNewLaptop.books[3]).toBe('ts');
});

test("update ts to js", () => {
    let user: userWithBooks = {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
        books: ['HTML','React','JS']
    };
    const updatedUser = changeBooks(user, 'JS', 'ts')

    expect(user).not.toBe(updatedUser);
    expect(user.books).not.toBe(updatedUser.books);
    expect(updatedUser.laptop).toBe(user.laptop);
    expect(updatedUser.address).toBe(user.address);
    expect(updatedUser.books[2]).toBe('ts');
    expect(updatedUser.books.length).toBe(3);

});

const addNewCompany =(u: userWithBooks  & withCompanies, newObj: companiesType)=>{
    const copy = {...u, companies:[...u.companies, newObj]};
    return copy

}
const updateTitle =(u: withCompanies, id: number, title: string)=>{
    const copy = {...u, companies: u.companies.map(c=> c.id===id ? {...c, title: title}: c)}
return copy
}
test("companies", () => {
    let user: userWithBooks  & withCompanies= {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
        books: ['HTML','React','JS'],
        companies: [{
            id: 1,
            title: "Minsk",
        }]
    };
    const updatedUser = addNewCompany(user, { id: 4, title: "USA" });

    expect(user).not.toBe(updatedUser);
    expect(user.books).toBe(updatedUser.books);
    expect(updatedUser.laptop).toBe(user.laptop);
    expect(updatedUser.address).toBe(user.address);
    expect(updatedUser.companies[1]).toEqual({ id: 4, title: "USA" });
    expect(updatedUser.companies.length).toBe(2);

});

test("companies update", () => {
    let user: userWithBooks  & withCompanies= {
        name: "Daniil",
        hair: 32,
        address: {title: "Minsk", house: 12},
        laptop: {name: "Zenbook"},
        books: ['HTML','React','JS'],
        companies: [{
            id: 1,
            title: "Minsk",
        },
            {
                id: 2,
                title: "USA",
            }]
    };
    const updatedUser = updateTitle(user, 1, "USA" ) as userWithBooks  & withCompanies

    expect(user).not.toBe(updatedUser);
    expect(user.books).toBe(updatedUser.books);
    expect(updatedUser.laptop).toBe(user.laptop);
    expect(updatedUser.address).toBe(user.address);
    expect(updatedUser.companies[1]).toEqual({ id: 2, title: "USA" });
    expect(updatedUser.companies).not.toBe(user.companies);
    expect(updatedUser.companies.length).toBe(2);
    expect(updatedUser.companies[0].title).toBe('USA');

});