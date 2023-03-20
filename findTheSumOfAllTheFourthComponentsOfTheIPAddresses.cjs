const data = require('./2-arrays-logins.cjs')

let convertingIPV4Components = data.map((eachPerson) => eachPerson={...eachPerson,ip_address:eachPerson.ip_address.split('.').map(Number)})

console.log(convertingIPV4Components.reduce((accumulator,initialVal) => accumulator += initialVal.ip_address[3],0))