
let placeName = document.getElementById('location')
let temp = document.getElementById('temp')
let weather = document.getElementById('weather')
let cloud = document.getElementById('cloud')


//fetch all buttons

let btnOne = document.getElementById('btnOne')
let btnTwo = document.getElementById('btnTwo')
let btnThree = document.getElementById('btnThree')
let btnFour = document.getElementById('btnFour')
let btnFive = document.getElementById('btnFive')
let btnSix = document.getElementById('btnSix')
let btnSeven = document.getElementById('btnSeven')
let btnEight = document.getElementById('btnEight')
let btnNine = document.getElementById('btnNine')
let btnTen = document.getElementById('btnTen')
let btnEleven = document.getElementById('btnEleven')
let btnTwelve = document.getElementById('btnTwelve')
let btnThirteen = document.getElementById('btnThirteen')
let btnFourteen = document.getElementById('btnFourteen')
let btnFifteen = document.getElementById('btnFifteen')
let btnSixteen = document.getElementById('btnSixteen')
let btnSeventeen = document.getElementById('btnSeventeen')
let btnEighteen = document.getElementById('btnEighteen')
let btnNineteen = document.getElementById('btnNineteen')
let btnTwentee = document.getElementById('btnTwentee')
let btnTwenteeOne = document.getElementById('btnTwenteeOne')
let btnTwenteeTwo = document.getElementById('btnTwenteeTwo')
let btnTwenteeThree = document.getElementById('btnTwenteeThree')
let btnTwenteeFour = document.getElementById('btnTwenteeFour')

let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let ten = document.getElementById('ten')
let eleven = document.getElementById('eleven')
let twelve = document.getElementById('twelve')
let thirteen = document.getElementById('thirteen')
let fourteen = document.getElementById('fourteen')
let fifteen = document.getElementById('fifteen')
let sixteen = document.getElementById('sixteen')
let seventeen = document.getElementById('seventeen')
let eighteen = document.getElementById('eighteen')
let nineteen = document.getElementById('nineteen')
let twenty = document.getElementById('twenty')
let twentyone = document.getElementById('twentyone')
let twentytwo = document.getElementById('twentytwo')
let twentythree = document.getElementById('twentythree')


let zeroImg = document.getElementById('zeroImg')
let oneImg = document.getElementById('oneImg')
let twoImg = document.getElementById('twoImg')
let threeImg = document.getElementById('threeImg')
let fourImg = document.getElementById('fourImg')
let fiveImg = document.getElementById('fiveImg')
let sixImg = document.getElementById('sixImg')
let sevenImg = document.getElementById('sevenImg')
let eightImg = document.getElementById('eightImg')
let nineImg = document.getElementById('nineImg')
let tenImg = document.getElementById('tenImg')
let elevenImg = document.getElementById('elevenImg')
let twelveImg = document.getElementById('twelveImg')
let thirteenImg = document.getElementById('thirteenImg')
let fourteenImg = document.getElementById('fourteenImg')
let fifteenImg = document.getElementById('fifteenImg')
let sixteenImg = document.getElementById('sixteenImg')
let seventeenImg = document.getElementById('seventeenImg')
let eighteenImg = document.getElementById('eighteenImg')
let nineteenImg = document.getElementById('nineteenImg')
let twentyImg = document.getElementById('twentyImg')
let twentyoneImg = document.getElementById('twentyoneImg')
let twentytwoImg = document.getElementById('twentytwoImg')
let twentythreeImg = document.getElementById('twentythreeImg')


let zeroTemp = document.getElementById('zeroTemp')
let oneTemp = document.getElementById('oneTemp')
let twoTemp = document.getElementById('twoTemp')
let threeTemp = document.getElementById('threeTemp')
let fourTemp = document.getElementById('fourTemp')
let fiveTemp = document.getElementById('fiveTemp')
let sixTemp = document.getElementById('sixTemp')
let sevenTemp = document.getElementById('sevenTemp')
let eightTemp = document.getElementById('eightTemp')
let nineTemp = document.getElementById('nineTemp')
let tenTemp = document.getElementById('tenTemp')
let elevenTemp = document.getElementById('elevenTemp')
let twelveTemp = document.getElementById('twelveTemp')
let thirteenTemp = document.getElementById('thirteenTemp')
let fourteenTemp = document.getElementById('fourteenTemp')
let fifteenTemp = document.getElementById('fifteenTemp')
let sixteenTemp = document.getElementById('sixteenTemp')
let seventeenTemp = document.getElementById('seventeenTemp')
let eighteenTemp = document.getElementById('eighteenTemp')
let nineteenTemp = document.getElementById('nineteenTemp')
let twentyTemp = document.getElementById('twentyTemp')
let twentyoneTemp = document.getElementById('twentyoneTemp')
let twentytwoTemp = document.getElementById('twentytwoTemp')
let twentythreeTemp = document.getElementById('twentythreeTemp')

let magnifyne = document.getElementById('magnifyne')


let latitude, longitude
let coords

function gotLocation(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    coords = `${latitude},${longitude}`

    useLatLong();
}

