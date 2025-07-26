
const user1 = {
    firstName: "Alice",
    age: 35,
    favoriteSeason: 'summer',
    sport: 'yoga'
}
console.log(user1)

const user2 = {
        sayHello(name) {
            return `Hello ${name}`
    }
}
console.log(user2.sayHello('Grace'))


const users = [
    {
        name: 'alice',
        age: 35,
        isAdmin: false
    },
    {
        name: 'niko',
        age:32,
        isAdmin: false
    },
    {
        name: 'ron',
        age: 37,
        isAdmin: true
    }
]
let count = 0
for (let i = 0; i < users.length; i++) {
    if(!users[i].isAdmin) {
        count++
    }
}
console.log(`${count} simple user(-s)`)