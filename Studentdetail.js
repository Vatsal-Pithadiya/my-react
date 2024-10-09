import App from "../App";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Studentdetail(){
    const [data, setData] = useState({});

    const { id } = useParams();

    const navigate = useNavigate();

    const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students/"+id;

    useEffect(()=>{
        fetch(apiUrl, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    return(
        <>
            
            <div class="col-4" style={{marginLeft:"33vw",marginTop:"5vw"}} >
            <div class="card p-3 border">
                <div class="card-header border text-center">
                    STUDENT
                </div>
                <div class="card-body">
                    <p class="card-text">
                        <div>
                            <p>
                                <br/>
                                <h4>ID : {data.id}</h4>
                                <h4>NAME : {data.name}</h4>
                                <h4>PHONE : {data.phone}</h4>
                                <h4>COUNTRY : {data.country}</h4>
                                <h4>EMAIL : {data.email}</h4>
                                <h4>BIRTH-MONTH : {data.birthmonth}</h4>
                                <img src={data.URL}/>
                            </p>
                            <Link to="/Getall" className="btn btn-outline-info">Back TO Getall</Link> &nbsp;&nbsp;
                            <button className="btn btn-outline-danger" onClick={()=>{
                                const apiUrl = "https://66f24dd871c84d805874b38e.mockapi.io/students/"+id;

                                fetch(apiUrl, {method:"DELETE"})
                                .then(res=>res.json())
                                .then(res=>{
                                    navigate('/Getall');
                                })
                            }}>Delete</button>
                            <p>___________________________________________________________</p>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        <br/>
        <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
        <br/>

        </>
    );
}

export default Studentdetail;