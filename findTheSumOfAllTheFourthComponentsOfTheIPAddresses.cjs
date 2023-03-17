const data = require('./2-arrays-logins.cjs')

let convertingIPV4Components = data.map((eachPerson) => eachPerson={...eachPerson,ip_address:eachPerson.ip_address.split('.').map(Number)})
let sumOfIPV4FourthComponent = 0
convertingIPV4Components.map((eachPerson) => sumOfIPV4FourthComponent += eachPerson.ip_address[3])
console.log(sumOfIPV4FourthComponent)