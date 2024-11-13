const {
    editEntrys,
    getEntrys,
    addEntrys
} = require('../../controllers/entry/app')
const route = ({ router, makeExpressCallback, middlewares, decrypt, encrypt }) => {
    router.post('/submit/entry', middlewares.auth,makeExpressCallback(addEntrys))
    router.put('/update/entry/:id', middlewares.auth,makeExpressCallback(editEntrys));
    router.get('/search/entry/:id', middlewares.auth,makeExpressCallback(getEntrys));
    router.get('/search/entry/', middlewares.auth,makeExpressCallback(getEntrys));
    
    return router
}

module.exports = route