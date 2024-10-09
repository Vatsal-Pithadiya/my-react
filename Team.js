import App from "../App";
import { Link } from "react-router-dom";

const Team = ()=>{
    const arr=[
        {
           "URL" : "https://tse4.mm.bing.net/th?id=OIP._nDapFvhiv8GKIbUyAzV9gHaHa&pid=Api&P=0&h=180",
           "URL1" : "https://tse1.mm.bing.net/th?id=OIP.GneL7CLsqr9LQTK2KsN5qAHaHa&pid=Api&P=0&h=180",
           "URL2" : "https://tse4.mm.bing.net/th?id=OIP._nDapFvhiv8GKIbUyAzV9gHaHa&pid=Api&P=0&h=180",
           "URL3" : "https://tse1.mm.bing.net/th?id=OIP.GneL7CLsqr9LQTK2KsN5qAHaHa&pid=Api&P=0&h=180",
        }
    ];
    const result = arr.map((item)=>{
        return( 
            <>
            <br/>
            <div className="p-2 border border-success border-5"> <h3>TEAM 1</h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col"> 
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 1</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 2</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL1}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 3</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL2}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 4</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL3}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br/>
            <div className="p-2 border border-danger border-5"> <h3>TEAM 2</h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col"> 
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 1</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL1}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 2</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 3</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL3}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 4</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL2}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br/>
            <div className="p-2 border border-success border-5"> <h3>TEAM 3</h3>
            <div class="container text-center">
                <div class="row">
                    <div class="col"> 
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 1</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 2</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL1}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 3</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL2}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <h5 class="card-title">PLAYER 4</h5>
                        <br/>
                        <img className="p-2 border rounded-pill border-warning border-3" src={item.URL3}/>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br/>
            <Link href="#" className='btn btn-info m-1' to='/' element={<App/>}>BACK TO HOME</Link>
            <br/>
            <br/>
            </>
        );
    });
    return(
        <>
            <div> {result} </div>
        </>
    );
    
}
export default Team;