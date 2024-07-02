import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <footer className='bg-primary w-100 p-3'>
        <Row>
          <Col md={4} className='p-4 ms-md-2' >
            <h3 className='text-light fw-bolder'>eKart</h3>
            <p className='text-light' style={{textAlign:'justify'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure voluptate doloremque culpa adipisci soluta aut, similique laudantium. Nemo ab voluptatem repudiandae assumenda, natus corporis doloremque ipsa sit fugiat aliquam nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex nihil ab esse obcaecati magni, iusto qui vel quaerat laudantium similique, error debitis reprehenderit beatae, enim accusantium provident? Voluptate, qui.</p>
          </Col>
          <Col md={2} className='p-4 justify-content-center d-md-flex'>
            <div>
              <h4 className='text-light'>Links</h4>
              <p className='mt-4'><Link className='text-light' to={'/'}>Home</Link></p>
              <p><Link className='text-light' to={'/cart'}>Cart</Link></p>
              <p><Link className='text-light' to={'/wishlist'}>WishList</Link></p>
            </div>
          </Col>
          <Col md={2} className='text-light p-4'>
            <h4>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </Col>
          <Col md={3} className='p-4'>
            <h4 className='text-light'>Contact us</h4>
            <div className="d-flex mt-4">
                <input type="text" className='form-control me-3' placeholder='Email Id' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
            <div className="d-flex mt-4 justify-content-between text-light ">
              <FontAwesomeIcon icon={faInstagram} size='2xl'/>
              <FontAwesomeIcon icon={faFacebook} size='2xl'/>
              <FontAwesomeIcon icon={faXTwitter} size='2xl'/>
              <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
            </div>
          </Col>
        </Row>  
      </footer>
    </>
  )
}

export default Footer