import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import Slider from 'rc-slider';

const Slide = (props) => {

    const handle = (e) => {

        if(props.form.get(props.title) !== null){
            props.form.delete(props.title);
        }
        const { value, dragging, index, ...restProps } = e;
        props.form.append(props.title, value);
    };

    const wrapperStyle = { width: 400, margin: 30 };
    return (
        <div>
            <div style={wrapperStyle}>
                <Slider 
                    dotStyle={{ borderColor: 'blue' }} activeDotStyle={{ borderColor: 'blue' }}
                    min={0} 
                    max={props.max} 
                    defaultValue={4} 
                    marks={props.marks} 
                    step={null} 
                    handle={handle} 
                    trackStyle={{ backgroundColor: 'blue', height: 5 }}
                />
                <section className='labelsRange'>
                    <p><strong>{props.labelA}</strong></p>
                    <p><strong>{props.labelB}</strong></p>
                </section>
            </div>
        </div>
    );
}

export default Slide;
