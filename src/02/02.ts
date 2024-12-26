
export type StudenType={
    id: number,
    name: string,
    age: number,
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
type TechType = {
    id: number,
    title: string
}
type AddressType={
    streetTitle: string
    city: LocalCityType
}

export type LocalCityType={
    title: string
    countryTitle: string
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