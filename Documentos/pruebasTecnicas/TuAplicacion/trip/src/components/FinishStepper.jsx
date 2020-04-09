import React from 'react';
import logo from '../assets/static/Logo Dark.svg';
import check from '../assets/static/check.svg';
import Layout from './Layout';

const FinishStepper = (props) => {
  let handleClick = () =>{
    for(let key of props.location.data.entries()){
      console.log(key[0]+' '+ key[1]);
    }
    alert('mirar resultados en consola');
  }
  return (
    <React.Fragment >
      <div className='contain finishStepper__container'>
        <section className='state__info'>
          <img src={logo} alt="logo"/>
          <img className='check' src={check} alt="check"/>
          <p><strong>Gracias por llenar el formulario, ahora empieza tu propio viaje</strong></p>
          <button onClick={handleClick} >Empezar</button>
        </section>
      </div>
      <Layout index={13} />
    </React.Fragment>
  )
}

export default FinishStepper;