
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(){
    const [data, setData] = useState({});
    const navigate = useNavigate();
    return(
        <>
            
            <div class="col-4" style={{marginLeft:"25vw",marginTop:"5vw"}}>
            <div class="card p-3 border " style={{width:"50vw"}}>
                <div class="card-header border text-center">
                    ADD STUDENT
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                        <div class="form-group row">
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">STUDENT NAME : </label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,name:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">STUDENT PHONE : </label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,phone:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENT COUNTRY : </label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,country:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENET EMAIL : </label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,email:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENET BIRTH-MONTH : </label> 
                <div class="col-8">
                <input onChange={(e)=>{
                    setData({...data,birthmonth:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <div class="offset-4 col-8">
                <br/>
                <button onClick={()=>{
                    const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students";

                    fetch(apiUrl,{
                        method:"POST",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/getall');
                    });
                }} name="submit" class="btn btn-success" style={{marginLeft:"5vw"}} > ADD STUDENET </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Getall" className="btn btn-info">BACK</Link>
                </div>
                </div>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Add;