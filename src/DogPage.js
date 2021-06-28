import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Page404 from './Page404'
// 선택한 품종 강아지의 무작위 이미지를 보여주는 페이지. 품종은 URL 파라미터로 넘긴다.
const DogPage = () => {
  const { breed } = useParams()
  const [ imageSrc, setImageSrc ] = useState()
  const [ httpStatusCode, setHttpStatusCode ] = useState()

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((data) => data.json())
      .then((data) => {
        console.log('data:', data)
        setHttpStatusCode(data.code)
        if (data.status === 'success') {
          setImageSrc(data.message)
        }
      })
  }, [breed])

  if(httpStatusCode === 404) {
    return <Page404 />
  }

  return (
    <div>
      <div>
        <Link to="/">back</Link>
      </div>
      {!imageSrc && <p>Loading...</p>}
      {imageSrc && <img alt={`A nice ${breed}`} src={imageSrc} height={200} />}
    </div>
  )
}

export default DogPage;