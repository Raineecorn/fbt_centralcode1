const { useCaseTracking, useCaseAudit } = require('../../use-case/tracker/app')
const { encrypt, decrypt, tokens, hash, validationSchemas } = require('../../function/app')

const addTrack = require('../tracker/addTracking')
const auditAdd = require('../tracker/addAudit')

const addTracking = addTrack({ useCaseTracking, validationSchemas })
const addAudit = auditAdd({ useCaseAudit, validationSchemas  })

const services = Object.freeze({
    addTracking, addAudit
})

module.exports = services
module.exports = {
    addTracking, addAudit
} 