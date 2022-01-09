const config = require('../../config/env.config');

const utilsRoutes = require('./components/utils/utilsRoutes');
const usersRoutes = require('./components/users/usersRoutes');

const router = (app) => {

    app.use(config.root_api, utilsRoutes);
    app.use(config.root_api, usersRoutes);
    app.use((req, res) => {
        res.status(404).json({ message: 'Not found'});
    })
}

module.exports = router;