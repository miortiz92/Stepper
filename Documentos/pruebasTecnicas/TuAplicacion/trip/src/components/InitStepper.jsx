import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/Logo Dark.svg';
import Layout from './Layout';

const InitStepper = () => {

    return (
      <React.Fragment >
        <div className='contain initStepper__container'>
          <section className='initState__info state__info'>
            <img src={logo} alt="logo"/>
            <p><strong>Formulario</strong></p>
            <h1><strong>Endorfit 1.0</strong></h1>
            <Link className='link' to='/stepper'>Empezar</Link>
          </section>
        </div>
        <Layout index={1} />
      </React.Fragment>
    )
}

export default InitStepper;