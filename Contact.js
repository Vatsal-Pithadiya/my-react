import App from "../App";
import { Link } from "react-router-dom";

const Contact = ()=>{
    const arr=[
        {
            "NAME" : "Vatsal",
            "EMAIL" : "vatsal@gmail.com",
            "PHONE" : "9876543210"
        },
        {
            "NAME" : "Prince",
            "EMAIL" : "prince@gmail.com",
            "PHONE" : "9876543212",
        }
    ];
    const result = arr.map((item)=>{
        return(
            <div>
                <p><h7> NAME : {item.NAME}</h7></p>
                <p><h7> EMAIL : {item.EMAIL}</h7></p>
                <p><h7> PHONE : {item.PHONE}</h7></p>
                <p>_____________________________________</p>
            </div>
        );
    });
    return(
        <>
        <div class="card">
        <div class="card-header text-center ">
            CONTACT PAGE !
        </div>
        <div class="card-body">
            <h1 class="card-title">CONTACT US</h1>
            <p>_________________________________________________________</p>
            <p class="card-text">
            <div> {result} </div>
            </p>
        </div>
        </div>
        <br/>
        <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
        <br/>
        </>
        
        
    );
}
export default Contact;