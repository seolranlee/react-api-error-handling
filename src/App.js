import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DogPage from './DogPage'
import IndexPage from './IndexPage'

// 404 컴포넌트(일반적으로 ./Page404.jsx 에 구현된다)
const Page404 = () => <h1>Four:oh:four</h1>
// 작성한 모든 컴포넌트를 바인딩한다.
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/dogs/:breed" component={DogPage} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App