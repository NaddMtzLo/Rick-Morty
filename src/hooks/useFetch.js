import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url, visor) => {

  const [response, setResponse] = useState()

  useEffect(() => {
    axios.get(url)
      .then(({data}) => setResponse(data))
  },[visor])

  return [response]
}

export default useFetch