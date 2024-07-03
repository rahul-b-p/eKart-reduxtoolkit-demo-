import { faArrowLeft, faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';



function WishList() {
const wishListArray = useSelector((state)=>state.WishlistReducer)
// console.log(wishListArray);

const dispatch = useDispatch()

const handleCart=(item)=>{
  dispatch(addToCart(item))
  dispatch(removeFromWishList(item.id))
}

  return (
    <>
      {wishListArray?.length>0?
        <Row className='w-100 p-3 my-3'>
          {wishListArray?.map((item)=>(
            <Col sm={12} md={4} lg={3}className='d-flex justify-content-center p-3 mt-3'>
              <Card style={{ width: '100%' }} className='border shadow rounded'>
                <Card.Img variant="top" src={item.images} className='w-100' style={{height:"250px"}}/>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p>Price: ${item.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(removeFromWishList(item.id))} variant="danger"><FontAwesomeIcon icon={faTrashCan} /></Button>
                    <Button onClick={()=>handleCart(item)} variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}  
        </Row> 
        :
        <div style={{width:"100%", height:"70vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <img src="https://evyapari.com/static/media/empty_wishlist.4b6281beecbb34e00bf3.png" width='300px' alt="no image" />
          <Link to={'/'}><Button variant='primary'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</Button></Link>
        </div> 
      }  

      
    </>
  )
}

export default WishList