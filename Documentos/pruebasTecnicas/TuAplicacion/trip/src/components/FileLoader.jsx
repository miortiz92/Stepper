import React, {useCallback, useState, useEffect} from 'react';
import {useDropzone} from 'react-dropzone'
import upload from '../assets/static/subir.png'
 

function FileLoader(props) {
  
    let [name, setName] = useState('example.png');
  const onDrop = useCallback((acceptedFiles) => {
    setName(acceptedFiles[0].name);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
 
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        if(props.form.get(props.title) !== null){
          console.log(props.title)
          props.form.delete(props.title);
        }
        const binaryStr = reader.result
        var blob = new Blob( [ binaryStr ], { type: "image/jpeg" } );
        props.form.append(props.title, blob);
      }
      reader.readAsArrayBuffer(file)
    })    
  }, [props])

  useEffect(() => {
    setName('example.png')
  }, [props]);
  
  const {getRootProps, getInputProps } = useDropzone({onDrop})
 
  return (
    <div className='fileLoader' {...getRootProps()}>
      <input {...getInputProps()} />
      <p className = 'fileLoader__drag'><img className='fileLoader__drag-img' src={upload} alt="subir"/> Subir foto</p>
      <p>{name}</p>
    </div>
  )
}
export default FileLoader;

