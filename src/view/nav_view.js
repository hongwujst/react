import React from 'react';
import { BrowserRouter, Route ,Link} from 'react-router-dom';

class nav extends React.Component {
  render() {
    return  <div className="nav">
              <Link to={{
              pathname: '/View',
              }}>
                <span>view</span>
              </Link>
          <Link to={{
              pathname: '/Gis',
              }}>
                <span>Gis</span>
              </Link>
          <Link to={{
              pathname: '/Echart',
              }}>
                <span>echart</span>
              </Link>
          <Link to={{
              pathname: '/Svg',
              }}>
                <span>svg</span>
              </Link>
            </div>;
  }
}

export default nav;
