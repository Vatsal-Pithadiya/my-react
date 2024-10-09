import App from "../App";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

    
function Hooks(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            console.log("hello");
        },1000)
    },[]);

    return(
        <>
        <div class="col-2"style={{marginLeft:"40vw",marginTop:"5vw"}}>
        <div class="card">
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }}>ADD</button>
        </div>
        </div>
        <br/>
        <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
        <br/>
        </>
    )
}

export default Hooks;