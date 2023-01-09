import SearchBox from './components/SearchBox'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import axios from 'axios'
import { useState, useEffect } from 'react'
import LoaderIncorrect from './components/LoaderIncorrect'

const RickAndMortyApp = () => {
  
  const randomNumber = Math.floor( Math.random() * 126 ) + 1
  const [numberLocation, setNumberLocation] = useState(randomNumber)
  const [ isCorrectValue, setIsCurrentValue ] = useState(true)
  const [locationTarget, setLocationTarget] = useState()

  useEffect(()=>{
    const numberPivot = Number(numberLocation)
    if( numberPivot >= 1 && numberPivot <= 126 && !isNaN(numberPivot) ){
      setIsCurrentValue(true)
      axios.get(`https://rickandmortyapi.com/api/location/${numberLocation}`)
      .then(({data}) => setLocationTarget(data))
    } else {
      setIsCurrentValue(false)
    }
  }, [numberLocation])

  const [ page, setPage ] = useState(1)

  return (
    <div className='app-container'>
      <header className='header'>
        <SearchBox
          numberLocation={numberLocation}
          setNumberLocation={setNumberLocation}
          setPage={setPage}
          setIsCurrentValue={setIsCurrentValue}
        />
      </header>
      <main className='principal-information'>
        {
          isCorrectValue ?
            <>
              <div className='container-location-info'>
                <LocationInfo locationTarget={locationTarget} />
              </div>
              <ResidentList locationTarget={locationTarget} page={page} setPage={setPage} />
            </>
          :
            <LoaderIncorrect />
        }
      </main>
    </div>
  )
}

export default RickAndMortyApp