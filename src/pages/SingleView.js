import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Review from '../components/Review';
import Operating from '../components/Operating';



function SingleView() {
  const [allrestaurants,setRestaurants]=useState([])
  const param=useParams()

  const getAllRest =async()=>{
    const result = await axios.get('/restaurants.json')
    setRestaurants(result.data.restaurants);
  }

  // const id=param.id                      //same...code..called destructuring
  const {id}=param                          // used in cases where id and variables are same

  useEffect(()=>{
        getAllRest()
  },[])
  // console.log(id);
  // console.log(allrestaurants);
  //find single rest
 const singleRest= allrestaurants.find(i=>i.id==id)
 console.log(singleRest);
  return (
    <div>
      <Container>
      {

        singleRest?
        
        <Row>
        <Col lg={5} md={12} className='' >
        <img src={singleRest.photograph} alt="" style={{width:'100%'}} className='d-flex align-items-center justify-content-center mt-5' />
        </Col>
        <Col lg={7}>
        <h1 className='mt-5 head2 m-3'>{singleRest.name}</h1>
        <ListGroup > 
      <ListGroup.Item className='lgi'> <span><i class="fa-solid fa-location-dot"></i> </span> {singleRest.address}</ListGroup.Item>
      <ListGroup.Item className='lgi'> <span><i class="fa-solid fa-utensils"></i> </span> {singleRest.cuisine_type}</ListGroup.Item>
      {/* <ListGroup.Item className='lgi'> <span> </span> {singleRest.neighborhood}</ListGroup.Item> */}
      <ListGroup.Item className='lgi1 ms-3 btn'><Operating operatingData={singleRest.operating_hours}></Operating></ListGroup.Item>
      <ListGroup.Item className='lgi1 ms-3 btn'><Review review={singleRest.reviews}></Review></ListGroup.Item>

    </ListGroup>
        </Col>
        
      </Row>:
      <Row>
        <h1>No Data</h1>
      </Row>
      }</Container>
        
    </div>
    
  )
}

export default SingleView