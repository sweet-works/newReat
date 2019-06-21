import React, { Component } from 'react'
import axios from 'axios'
import {Carousel} from 'antd-mobile'
class Banner extends Component {
    state = {
      bannerList:['http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg',
      'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg', 
      'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg']
       
      }
  render() {
    return (
      <div className="banner" style={{height:"2rem"}}>
         <Carousel
          autoplay
          infinite
          dots
        >
          {this.state.bannerList.map((val,index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'2rem' }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Banner

