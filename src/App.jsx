import React from 'react'
import "./app.css";
import circle from './assets/Ellipse.png'
import { ContactPage,CartPage,DetailPage, HomePage } from './screens';
import { NavLink,Route,Routes } from 'react-router-dom';
import { Footer } from './components';

const App = () => {

  return (
    <>
      <div>
        <nav>
          
          <div className='logo'>
          <img src={circle}></img>
          <h4 className='TextLogo'>Your brand</h4>
          </div>
          <div>
            <div className='Search'>
              <input type="text" placeholder='Search' className='inputSearch'/>
              <img src="../src/assets/search.png"/>
            </div>
          </div>
          <div className='Naveg'>
            <NavLink to='/contact' className='NavBoton'>Contact</NavLink>
            <NavLink to='/' className='NavBoton'><img  className='imgBotonNav' src="../src/assets/heroicons_home-20-solid.png"/></NavLink>
            <NavLink to='/cart' className='NavBoton'><img className='imgBotonNav' src="../src/assets/shopping_cart.png"/></NavLink>
          </div>
        </nav>


        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<DetailPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
        
        <Footer/>
      </div>
    </>
  );
};

export default App;