let weatherData
function useLatLong() {
    // Fetch The Weather
    let url = `http://api.weatherapi.com/v1/forecast.json?key=02110cde51964733a68123509252005&q=${coords}&days=1&aqi=no&alerts=no`
    fetch(url)
        .then((responce) => {
            return responce.json()
        })
        .then((data) => {
            console.log(data);
            placeName.innerHTML = data.location.name   //nam ta change kora holo
            temp.innerHTML = `${data.current.temp_c}&deg`
            weather.innerHTML = data.current.condition.text
            cloud.innerHTML = `Cloud : ${data.current.cloud}`
            weatherData = data
            allButtonInfo(weatherData)
            allButtonTemp(weatherData)
            magnifyn()

        })
        .catch((error) => {
            alert(error)

        })

}

function allButtonInfo(data){

            zeroImg.src = data.forecast.forecastday[0].hour[0].condition.icon
            oneImg.src = data.forecast.forecastday[0].hour[1].condition.icon
            twoImg.src = data.forecast.forecastday[0].hour[2].condition.icon
            threeImg.src = data.forecast.forecastday[0].hour[3].condition.icon
            fourImg.src = data.forecast.forecastday[0].hour[4].condition.icon
            fiveImg.src = data.forecast.forecastday[0].hour[5].condition.icon
            sixImg.src = data.forecast.forecastday[0].hour[6].condition.icon
            sevenImg.src = data.forecast.forecastday[0].hour[7].condition.icon
            eightImg.src = data.forecast.forecastday[0].hour[8].condition.icon
            nineImg.src = data.forecast.forecastday[0].hour[9].condition.icon
            tenImg.src = data.forecast.forecastday[0].hour[10].condition.icon
            elevenImg.src = data.forecast.forecastday[0].hour[11].condition.icon
            twelveImg.src = data.forecast.forecastday[0].hour[12].condition.icon
            thirteenImg.src = data.forecast.forecastday[0].hour[12].condition.icon
            fourteenImg.src = data.forecast.forecastday[0].hour[12].condition.icon
            fifteenImg.src = data.forecast.forecastday[0].hour[15].condition.icon
            sixteenImg.src = data.forecast.forecastday[0].hour[16].condition.icon
            seventeenImg.src = data.forecast.forecastday[0].hour[17].condition.icon
            eighteenImg.src = data.forecast.forecastday[0].hour[18].condition.icon
            nineteenImg.src = data.forecast.forecastday[0].hour[19].condition.icon
            twentyImg.src = data.forecast.forecastday[0].hour[20].condition.icon
            twentyoneImg.src = data.forecast.forecastday[0].hour[21].condition.icon
            twentytwoImg.src = data.forecast.forecastday[0].hour[22].condition.icon
            twentythreeImg.src = data.forecast.forecastday[0].hour[23].condition.icon

}

function allButtonTemp(data){
    zeroTemp.innerHTML = data.forecast.forecastday[0].hour[0].temp_c
    oneTemp.innerHTML = data.forecast.forecastday[0].hour[1].temp_c
    twoTemp.innerHTML = data.forecast.forecastday[0].hour[2].temp_c
    threeTemp.innerHTML = data.forecast.forecastday[0].hour[3].temp_c
    fourTemp.innerHTML = data.forecast.forecastday[0].hour[4].temp_c
    fiveTemp.innerHTML = data.forecast.forecastday[0].hour[5].temp_c
    sixTemp.innerHTML = data.forecast.forecastday[0].hour[6].temp_c
    sevenTemp.innerHTML = data.forecast.forecastday[0].hour[7].temp_c
    eightTemp.innerHTML = data.forecast.forecastday[0].hour[8].temp_c
    nineTemp.innerHTML = data.forecast.forecastday[0].hour[9].temp_c
    tenTemp.innerHTML = data.forecast.forecastday[0].hour[10].temp_c
    elevenTemp.innerHTML = data.forecast.forecastday[0].hour[11].temp_c
    twelveTemp.innerHTML = data.forecast.forecastday[0].hour[12].temp_c
    thirteenTemp.innerHTML = data.forecast.forecastday[0].hour[13].temp_c
    fourteenTemp.innerHTML = data.forecast.forecastday[0].hour[14].temp_c
    fifteenTemp.innerHTML = data.forecast.forecastday[0].hour[15].temp_c
    sixteenTemp.innerHTML = data.forecast.forecastday[0].hour[16].temp_c
    seventeenTemp.innerHTML = data.forecast.forecastday[0].hour[17].temp_c
    eighteenTemp.innerHTML = data.forecast.forecastday[0].hour[18].temp_c
    nineteenTemp.innerHTML = data.forecast.forecastday[0].hour[19]. temp_c
    twentyTemp.innerHTML = data.forecast.forecastday[0].hour[20].temp_c
    twentyoneTemp.innerHTML = data.forecast.forecastday[0].hour[21].temp_c
    twentytwoTemp.innerHTML = data.forecast.forecastday[0].hour[22].temp_c
    twentythreeTemp.innerHTML = data.forecast.forecastday[0].hour[23].temp_c
}



function magnifyn() {
    magnifyne.addEventListener('click', () => {
        let inputLocation = prompt("Enter Location")
        console.log(inputLocation);
        
        coords = inputLocation

        useLatLong()

    })

}



function failed() {
    console.log(erroe);

}
// Get Live Location
setTimeout(async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failed)
}, 10)





//forecast.forecastday.0.hour.0.condition.icon





// 