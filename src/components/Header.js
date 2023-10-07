import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './style.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='mt-3 w-100'>
         <Navbar className="bg-body-tertiary" style={{paddingRight:0}}>
        <Container>
          <Navbar.Brand href="#home" className='navBrand'>
            <Link to={"/"}>
            <img
              alt=""
              src="https://i.postimg.cc/BvJgxcQ7/chef-cooky-food-logo-icon-vector-concept-flat-design-RKH90-R.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top logoImg"
            />
            </Link>{' '}
             <p className='mt-5 p'>Urban Spoon</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header