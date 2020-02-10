const request = require('request')
const getgeocode = (address, callback) => {

    const mapbox_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWlzaHV2cm8iLCJhIjoiY2p3NG1uZnl3MWp3bjQ4cXFtdGRjZGVvdiJ9.LeXxvPol_04PYMzIjdahsQ'
    request({
        url: mapbox_url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable To Connect to Location Service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find Location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = getgeocode