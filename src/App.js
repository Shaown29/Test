import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
