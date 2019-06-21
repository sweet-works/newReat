import React from 'react'
import {SearchBar } from 'antd-mobile'
import './navbar.scss'
  class Navbar extends React.Component {
    state = {
      value: '美食',
    };
    render(){
        return(
        <div className="navbar">
            <input type="text" placeholder=" 搜索" />
            <span>消息</span>
        </div>
        )
    }
   
}
export default Navbar