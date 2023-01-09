import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentInfo = ({url}) => {

  const [color, setColor] = useState('#aaa')
  const [character] = useFetch(url)
  useEffect(() => {
    if(character?.status === "Alive") setColor('#70C724')
    if(character?.status === "Dead") setColor('#E61212')
  } ,[character])

  return (
    <div className='card-resident'>
      <img className='card-image' src={character?.image} alt="card-image" />
      <article className='card-Info-container'>
        <h3 className='title-card'>{character?.name}</h3>
        <div className='state-resident'>
          <div className='circle-indicator' style={{background: color}}></div>
          <h4 className='state-resident-description'>{character?.status}</h4>
        </div>
        <ul className='description-card-container'>
          <li className='li-card'>
            <span className='title-description-card'>Specie</span>
            {character?.species}
          </li>
          <li className='li-card'>
            <span className='title-description-card'>Origin</span>
            {character?.origin.name}
          </li>
          <li className='li-card'>
            <span className='title-description-card'>Episodes where appear</span>{character?.episode.length}
          </li>
        </ul>
      </article>
    </div>
  )
}

export default ResidentInfo