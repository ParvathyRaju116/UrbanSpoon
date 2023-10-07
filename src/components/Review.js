import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({review}) {
  return (
    <div>

<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='accro'>
        <Accordion.Header className='acc-header btn1' style={{color:'white', border:0}}><span>Reviews</span> </Accordion.Header>
        <Accordion.Body >
            {
                review?review.map(i=>(
                    <div>
                        <p> <b>{i.name}</b></p>
                        <p><i class="fa-solid fa-calendar-days" style={{color:'white'}}> </i> {i.date}</p>
                        <p><i class="fa-solid fa-star" style={{color:'white'}}></i> {i.rating}</p>
                        <p style={{textAlign:'justify'}}>Comments {i.comments}</p>
                        <hr />
                    </div>
                    
                )): <h1>No Reviews</h1>
            }
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </div>
  )
}

export default Review