
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { faArrowLeft, faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function WishList() {
  return (
    <>
      <Row className='w-100 p-3 my-3'>
        <Col sm={12} md={4} lg={3}className='d-flex justify-content-center p-3 mt-3'>
          <Card style={{ width: '100%' }} className='border shadow rounded'>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/474862754/photo/yellow-boots.jpg?s=612x612&w=0&k=20&c=wlaxHn6a5BOjOPGi92VypLutLfumhp6Woru6P_gFAww=" className='w-100' style={{height:"250px"}}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <div className='d-flex justify-content-between'>
                <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
                <Button variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>  
      </Row>   

      <div style={{width:"100%", height:"70vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <img src="https://evyapari.com/static/media/empty_wishlist.4b6281beecbb34e00bf3.png" width='300px' alt="no image" />
        <Link to={'/'}><Button variant='primary'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</Button></Link>
      </div> 
    </>
  )
}

export default WishList