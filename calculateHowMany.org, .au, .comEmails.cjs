const data = require('./2-arrays-logins.cjs')
let emailsCountWithEndingArr = [], emailsExtensions = ['.org', '.au', '.com']
function CreateCountObject(extension, count) {        //factory function
    return {
        extension: extension,
        count: count
    }
}
emailsExtensions.map((extension) => { let countOfExtension = data.filter((eachPerson) => eachPerson.email.endsWith(extension)).length
    emailsCountWithEndingArr.push(CreateCountObject(extension, countOfExtension))
})
console.log(emailsCountWithEndingArr)