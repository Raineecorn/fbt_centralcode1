const { addTracking, addAudit}  = require('../../controllers/tracker/app')

const route = ({router,makeExpressCallback,middlewares,decrypt,encrypt}) => {
    //create tracking
    router.post('/submit/tracking',middlewares.auth,makeExpressCallback(addTracking))
    //create audit
    router.post('/submit/audit',middlewares.auth,makeExpressCallback(addAudit))
 

    return router
}

module.exports = route