import {Link} from 'react-router-dom';
import About  from './About';
import Contact from './Contact';
import Product from './Product';
import Team from './Team';
import Hooks from './Hooks';
import Getall from './Getall';

 function Navbar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-white">
                <div class="container">
                    <a class="navbar-brand">
                    <img src="https://img.freepik.com/premium-photo/beautiful-v-isolated-white-background_787273-37196.jpg?size=626&ext=jpg&ga=GA1.1.714627798.1726481788&semt=ais_hybrid" alt="Bootstrap" width="130" height="100" ></img>
                    </a>
                </div>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>   
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/' ><h3>HOME</h3></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/hooks' >HOOKS</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to='/getall' >CURD</Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/product' element={<Product/>} > FACULTY </Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/about' element={<About/>} > ABOUT </Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/contact' element={<Contact/>} > CONTACT </Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link active' aria-current="page" to='/team' element={<Team/>} > TEAM </Link>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><h7>DROPDWON</h7></a>
                        <ul class="dropdown-menu">
                            <Link class="nav-link active" aria-current="page" to='/' >HOME</Link>
                            <Link class="nav-link active" aria-current="page" to='/hooks' element={<Hooks/>} >HOOKS</Link>
                            <Link class="nav-link active" aria-current="page" to='/getall' element={<Getall/>} >CURD</Link>
                            <Link className='nav-link active' aria-current="page" to='/product' element={<Product/>} > FACULTY </Link>
                            <Link className='nav-link active' aria-current="page" to='/about' element={<About/>} > ABOUT </Link>
                            <Link className='nav-link active' aria-current="page" to='/contact' element={<Contact/>} > CONTACT </Link>
                            <Link className='nav-link active' aria-current="page" to='/team' element={<Team/>} > TEAM </Link>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
 }       
 export default Navbar;