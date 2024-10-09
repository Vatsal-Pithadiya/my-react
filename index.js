import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About  from './COMPONENT/About';
import Contact from './COMPONENT/Contact';
import Product from './COMPONENT/Product';
import Team from './COMPONENT/Team';
import Layout from './COMPONENT/Layout';
import Hooks from './COMPONENT/Hooks';
import Getall from './COMPONENT/Getall';
import Studentdetail from './COMPONENT/Studentdetail';
import Add from './COMPONENT/Add';
import Update from './COMPONENT/Update';
import Getall1 from './COMPONENT/Getall1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path='/' element={<App/>}/>
      <Route path='/hooks' element={<Hooks/>}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/getall' element={<Getall/>}/>
      <Route path='/getall1' element={<Getall1/>}/>
      <Route path='/studentdetail/:id' element={<Studentdetail/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
