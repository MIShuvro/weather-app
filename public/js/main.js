 getWeather = async (location) => {


     fetch(`http://localhost:4000/weather?address=${location}`)
         .then(res => {
             res.json().then(data => {
                 if (data.error) {
                     msg1.textContent = data.error
                 } else {
                     msg1.textContent = ''
                     msg2.textContent = JSON.stringify(data.data)
                 }
             })
         })
 }

 let locationForm = document.querySelector('form')
 let msg1 = document.querySelector('#msg-1')
 let msg2 = document.querySelector('#msg-2')

 locationForm.addEventListener('submit', (e) => {
     e.preventDefault()
     const location = document.querySelector('Input')
     getWeather(location.value)
     msg1.textContent = "Loading...."
     msg2.textContent = ""
 })