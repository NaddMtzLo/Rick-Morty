import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import CardResident from './components/CardResident'
import getRandomNumber from './utils/getRandomNumber'

function App() {

  const [location, setLocation] = useState()
  const [searchLocation, setSearchLocation] = useState('')

  console.log(searchLocation)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchLocation){
      id = searchLocation
    }
    const URL=`https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [searchLocation])

  const handleSubmit = event => {
    event.preventDefault()
    setSearchLocation(event.target.idLocation.value)
  }

  return (
    <div className="App">
      <h1>Rick & Morty</h1>
      <form onSubmit={handleSubmit}>
        <input 
        id= 'idLocation'
        placeholder='Enter a number between 1 to 126' 
        type="text" />
        <button>Search</button>
      </form>
      <Location location ={location}/>
      <div>
        {
          location?.residents.map(url=>(
            <CardResident key={url} url={url}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
