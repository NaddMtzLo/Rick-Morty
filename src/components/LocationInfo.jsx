import React from 'react'

const LocationInfo = ({locationTarget}) => {
  return (
    <aside className='info-location-container'>
      <h2 className='info-location-title'>{locationTarget?.name}</h2>
      <hr className='hr-location-info' />
      <ul className='list-description-ubication'>
        <li className='list-item-description'>
          <span className='span-description'>Type: </span>
          {
            locationTarget?.type==='' ?
              'Unknown'
            :
              locationTarget?.type
          }
        </li>
        <li className='list-item-description'>
          <span className='span-description'>Dimension: </span>{locationTarget?.dimension}
        </li>
        <li className='list-item-description'>
          <span className='span-description'>Population: </span>{locationTarget?.residents.length}
        </li>
      </ul>
    </aside>
  )
}

export default LocationInfo