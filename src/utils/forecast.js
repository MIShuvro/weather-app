const request = require('request')


const forecast = ((latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/141f4a3ac0a1ed9a6cc0758111a6c426/' + latitude + ',' + longitude

    request({
        url: url,
        json: true
    }, (error, response) => {

        if (error) {
            callback('Unable to Connect Weather Service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary)
        }
    })
})


module.exports = forecast