const express = require('express')
const ctrl = require('./controller.js')

    const app = express()

    app.use(express.json())

    // Endpoints
    app.get(`/api/collection`, ctrl.getCollection)
    app.get(`/api/collection/:search`, ctrl.postSearch)
    app.get(`/api/tote`, ctrl.getTote)
    app.post(`/api/tote`, ctrl.addToTote)
    app.delete(`/api/tote/:id`, ctrl.deleteFromTote)
    app.put(`/api/tote/:id`, ctrl.updateTote)
    app.post(`/api/order`, ctrl.emptyOrder)

    const port = 3001
    app.listen(port, () => console.log(`listening on port ${port}`))