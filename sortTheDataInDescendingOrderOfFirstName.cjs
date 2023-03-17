const data = require('./2-arrays-logins.cjs')

const descendingOrderByFirstName = data.sort((a,b) => a.first_name > b.first_name ? -1 : a.first_name < b.first_name ? 1 : 0 )
console.log(descendingOrderByFirstName)