import { useState } from "react"
import "./weather.css"

function App() {

const [city,setCity] = useState("")
const [weather,setWeather] = useState(null)

async function getWeather(){

const apiKey = "YOUR_API_KEY"

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
)

const data = await response.json()

setWeather(data)

}

return(

<div className="container">

<h1>Weather App</h1>

<input
type="text"
placeholder="Enter city"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<button onClick={getWeather}>Search</button>

{weather && (

<div className="card">

<h2>{weather.name}</h2>

<p>Temperature: {weather.main.temp} °C</p>

<p>Condition: {weather.weather[0].main}</p>

</div>

)}

</div>

)

}

export default App