import App from "../App";
import { Link } from "react-router-dom";

const About = ()=>{

    const arr=[0,1,2,3,4,5,6];
    const result = arr.map((item)=>{
        return(
            <div>
                <h7>ABOUT ITEM {item+1}</h7>
                <p>THIS IS ABOUT ITEM NUMBER {item+1}</p>
            </div>
        );
    });
        return(
            <>

            
            <div class="card">
            <div class="card-header text-center">
                ABOUT PAGE !
            </div>
            <div class="card-body">
                <h1 class="card-title">ABOUT US</h1>
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
export default About;