import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particle from './components/Particle';
import { useLocation, useNavigate } from 'react-router-dom';


export default function BMI({onNext}) {
  const navigate = useNavigate();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState('');
  const location = useLocation();
  const { age, gender, children } = location.state;
  console.log('data in bmi ', age,gender,children)

  const calculateBMI = () => {
    const heightMeters = height / 100; // Convert height to meters
    const bmiValue = weight / (heightMeters * heightMeters);
    return bmiValue.toFixed(2); // Return BMI rounded to two decimal places
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields
    if (!height || !weight) {
      setError('Please fill in all fields');
      return;
    }

    const calculatedBMI = calculateBMI();
    setBMI(calculatedBMI);
    console.log(bmi)
    setError('');
  };

  const handleNext = () => {
    console.log('handlenext',bmi)
    onNext();
    navigate('/sar',{ state: { age, gender, children ,bmi } }); // Navigate to sar.js
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <br />
                <input type="number" className="form-control" id="height" placeholder="Enter your height (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <br />
              <div className="mb-3">
                <input type="number" className="form-control" id="weight" placeholder="Enter your weight (kg)" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button variant="primary" type="submit">
                Calculate BMI
              </Button>
            </form>
            {bmi !== null && (
              <div className="mt-3">
                <p>Your BMI: {bmi}</p>
                <Button variant="primary" onClick={handleNext}>
                  Save And Next
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col style={{ paddingTop: '26%' }}></Col>
        </Row>
      </Container>
    </div>
  );
}
