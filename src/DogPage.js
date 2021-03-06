import { get } from 'lodash'
import { useParams, Link } from 'react-router-dom'
import useQuery from './useQuery'

// 선택한 품종 강아지의 무작위 이미지를 보여주는 페이지. 품종은 URL 파라미터로 넘긴다.
const DogPage = () => {
  const { breed } = useParams()
  const { data } = useQuery({
    url: `https://dog.ceo/api/breed/${breed}/images/random`,
  })
  const imageSrc = get(data, 'message')
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