const Router = require('express').Router()

const {
    home,
    weather,
    about,
    help,
    NotFound
} = require('../controllers/indexController')

Router.get('', home);
Router.get('/weather', weather);
Router.get('/about', about);
Router.get('/help', help)
Router.all('*', NotFound)

module.exports = Router