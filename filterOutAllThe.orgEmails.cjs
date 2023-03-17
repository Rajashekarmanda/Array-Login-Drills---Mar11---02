const data = require('./2-arrays-logins.cjs')
const filterWithEmailDotORG = data.filter((eachPerson) => eachPerson.email.endsWith('.org') || eachPerson.email.includes('.org'))
console.log(filterWithEmailDotORG)