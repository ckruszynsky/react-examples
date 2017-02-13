import React, {Component} from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
    render() {
        return (
            <div id="timers">
                <EditableTimer 
                    title='Learn React'
                    project='Web Domination'
                    elapsed="89686300"
                    runningSince={null}
                    editFormOpen={false}
                />                
                <EditableTimer 
                    title="Learn extreme ironing"
                    project="World Domination"
                    elapsed="3890985"
                    runningSince={null}
                    editFormOpen={false}
                />                
            </div>
        );
    }
}

export default EditableTimerList;