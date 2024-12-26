import {CityType, GovType, HouseType} from "../02/02.test";


export const city: CityType = {
    title: 'New York',
    houses: [{
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {
            number: 100,
            street: {
                title: "White street"
            }
        }
    }, {
        id: 2,
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
           id:3,
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
            staffCount: 500,
            address: {
                street: {
                    title: "Souths park str"
                }
            }
        }],
    citizensNumber: 1000000
}

export const demolishHousesOnTheStreet=(city:CityType, streetTitle: string)=>{
    return city.houses.filter((city)=> city.address.street.title !== streetTitle)
}
export const getBuildingsWithStaffCountGreaterThen= (govBuild: GovType[], number: number)=>{
    return govBuild = govBuild.filter((b)=> b.staffCount === number)
}