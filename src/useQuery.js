import { useEffect, useState } from "react"
import { useErrorStatus } from "./ErrorHandler"

const useQuery = ({ url }) => {
  const { setErrorStatusCode } = useErrorStatus()
  const [ apiData, setApiData ] = useState()

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ code, status, ...apiData }) => {
        if (code > 400) {
          setErrorStatusCode(code)
        } else {
          setApiData(apiData)
        }
      })
  }, [url])

  return { data: apiData }
}

export default useQuery