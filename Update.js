
import { useState , useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update(){
    const [data, setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students/"+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            
            <div class="col-4" style={{marginLeft:"25vw",marginTop:"5vw"}}>
            <div class="card p-3 border " style={{width:"50vw"}}>
                <div class="card-header border text-center ">
                    UPDATE STUDENT
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                        <div class="form-group row">
            </div>
            <div class="form-group row">
                <label for="text1" class="col-4 col-form-label">STUDENT NAME : </label> 
                <div class="col-8">
                <input value={data.name} onChange={(e)=>{
                    setData({...data,name:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text4" class="col-4 col-form-label">STUDENT PHONE : </label> 
                <div class="col-8">
                <input value={data.phone} onChange={(e)=>{
                    setData({...data,phone:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENT COUNTRY : </label> 
                <div class="col-8">
                <input value={data.country} onChange={(e)=>{
                    setData({...data,country:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENET EMAIL : </label> 
                <div class="col-8">
                <input value={data.email} onChange={(e)=>{
                    setData({...data,email:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label for="text3" class="col-4 col-form-label">STUDENET BIRTH-MONTH : </label> 
                <div class="col-8">
                <input value={data.birthmonth} onChange={(e)=>{
                    setData({...data,birthmonth:e.target.value})
                }}  type="text" class="form-control" />
                </div>
            </div> 
            <div class="form-group row">
                <div class="offset-4 col-8">
                <br/>
                <button onClick={()=>{
                    const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students/"+id;

                    fetch(apiUrl,{
                        method:"PUT",
                        body:JSON.stringify(data),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        navigate('/getall');
                    });
                }} name="submit" class="btn btn-warning" style={{marginLeft:"5vw"}} > UPDATE </button>&nbsp;&nbsp;&nbsp;&nbsp;
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

export default Update;