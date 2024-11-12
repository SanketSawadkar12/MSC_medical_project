import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from './components/Particle';
import { useNavigate } from 'react-router-dom';


export default function Age({onNext}) {
  const navigate = useNavigate();

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [children, setChildren] = useState('');
  const [error, setError] = useState('');



  const handleAgeChange = (e) => {
    const inputAge = e.target.value;
    // Validate if the entered age is less than or equal to 99
    if (inputAge.length <= 2 && Number(inputAge) <= 99) {
      setAge(inputAge);
      setError('');
    } else {
      setError('Age should be a number less than or equal to 99');
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleChildrenChange = (e) => {
    setChildren(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    // Check if all fields are entered
    if (age && gender && children ) {

      console.log('Age:', age);
      console.log('Gender:', gender);
      console.log('Number of Children:', children);
      onNext();
      navigate('/bmi', { state: { age, gender, children } });
      // Redirect or perform other actions after form submission
      
    } else {
      
      setError('Please fill in all fields');
      
    }
  };
  // const isNextDisabled = !(age && gender && children);
  // console.log('Age:', age);
  // console.log('Gender:', gender);
  // console.log('Children:', children);

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
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="age">
                <br/>
                <Form.Control type="number" placeholder="Enter your age" value={age} onChange={handleAgeChange} />
              </Form.Group>
              <Form.Group controlId="gender" style={{ paddingTop: 15 }}>
              <br/>
                <Form.Control as="select" placeholder='Select Gender' value={gender} onChange={handleGenderChange}>
                  <option value="" disabled>Select gender</option>
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </Form.Control>
              </Form.Group>
              <br/>
              <Form.Group controlId="children" style={{ paddingTop: 15 }}>
                <Form.Control as="select" placeholder='Select Number of Children' value={children} onChange={handleChildrenChange}>
                  <option value="" disabled>Select number of children</option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index}>{index}</option>
                  ))}
                </Form.Control>

              </Form.Group>
              <br/>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              
                <Button variant="primary" type="submit" >
                  Save and Next
                </Button>
           
            </Form>
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingTop: '17.9%' }}></Col>
        </Row>
      </Container>
    </div>
  );
}
