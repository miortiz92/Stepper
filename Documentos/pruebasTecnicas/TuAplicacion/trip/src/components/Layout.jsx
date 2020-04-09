import React from 'react';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';

function Layout(props){

  return(
    <React.Fragment>
      <section className='progressBar' style={{ width: 700 }}>
        <ReactBootstrapStyle />
        <ProgressBar animated now={(100/12)*(props.index)} /> 
      </section>
    </React.Fragment>
     
  )
}

export default Layout;