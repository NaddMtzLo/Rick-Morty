import React from 'react'
import { useState, useRef } from 'react'

const SearchBox = ({numberLocation ,setNumberLocation, setPage, setIsCurrentValue}) => {

  const input = useRef()

  const [numberInput, setNumberInput] = useState()
  
  const searchLocation = () => {
    setNumberLocation(numberInput.trim())
    input.current.value = ''
    setPage(1)
  }

  const pressKeyInput = e => {
    if(e.key == 'Enter') searchLocation()
  }

  return (
    <div className='component-search'>
      <input
        className='input-search' 
        ref={input} placeholder='Enter location number between 1 and 126' 
        type="text" 
        onChange={e => setNumberInput(e.target.value)} 
        onKeyPress={e => pressKeyInput(e)} />
      <button className='button-search' onClick={searchLocation}>Search</button>
    </div>
  )
}

export default SearchBox
