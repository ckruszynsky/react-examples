import React, {Component} from 'react';
import EditableTimerList from './EditableTimerList';
import ToggableTimerForm from './ToggableTimerForm';

class TimersDashboard extends Component {
    render () {
        return (
            <div className="ui three column centered grid">
                <div className="column">
                    <EditableTimerList />
                    <ToggableTimerForm isOpen={false} />
                </div>
            </div>
        )
    }
}

export default TimersDashboard