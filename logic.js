let placeName = document.getElementById('location')
let temp = document.getElementById('temp')
let weather = document.getElementById('weather')
// let temp = document.getElementById('temp')

let latitude,longitude

function gotLocation(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

 latitude = position.coords.latitude;
 longitude = position.coords.longitude;

    useLatLong();
}

function useLatLong() {
// Fetch The Weather
let url = `http://api.weatherapi.com/v1/forecast.json?key=02110cde51964733a68123509252005&q=${latitude},${longitude}&days=1&aqi=no&alerts=no
`
fetch(url)
.then(async(responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
    placeName.innerHTML = data.location.name   //nam ta change kora holo
    temp.innerHTML = `${data.current.temp_c}&deg`
    weather.innerHTML = data.current.condition.text

    
})
.catch((error)=>{
    alert(error)
    
})

}





function failed(){
    console.log(erroe);
    
}
// Get Live Location
setTimeout(async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failed)
},10)










// 