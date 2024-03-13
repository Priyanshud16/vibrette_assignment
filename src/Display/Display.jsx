import "./Display.css"

function Display({name,mobile,dob,email,image}){

    return (
        <div className="Data" >
           <h3>Data</h3>
           <p>Name:{name}</p>
           <p>Mobile:{mobile}</p>
           <p>DOB:{dob}</p>
           <p>Email:{email}</p>
           <p>Image:{image}</p>
        </div>
    )
}

export default Display