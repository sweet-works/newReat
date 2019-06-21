import React from 'react'
import './footer.scss'
import {NavLink ,Link} from 'react-router-dom'


 class Footer extends React.Component{
     render(){
         return(<div className="footer">
    <NavLink to='/home' ><i>1</i>首页</NavLink>
    <NavLink to='/course' ><i>2</i>课程</NavLink>
    <NavLink to='/baby' ><i>3</i>宝宝记</NavLink>
    <NavLink to='/community'><i>4</i>社区</NavLink>
    <NavLink to='/user'><i>5</i>我的</NavLink>
    </div>
)}
}
export default Footer