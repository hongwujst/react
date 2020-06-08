import React from 'react';
import { ReactSVG } from 'react-svg'
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import SvgComp from '../components/svg_comp';
import node from '../node.svg';

class Svg extends React.Component {
  render() {
    return  <div className="bg">
                <ReactSVG src={node} />
                <SvgComp/>
            </div>;
  }
}

export default Svg;
