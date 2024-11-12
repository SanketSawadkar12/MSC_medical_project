import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from './components/Particle';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SmokingAndRegion({onNext}) {
  const navigate = useNavigate();
  const [smoker, setSmoker] = useState('');
  const [region, setRegion] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const { age, gender, children ,bmi} = location.state;
  console.log('data in sar ', age,gender,children,bmi)

  const handleSmokerChange = (e) => {
    setSmoker(e.target.value);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are entered
    if (smoker && region) {
      console.log('Smoker:', smoker);
      console.log('Region:', region);
      onNext();
      navigate('/opt',{ state: { age, gender, children, bmi, smoker, region } }); // Navigate to output.js
    } else {
      setError('Please fill in all fields');
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
            <h1 style={{ color: "#222831", border: "20px", fontWeight: 500 }}>Personal Details</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="smoker">
                <div  style={{ backgroundColor:'#F7F6F2',borderRadius:'7px' }}>
                <Form.Label>
                  <h5 style={{fontWeight:1000,paddingTop:10}}>Are you a smoker?
                    </h5>
                  </Form.Label>

                  <div>
                
                  <Form.Check style={{fontWeight:1000 }}
                    inline
                    label="Yes"
                    type="radio"
                    id="smoker-yes"
                    name="smoker"
                    value="1"
                    checked={smoker === "1"}
                    onChange={handleSmokerChange}
                  />
                  <Form.Check style={{fontWeight:1000}}
                    inline
                    label="No"
                    type="radio"
                    id="smoker-no"
                    name="smoker"
                    value="0"
                    checked={smoker === "0"}
                    onChange={handleSmokerChange}
                  />
                  </div>
                  
                </div>
              </Form.Group>
              <br/>
              <Form.Group controlId="region" style={{ paddingTop: 15 }}>
                <Form.Control as="select" placeholder='Select Your Region' value={region} onChange={handleRegionChange}>
                  <option value="" disabled>Select region</option>
                  <option value="2">Northeast</option>
                  <option value="0">Southeast</option>
                  <option value="3">Northwest</option>
                  <option value="1">Southwest</option>
                </Form.Control>
              </Form.Group>
              <br/>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingTop: '21.4%' }}></Col>
        </Row>
      </Container>
    </div>
  );
}
