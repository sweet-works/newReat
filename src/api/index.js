import axios from 'axios'
const  Async_Date=(url,method,data)=>{
 return axios({
    url:url,
    method:method||"get",
    data:data||""
  }).then(res=>res)
}
 var a= Async_Date('hwxm/jsonp/jsp.json')

const asd=process.env.NODE_ENV==="development"
console.log(a,asd,process.env,123)
