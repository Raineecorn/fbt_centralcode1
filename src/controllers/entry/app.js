const { useCaseEditEntry, useCaseAddEntry, useCaseEntry } = require('../../use-case/entry/app')
const { encrypt, decrypt, tokens, hash, validationSchemas } = require('../../function/app')

const editEntry = require('../entry/editEntry')
const getEntry = require('../entry/getEntry')
const insertEntry = require('../entry/insertEntry')

const editEntrys = editEntry({ useCaseEditEntry, validationSchemas })
const getEntrys = getEntry({ useCaseEntry, validationSchemas })
const addEntrys = insertEntry({ useCaseAddEntry, validationSchemas })

const services = Object.freeze({
    editEntrys,
    getEntrys,
    addEntrys
})

module.exports = services
module.exports = {
    editEntrys,
    getEntrys,
    addEntrys
} 