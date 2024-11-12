
import { Button } from 'react-bootstrap';
import Age from './Age';
import './App.css';
import BMI from './Bmindex';
import Home from './Home/Home';
import SmokingAndRegion from './SmokingAndRegion';
import Output from './Output'
import Progress from './components/Progress';
import React , {useState , useEffect  } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import Output from './Output';



function App() {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep)
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  

  
  

  return (
    <Router>
    <div className="App">
      {/* <Button onClick={fetchData}>Start</Button>
      <p>{predictedValue}</p> */}
      
      <Progress currentStep={currentStep} totalSteps={totalSteps} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/age"
            element={<Age onNext={nextStep} />}
          />
          <Route
            path="/bmi"
            element={<BMI onNext={nextStep} onPrev={prevStep} />}
          />
          <Route
            path="/sar"
            element={<SmokingAndRegion onNext={nextStep} onPrev={prevStep} />}
          />
           <Route
            path="/opt"
            element={<Output onPrev={prevStep} />}
          />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
