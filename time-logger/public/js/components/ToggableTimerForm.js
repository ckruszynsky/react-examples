import React, {Component} from 'react';
import TimerForm from './TimerForm';
import ToggleButton from './ToggleButton';

class ToggableTimerForm extends Component {
    render() {
        if(this.props.isOpen){
            return( <TimerForm />)
        }
        else{
            <ToggleButton />
        }
    }
}

export default ToggableTimerForm;