const getgeocode = require('../utils/geocode')
const forecast = require('../utils/forecast')
const home = (req, res) => {
    res.render('index', {
        title: "Home"
    })
}

const weather = (req, res) => {

    if (req.query.address) {
        getgeocode(req.query.address, (error, {
            latitude,
            longitude,
            location
        }) => {


            forecast(longitude, latitude, (error, data) => {

                res.status(200).json({
                    data
                })

            })
        })

    } else {
        res.json({
            msg: "Provide Address"
        })
    }

}

const about = (req, res) => {
    res.render("about", {
        name: "MI Shuvro"
    })
}

const help = (req, res) => {
    res.render('help', {
        name: "Help"
    })
}


const NotFound = (req, res) => {
    res.render('404', {
        name: "Not Found"
    })
}


module.exports = {
    home,
    weather,
    about,
    help,
    NotFound
}