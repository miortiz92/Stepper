import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/fileLoader.css';
import logo from '../assets/static/Logo Dark.svg';
import frente from '../assets/static/hombre-frente.svg';
import espalda from '../assets/static/hombre espalda.svg';
import derecho from '../assets/static/hombre perfil derecho.svg';
import izquierdo from '../assets/static/hombre perfil izquierdo.svg';
import peso from '../assets/static/peso.svg';
import ejercicio from '../assets/static/f ejercicio.svg';
import personal from '../assets/static/p personal.svg';
import disciplina from '../assets/static/disciplina.svg';
import agua from '../assets/static/vasos de agua.svg';
import paciencia from '../assets/static/paciencia.svg';
import FileLoader from './FileLoader';
import Layout from './Layout';
import Slide from './Slide';


const Stepper = () => {
    
  const [ index, cambiarEstado ] = useState(0);
  const [formData, setFormData] = useState('');
  
  useEffect(() => {
    setFormData(new FormData());
    },
  []);
  
  let handleOnChange = (e) => {
    formData.append('peso', e.target.value);     
  };

  const SlideGeneric = ({ title, marks, max, labelA, labelB }) => 
    (<Slide 
      form={formData} 
      title={title} 
      marks={marks || { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 }}
      max={max || 10}
      labelA={labelA}
      labelB={labelB}
    />)

  let array = [
    {
      textB: 'Sube una foto actual en la siguiente postura',
      imgC: frente,
      textC: '1.Adelante',
      clname: 'icon',
      component: () => {
        return (<FileLoader form={formData} title='imagenFrontal' />)},
    },
    {
      textB: 'Sube una foto actual en la siguiente postura',
      imgC: espalda,
      textC: '2.Atrás',
      clname: 'icon',
      component: () => {
        return (<FileLoader form={formData} title='imagenAtras' />)},
    },
    {
      textB: 'Sube una foto actual en la siguiente postura:',
      imgC: derecho,
      textC: '3.Perfil derecho',
      clname: 'icon',
      component: () => {
        return (<FileLoader form={formData} title='imagenDerecha' />)},
    },
    {
      textB: 'Sube una foto actual en la siguiente postura',
      imgC: izquierdo,
      textC: '4.Perfil izquierdo',
      clname: 'icon',
      component: () => {
        return (<FileLoader form={formData} title='imagenIzquierda' />)},
    },
    {
      textB: '',
      imgC: peso,
      textC: '¿Cuánto pesas?',
      clname: 'component',
      component: () => {
        return (<label ><input type='number' className='peso' onChange={handleOnChange} placeholder='60' /> Kg </label>)}
    },
    {
      textB: '',
      imgC: ejercicio,
      textC: '¿Con qué frecuencia te ejercitas en la semana?',
      clname: 'component',
      component: () => {
        return (<SlideGeneric title={'ejercicioPorSemana'} marks={{ 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }} max={7} labelA={'Dia'} labelB={'Dias'} />)},
    },
    {
      textB: '',
      imgC: personal,
      textC: '¿Cuando inicias un proyecto personal, lo culminas con éxito?',
      clname: 'component',
      component: () => {
        return (<SlideGeneric title={'proyectoPersonal'} labelA={'Nunca'} labelB={'Siempre'} />)},
    },
    {
      textB: '',
      imgC: disciplina,
      textC: '¿Qué tan disciplinado eres durante la ejecución de un proyecto?',
      clname: 'component',
      component: () => {
        return (<SlideGeneric title={'disciplina'} labelA={'Indisciplinado'} labelB={'Disciplinado'} />)},
    },
    {
      textB: '',
      imgC: agua,
      textC: '¿Cuántos vasos de agua (300ml) tomas al día aproximadamente?',
      clname: 'component',
      component: () => {
        return (<SlideGeneric title={'cantidadAgua'} labelA={'Vaso'} labelB={'Vasos'} />)},
    },
    {
      textB: '',
      imgC: paciencia,
      textC: '¿Qué tan paciente eres ejecutando tus labores diarias?',
      clname: 'component',
      component: () => {
        return (<SlideGeneric title={'paciencia'} labelA={'Impaciente'} labelB={'Paciente'} />)},
    }
  ]

  return (
    <React.Fragment >
      <div className='contain stepper__container'>
        <section className='stepperState__info'>
          <img className='state__info-img' src={logo} alt="logo"/>
          <h2>{array[index].textB}</h2>
          <section className={array[index].clname}>
            <img src={array[index].imgC} />
            <h3>{ array[index].textC }</h3>
          </section>
          {(formData !== '')? array[index].component() : console.log('renderizando')}
        </section>
        <section className='state__buttons'>
          {(index>0) 
            ? <button onClick={() => cambiarEstado(index-1)}>Anterior</button>
            : <Link className='link' to='/'>Anterior</Link>
          }
          {(index !== array.length-1) 
            ? <button onClick={() => cambiarEstado(index+1)}>Siguiente</button>
            : <Link 
                className='link' 
                to={{
                  pathname: '/finishStepper',
                  data: formData,
                }}
                >Siguiente
              </Link>
          }
        </section>
      </div>      
      <Layout index={index+2} />
    </React.Fragment>
  )
}

export default Stepper;
