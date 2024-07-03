import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';


function Home() {
  const products = useFetch('https://dummyjson.com/products')
  // console.log(products);

  const dispatch = useDispatch()

  return (
    <>
      <Row className='w-100 p-3 my-3'>
        {products?.length>0?
          products?.map((item)=>(<Col sm={12} md={4} lg={3}className='d-flex justify-content-center p-3 mt-3'>
            <Card style={{ width: '100%' }} className='border shadow rounded'>
              <Card.Img variant="top" src={item.images[0]} className='w-100' style={{height:"250px"}}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <p>price : ${item.price}</p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button onClick={()=>dispatch(addToWishlist(item))} variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
                  <Button onClick={()=>dispatch(addToCart(item))} variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
                </div>
              </Card.Body>
            </Card>
          </Col>))
          :
          <p>Nothing to Display</p>
        }  
      </Row>    
    </>

  )
}

export default Home