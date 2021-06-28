import { useEffect, useState } from "react"

const useQuery = ({ url }) => {
  const [ statusCode, setStatusCode ] = useState()
  const [ apiData, setApiData ] = useState()

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ code, status, ...apiData }) => {
        console.log(apiData)
        setStatusCode(code)
        setApiData(apiData)
      })
  }, [url])

  return { data: apiData, statusCode }
}

export default useQuery