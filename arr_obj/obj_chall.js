let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4, 
            flooring:"carpet",
            current_occupants: []
        },
        {
            name: "bath",
            doors: 1,
            windows: 2, 
            flooring:"tile",
            current_occupants: []
        },
        {
            name: "kitchen",
            doors: 0,
            windows: 3, 
            flooring:"hardwood",
            current_occupants: []
        },

    ],
    people: [
        {
            name: 'Justin',
            age: 28
        },
        {
            name: 'Tony',
            age: 8
        }
    ]
}

//1 get the word bath to print out 
console.log(house.rooms [1].name)

console.log(house.rooms.map(room => room.name)) //bedroom, bath, kitchen

//add people to kitchen
//current occupants: Justin and tony
console.log(house.people)
let peopleMove

house.rooms[2].current_occupants = house.people

console.log(house.rooms[2])

