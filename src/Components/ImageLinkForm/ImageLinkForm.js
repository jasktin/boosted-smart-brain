import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <section>
            <p className='f4 white'>
                {'This app will magically detect face in your picture'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>    
                    <input className='f4 pa2 w-70 center cursor' type='text' onChange={onInputChange} ></input>
                    <button 
                        className='w-30 grow f4 link ph2 pv2 center db white bg-light-blue' 
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </section>
    )
}

export default ImageLinkForm;