const data = require('./2-arrays-logins.cjs')

let splitedIPAddressArr = data.map((eachPerson) => eachPerson={...eachPerson, ip_address:eachPerson.ip_address.split('.').map(Number)})


console.log(splitedIPAddressArr)