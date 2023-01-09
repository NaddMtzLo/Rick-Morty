import React from 'react'
import ResidentInfo from './ResidentInfo'
import { useRef, useEffect } from 'react'

const ResidentList = ({locationTarget, page, setPage}) => {
    
  //Selección del elemento contenedor de la paginación
  const containerButtonNumber = useRef()

  //Estados y variables necesarias para la paginación
  const limitCharacter = 4
  const lastIndex = page * limitCharacter
  const numPages = Math.ceil(locationTarget?.residents.length / limitCharacter)
  const arrayPages = []
  for( let i = 1 ; i <= numPages ; i++ ) {
    arrayPages.push(i)
  }

  //Guardar en residents solo los elementos que se quieren mostrar
  let residents
  if(locationTarget?.residents.length < 4) {
    residents = [...locationTarget?.residents]
  } else {
    residents = locationTarget?.residents?.slice(lastIndex - limitCharacter, lastIndex)
  }
  //Cambiar a la siguiente página
  const changePageNext = () => {
    if(page === numPages) {
      setPage(1)
      containerButtonNumber.current.childNodes[numPages - 1].classList.remove('number-page-active')
      containerButtonNumber.current.childNodes[0].classList.add('number-page-active')
    } else {
      setPage(page + 1)
      containerButtonNumber.current.childNodes[page - 1].classList.remove('number-page-active')
      containerButtonNumber.current.childNodes[page].classList.add('number-page-active')
    }
  }

  //Cambiar a la página anterior
  const changePagePrevious = () => {
    if(page === 1) {
      setPage(numPages)
      containerButtonNumber.current.childNodes[page - 1].classList.remove('number-page-active')
      containerButtonNumber.current.childNodes[numPages - 1].classList.add('number-page-active')
    } else {
      setPage(page - 1)
      containerButtonNumber.current.childNodes[page - 1].classList.remove('number-page-active')
      containerButtonNumber.current.childNodes[page - 2].classList.add('number-page-active')
    }
  }
  //Cambiar a cualquiera de las paginas solo aprentando el número
  const changePageNumber = number => {
    for (let i = 0; i < containerButtonNumber?.current?.childNodes?.length; i++) {
      containerButtonNumber.current.childNodes[i].classList.remove('number-page-active')
    }
    containerButtonNumber.current.childNodes[number - 1].classList.add('number-page-active')
    setPage(number)
  }

  useEffect(() => {
    for (let i = 1; i < containerButtonNumber?.current?.childNodes?.length; i++) {
      containerButtonNumber.current.childNodes[i].classList.remove('number-page-active')
    }
    containerButtonNumber?.current?.childNodes?.[0]?.classList?.add('number-page-active')
  }, [numPages])

  return (
    <section className='resident-section'>
      <h2 className='resident-section-title'>Residents</h2>
      <div className='pagination-container'>
        { numPages > 1 &&
        <>
          <div className='button-prev-container'>
            <button className='change-pages-btn' onClick={ changePagePrevious }>&#9668;</button>
          </div>
          <div ref={containerButtonNumber} className='number-page-container'>
            {
              arrayPages.map( num => (
                <button key={num} className='number-page' onClick={ ()=> changePageNumber(num) }>{num}</button>
              ))
            }
          </div>
          <div className='button-next-container'>
            <button className='change-pages-btn' onClick={ changePageNext }>&#9658;</button>
          </div>
        </>
        }
      </div>
      <div className='card-container'>
        {
          residents?.map(url => (
            <ResidentInfo key={url} url={url} />
          ))
        }
      </div>
    </section>
  )
}

export default ResidentList