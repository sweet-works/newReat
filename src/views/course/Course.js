import React from 'react'
class Course  extends React.Component{
    render(){
        return( <div className="course">
            <input type="button" value="返回" onClick={()=>window.history.go(-1)}/>
            我是Course
        </div> )

    }
}
export default Course