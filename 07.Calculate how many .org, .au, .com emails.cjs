const data = require('./2-arrays-logins.cjs')
let emailsCountWithEndingArr = []
function CreateCountObject(extension,count){        //factory function
    return {
        extension:extension,
        count:count
    }
}
let emailsExtensions = ['.org','.au','.com']
for (let extension of emailsExtensions){
    let countOfExtension = data.filter((eachPerson) => eachPerson.email.endsWith(extension)).length
    emailsCountWithEndingArr.push(CreateCountObject(extension,countOfExtension))
}
console.log(emailsCountWithEndingArr)