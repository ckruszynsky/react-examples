import React, {Component} from 'react';

class ToggleButton extends Component {
    render() {
        return (
            <div className="ui basic content center aligned segment">
                <button className="ui basic button icon">
                    <i className="plus icon"></i>
                </button>
            </div>
        );
    }
}

export default ToggleButton;