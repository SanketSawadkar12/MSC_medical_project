import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particle from './components/Particle';
import { useLocation } from 'react-router-dom';


export default function Output() {
  const location = useLocation();
  const { age, gender, children ,bmi , smoker, region} = location.state;
  console.log('data in output ', age,gender,children,bmi,smoker,region)
  // const [data, setData] = useState([{}])
  const data = [age, gender, bmi ,children , smoker, region];
  const [predictedValue, setPredictedValue] = useState(null);

  useEffect (()=>{
    fetchData();
  },[]);

  // const handleCalculatePredictedValue = () => {
  //   // Implement logic to calculate predicted value here
    
  //   fetchData();
  // };

  const fetchData = async () => {
    try {
      const response = await fetch("/output", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data }) // Change this to the data you want to send
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setPredictedValue(responseData.predicted_value);
      console.log('the predicted value is',predictedValue)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='home-div'>
      <Particle />
      <Container>
        <Row>
          <Col style={{ paddingTop: '15%' }}></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            {/* <h1 style={{ color: "#222831", border: "20px", fontWeight: 500 }}>Output</h1> */}
            {/* <Button variant="primary" onClick={fetchData} style={{fontSize:'20px'}} > */}
              {/* Calculate Predicted Value */}
            {/* </Button> */}
            {/* {predictedValue && <p style={{fontStyle:'bold',fontFamily:'monospace',fontWeight:400,fontSize:'300%', border:'double'}}>Your Premium will be Rs {predictedValue}</p>} */}
            {predictedValue && 
  <div className="premium-container">
    <p className="premium-text">Your Premium will be Rs {predictedValue}</p>
  </div>
}
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingTop: '32.2%' }}></Col>
        </Row>
      </Container>
    </div>
  );
}
