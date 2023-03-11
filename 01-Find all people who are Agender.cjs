const data = require('./2-arrays-logins.cjs')

let peopleWithAgenderArr = data.filter((eachPerson) => eachPerson.gender === "Agender")

console.log(peopleWithAgenderArr)