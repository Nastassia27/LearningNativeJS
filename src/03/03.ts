import {StudenType} from "../02/02";
import {CityType} from "../02/02.test";

export const city: CityType = {
        title: 'New York',
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "White street"
                }
            }
        }, {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: "Happy street"
                }
            }
        },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 200,
                    street: {
                        title: "Hogwarts street"
                    }
                }
            }],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str"
                    }
                }
            }],
        citizensNumber: 1000000
    }

export const student: StudenType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

export const addSkill=(student: StudenType, skill: string)=>{
student.technologies.push({
    id: 4,
    title: skill
})
}

export const makeStudentActive= (student: StudenType)=>{
    student.isActive = true
}

export const changeStudentLive =(student: StudenType, title: string)=>{
 return student.address.city.title === title
}

export const changeBudget =(city: CityType, budgetPlus: number)=>{
    let arr = city.governmentBuildings
    for (let i = 0; i < arr.length; i++) {
        arr[i].budget += budgetPlus
    }

    /*city.governmentBuildings[0].budget+=budgetPlus*/

}

export const repairHouse = (city: CityType)=>{
return city.houses[1].repaired=true
}
export const toFireStaff = (city: CityType, number: number)=>{
return city.governmentBuildings[0].staffCount -= number

}
export const toHireStaff = (city: CityType, number: number)=>{
 return city.governmentBuildings[0].staffCount += number

}


