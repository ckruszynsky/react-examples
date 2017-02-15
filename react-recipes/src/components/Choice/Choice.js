import React from 'react';

const Choice = (props) => {
    let cssClasses = [];
    if(props.active){
        cssClasses.push('active');
    }

    return (
        <div className={cssClasses}
             onClick={props.onClick} >
            {props.label}
        </div>
    );
};

export default Choice;