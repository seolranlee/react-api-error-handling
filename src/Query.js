import Page404 from "./Page404";
import useQuery from "./useQuery";

const Query = ({ url, children }) => {
  const { data, statusCode } = useQuery({ url })

  console.log('statusCode:', statusCode)
  if (statusCode === 404) {
    return <Page404 />
  }

  // ... 등 여기서 여러 HTTP 응답 코드 처리

  return children({data})
}

export default Query