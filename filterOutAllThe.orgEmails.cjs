const data = require('./2-arrays-logins.cjs')

console.log(data.filter((eachPerson) => eachPerson.email.endsWith('.org') || eachPerson.email.includes('.org')))
