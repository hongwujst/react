import React from 'react';
import { Button } from 'element-react';
import 'element-theme-default';
import './svg_comp.scss';
import axios from 'axios';
//import axios from '../axios/axios';
import myData from './data.json';

class SvgComp extends React.Component {
    constructor(props) {
        super();
        axios.get(process.env.PUBLIC_URL+'/data.json')
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  render() {
    return <div className="svg">
                <div className="sass-class">
                    123
                      <span>456</span>
                  </div>
                <span>{myData.name}</span>
                <Button type="primary">Hello</Button>
                <img src={process.env.PUBLIC_URL + '/logo192.png'} />
          </div>;
  }
}

export default SvgComp;
