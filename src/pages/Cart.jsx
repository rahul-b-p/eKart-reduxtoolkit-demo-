import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slice/cartSlice'


function Cart() {
  const cartArray = useSelector((state)=>state.CartReducer)
  // console.log(cartArray);

  const dispatch = useDispatch()

  return (
    <>
      {cartArray?.length>0?<Row className='p-5 my-5 w-100'>
        <Col md={6} className='ps-3'>
          <Table responsive="sm" className='shadow border rounded'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item=>(<tr>
                <td>1</td>
                <td>{item.title}</td>
                <td><img src={item.images} alt="no image" width="150px" height="150px" /></td>
                <td>${item.price}</td>
                <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant='outline-danger'><FontAwesomeIcon icon={faTrashCan} /></Button></td>
              </tr>)))}
            </tbody>
          </Table>
        </Col>
        <Col md={6} className='p-5'>
          <div className='d-flex justify-content-center align-items-center'>
            <div className=' border shadow rounded p-4'>
              <h2 className='text-center fw-bolder'>Cart Summury</h2>
              <hr />
              <h5><b>Total Number of products:</b> {cartArray.length}</h5>
              <h5><b>Total Prize:</b> ${cartArray.map(item=>item.price).reduce((c1,c2)=>c1+c2)}</h5>
              <div className='w-100 d-flex justify-content-center align-items-center mt-3'><Button variant='success'>Checkout</Button></div>
            </div>
          </div>
        </Col>
      </Row>
      :
      <div style={{width:"100%", height:"70vh", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <img src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png" alt="no image" width='300px' />
        <Link to={'/'}><Button variant='primary'><FontAwesomeIcon icon={faArrowLeft} className='me-2' />Back to Home</Button></Link>
      </div> }
    </>
  )
}

export default Cart