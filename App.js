import './App.css';
import {Link} from 'react-router-dom';
import About  from './COMPONENT/About';
import Contact from './COMPONENT/Contact';
import Product from './COMPONENT/Product';
import Team from './COMPONENT/Team';
import Getall from './COMPONENT/Getall'

function App(){
    return(
        <>
              <div class=" text-center p-3">
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.O4pkq-Klo1gxCkU2Xi5ftgHaHa&pid=Api&P=0&h=180" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">ABOUT</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className='btn btn-info m-1' to='/about' element={<About/>} > GO ABOUT </Link>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.B4OQtnrnuRY81GTs4x2-SgHaHa&pid=Api&P=0&h=180" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">CURD OPREATION</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className='btn btn-info m-1' to='/getall' element={<Getall/>} > GO CURD </Link>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.GmieJ9zHzH4cW-UQVEoGbgHaHa&pid=Api&P=0&h=180" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">FACULTY CARD</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className='btn btn-info m-1' to='/product' element={<Product/>} > GO FACULTY </Link>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.XdE9YobWTL4nTjRw2YFFoAAAAA&pid=Api&P=0&h=180" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">TEAM</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className='btn btn-info m-1' to='/team' element={<Team/>} > GO TEAM </Link>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </>
        
    );
}
export default App;