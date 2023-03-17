const data = require('./2-arrays-logins.cjs')
data.map((eachPerson) => eachPerson.full_name = eachPerson.first_name + " " + eachPerson.last_name)
console.log(data)