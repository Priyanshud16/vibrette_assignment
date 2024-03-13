import { useReducer, useState } from "react"
import Display from "../Display/Display"
import './Form.css'
const initialState={
    name:"",
    Mobile:"",
    DOB:"",
    Email:"",
    Image:""
}

const reducer=(state,action)=>{
    switch (action.type){
        case 'name':{
         return {...state,name:action.payload}
        };
        case 'Mobile':{
            return {...state,Mobile:action.payload}
        };
        case 'DOB' :{
            return {...state,DOB:action.payload}
        };
        case 'Email':{
            return {...state,Email:action.payload}
        };
        case 'Image':{
            return {...state,Image:action.payload}
        }
        case 'reset':{
            return initialState
        }
        default : {
            throw new Error('invalid action type')
        }
    }
}
function Form(){
 const [state,dispatch]=useReducer(reducer,initialState)
 const [submitedData,setSubmittedData]=useState([])

 async function HandleSubmit(e){
    e.preventDefault()
    setSubmittedData([...submitedData,{...state}])
    dispatch({
        type:'reset'
    })
 }
    return(
<div className="App">
    <div>
        <h1>User Form</h1>
        <form className="form-Wrapper" onSubmit={HandleSubmit}>
            
            <label>Name:</label>
            <input type="text" placeholder="Enter your Name" onChange={(e)=>dispatch({
                type:'name',
                payload:e.target.value
            })} />
             <br />
             <br />
            <label>Mobile:</label>
            <input type="number" maxLength={10} placeholder="Enter your Number" onChange={(e)=>dispatch({
                type:'Mobile',
                payload:e.target.value
            })} />
            <br />
            <br />
            <label>DOB:</label>
            <input type="date" onChange={(e)=>dispatch({
                type:'DOB',
                payload:e.target.value
            })} />
            <br />
            <br />
            <label>Email:</label>
            <input type="mail" placeholder="Enter your mail" onChange={(e)=>dispatch({
                type:'Email',
                payload:e.target.value

            })} />
            <br />
            <br />
            <label>Image:</label>
            <input type="text" placeholder="Image" onChange={(e)=>dispatch({
                type:'Image',
                payload:e.target.value
            })} />
            <br />
            <br />
          <button id="btn">Submit</button>
        </form>
      {/* {append the data} */}
      {
        submitedData.map((item)=>{
            return <Display name={item.name} mobile={item.Mobile} dob={item.DOB} email={item.Email} image={item.Image} />
        })
      }
    </div>
    
</div>
    )
}

export default Form 