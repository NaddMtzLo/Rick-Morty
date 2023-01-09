import React from 'react'
import rickBoring from '../assets/rick-boring.svg'
import mortyBoring from '../assets/morty-boring.svg'
import warning from '../assets/warning.png'
const LoaderIncorrect = () => {
  return (
    <article className='loader-container'>
      <img className='img-warning' src={warning} alt="warning symbol" />
      <img className='img-loader rick' src={rickBoring} alt="rick boring" />
      <h1 className='loader-title'><span className='loader-title-span'>The location is not valid</span> You must enter a number between <span className='loader-number-valid'>1 to 126</span></h1>
      <img className='img-loader morty' src={mortyBoring} alt="morty boring" />
    </article>
  )
}

export default LoaderIncorrect