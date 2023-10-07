import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';




function Home() {

  const [restuarants, setRestuarants] = useState([])

  // api call
  const getAllRestaurant = async () => {
    const result = await axios.get('/restaurants.json')
    setRestuarants(result.data.restaurants);

  }
  useEffect(() => {
    getAllRestaurant()
  }, [])

  console.log(restuarants);

  return (


    <div style={{overflowX:'hidden'}}>
      <div className='pt-5 mt-5 pb-5 mb-5 mx-0'>
        <div className='div3 mt-5 mb-5 w-100' >
          <div>
            <Row>
              <Col lg={5} md={5} sm={5} xs={12} ><img className='img1  ' src="https://i.postimg.cc/Ss94b4Ct/img.png" alt="" /></Col>
              <Col lg={7} md={7} sm={7} xs={12} ><h2 className='mt-4  pe-2 pe-lg-5 head1' style={{margin:0}}>We Belevie Good <b>Food</b>  <br /> Offer Greate <b>Smile</b>.... </h2>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia enim ex eligendi, commodi, doloremque, laborum facilis consequuntur sed voluptates excepturi quia facere beatae iusto ipsam eos accusamus nostrum dolorum!</p></Col>
            </Row>
          </div>
        </div>
      </div>
      <br /> <br />
      {/* Card */}
      <Container>
        <Row className='d-flex align-items-center justify-content-center'>
          {
            restuarants.length > 0 ? restuarants.map(i =>
              <Col xs={12} sm={12} lg={4} md={6} >

                {/* card */}
                <Link to={`/view/${i.id}`} style={{ textDecoration: 'none' }}>
                  <div className="d-flex justify-content-center align-items-center">
                  <Card style={{ width: '18rem', height: '550px' }} className='mt-4 card '>
                    <Card.Img
                      style={{ height: '400px' }}
                      variant="top" src={i.photograph}
                      className='mx-auto' />
                    <Card.Body >
                      <Card.Title className='text-center text-white'><b>{i.name}</b></Card.Title>
                      <Card.Text className='text-center cText'>
                        <b><i class="fa-solid fa-location-dot"></i></b> {i.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  </div>
                </Link>
              </Col>
            ) : <h1>No Data Present</h1>
          }
        </Row>
      </Container>
    </div>
  )
}
export default Home