import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DogPage from './DogPage'
import IndexPage from './IndexPage'
import Page404 from './Page404'
import { ErrorHandler } from './ErrorHandler'

// 작성한 모든 컴포넌트를 바인딩한다.
const App = () => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/dogs/:breed/" component={DogPage} />
          <Route component={Page404} />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default App