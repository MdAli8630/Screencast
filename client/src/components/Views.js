import React,{useState,useEffect} from "react";
import axios from 'axios'

function Views(){
    // const [user,setUser] = useState({
       
    //     joiningDate: "",
    //     profile: ""
    // })
    const [data, setData] = useState()

    useEffect(()=>{
        loadImageUrl()
       },[])
   
       const loadImageUrl=async()=>{
            let url = "http://192.168.1.35:8080/find_screenshot"
           const result = await axios.post(url,{user_id:"23435345324"})
       console.log(">>>>>>result>.>>>>",result)
      

     
      if(result.status === 201){
        result.data.data.map((elem)=>{
            console.log(">>>>>>>>>>>>>>>>>>>>.",elem.image)
            setData(elem.image)
           })
        }
       }
       console.log("<<<<<<<<<<<<<<<<<<",data)
     
    const serverUrl = "http://192.168.1.35:8080/capture"
    let url1 = (`${serverUrl}/${data}`)


    // setTimeout(()=>{
    //      url = (`${serverUrl}/capture/${data}`)
    // },500)
    

    return(
        <>

             <ul className="list-group w-50">
               <li>
                {/* {
                data.map((m) =>(
                    <img src={`${serverUrl}/capture/${m.image}`}/>
                  ))
                } */}
                <img src={url1}  />
                
                </li>

              </ul>        
        
        </>
    )
}
export default Views;