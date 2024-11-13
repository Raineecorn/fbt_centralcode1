const query = require('../../data-access/connection/tracking/app')
const trackingQuery = require('../../data-access/connection/tracking/app')
const {  makeTrackings, makeAudits  } = require('../../entities/tracker/app');

const audit = require('../tracker/useCaseAudit')
const tracking = require('../tracker/useCaseTracking')

const addAudit = audit({makeAudits,query})
const addTracking = tracking({makeTrackings,query})

const services = Object.freeze({
    addAudit,addTracking
})

module.exports = services
module.exports = { addAudit,addTracking }