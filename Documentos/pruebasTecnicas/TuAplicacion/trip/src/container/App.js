import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Stepper from '../components/Stepper';
import InitStepper from '../components/InitStepper';
import FinishStepper from '../components/FinishStepper';
import '../assets/styles/App.css';
import '../assets/styles/InitStepper.css';
import '../assets/styles/finishStepper.css';

function App() {
  return (
    <BrowserRouter>
      <Switch className= 'App'  >
        <Route exact path='/' component={InitStepper} />
        <Route exact path='/stepper' component={Stepper} />
        <Route exact path='/finishStepper' component={FinishStepper} />
      </Switch>          
    </BrowserRouter>
  );
}

export default App;


