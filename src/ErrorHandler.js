import { useHistory } from "react-router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Page404 from "./Page404";
// 컨텍스트를 사용해 컴포넌트 트리를 낮춰 오류 페이지를 표시
const ErrorStatusContext = createContext()

// 앱의 핵심 기능을 랩핑하는 최상위 컴포넌트
const ErrorHandler = ({ children }) => {
  const history = useHistory()
  const [ errorStatusCode, setErrorStatusCode ] = useState()

  // 사용자가 새 URL을 탐색할 때 마다 이 상태 코드를 "제거" 해야 한다. 그렇지 않을 경우 사용자는 오류 페이지에 영원히 "갇히게" 된다.
  useEffect(() => {
    // 현재 위치의 변경 사항을 하는 리스너
    const unlisten = history.listen(() => setErrorStatusCode(undefined))

    // unmount될 때([] 넘기고 return) 리스너 제거
    return unlisten;
  }, [])

  // 컴포넌트를 렌더하는 부분이다.
  // API 오류와 일치하는 errorStatusCode가 있으면 오류 페이지를 렌더링 한다. 오류 상태값이 없다면 자식 컴포넌트를 정상적으로 렌더링 한다
  const renderContent = () => {
    console.log('errorStatusCode:', errorStatusCode)
    if (errorStatusCode === 404) {
      return <Page404 />
    }

    // 다른 HTTP 코드는 여기서 관리

    return children
  }

  // 성능상의 이유로 useMemo 랩핑.
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value/
  const contextPayload = useMemo(() => ({ setErrorStatusCode }), [
    setErrorStatusCode,
  ])

  // 컨텍스트의 값을 컴포넌트에 노출하는 동시에 화면에 적절한 컨텐츠를 렌더링
  return (
    <ErrorStatusContext.Provider value={contextPayload}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  )
}

// 컨텍스트 값을 빠르게 읽을 수 있는 커스텀 훅
// 빠른 import를 위해 여기서만 허용된다.
const useErrorStatus = () => useContext(ErrorStatusContext)

export { ErrorHandler, useErrorStatus }