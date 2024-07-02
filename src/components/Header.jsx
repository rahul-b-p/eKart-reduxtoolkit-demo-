import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { Nav } from 'react-bootstrap';



function Header() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" data-bs-theme="primary" bg='primary'>
        <Container>
            <Navbar.Brand href="/">
            <h3 className='fw-bolder text-light'><FontAwesomeIcon icon={faCartShopping} bounce className='me-3' style={{color: "#ffffff",}}/> eKart</h3>        
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='ms-auto'>
                <Link to={'/wishlist'}><Button className='me-5 mt-md-0 mt-5' variant="outline-light"><FontAwesomeIcon className='me-2' icon={faHeart} style={{color: "#ff0000",}} />WishList<Badge className='ms-1' bg="secondary">0</Badge></Button></Link>
                <Link to={'/cart'}><Button className='mt-md-0 mt-3' variant="outline-light"><FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className='me-2'/>cart<Badge className='ms-1' bg="secondary">0</Badge></Button></Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default Header