import App from "../App";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import Studentdetail from "./Studentdetail";
import Add from "./Add";
import Update from "./Update";

const Getall1=()=>{
const [data,setData]=useState([]);
const navigate = useNavigate()

    const url="https://66f24dd871c84d805874b38e.mockapi.io/students"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then((res)=>setData(res));
    },[]);

    return(
        <>
        <div class="col-4" style={{marginLeft:"32vw",marginTop:"5vw"}}>
            <div class="card p-3 border">
                <div class="card-header border text-center">
                    ALL STUDENTS
                </div>
                <Link  href="#" className='btn btn-success m-3' to='/add' element={<Add/>}>ADD STUDENT</Link>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                            {data.map((student,index)=>(
                                <div key={index}>
                                    <h3>id: {student.id}</h3>
                                    <h3>Name: {student.name}</h3>
                                    <br/>
                                    <Link className="btn btn-outline-info" to={'/studentdetail/'+student.id} element={<Studentdetail/>}>READ MORE</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link className="btn btn-outline-warning" to={'/update/'+student.id} element={<Update/>}>UPDATE</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-outline-danger" onClick={()=>{
                                            const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students/"+student.id;

                                            fetch(apiUrl, {method:"DELETE"})
                                            .then((res)=>res.json())
                                            .then(()=>navigate('/Getall'))
                                        }}>Delete</button>
                                    <p>___________________________________________________________</p>
                                </div>
                            ))}
                            
                        </div>
                        
                    </p>
                </div>
            </div>
        </div>
        <br/>
        <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
        <br/>
        <br/>
        </>
    )
}
export default Getall1;