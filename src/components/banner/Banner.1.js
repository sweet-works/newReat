import React, { Component } from 'react'
import axios from 'axios'
import {Carousel} from 'antd-mobile'
class Banner extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount(){
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
  render() {
    return (
      <div>
         <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Banner

