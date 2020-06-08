import React from 'react';
import { BrowserRouter, Route ,Link,Redirect} from 'react-router-dom';
import './App.css';
import Nav from './view/nav_view';
import View from './view/react_view';
import Gis from './view/gis_view';
import Echart from './view/echart_view';
import Svg from './view/svg_view';

class App extends React.Component {
  constructor() {
    super();
    document.title="react test";
  }
  render() {
    return  <div className="App">
          <BrowserRouter>
          <Nav/>
          <Route path='/View' exact component={View}></Route>
          <Route path='/Gis' exact component={Gis}></Route>
          <Route path='/Echart' exact component={Echart}></Route>
          <Route path='/Svg' exact component={Svg}></Route>
          </BrowserRouter>
          </div>;
  }
}

export default App;
