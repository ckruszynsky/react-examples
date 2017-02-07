

// class EmployeeInfo extends Component {
//     render() {
//         return (
//             <div>
//                Employee ID: <input type="text" value={this.props.data.EmployeeId} onChange={this.props.onChange} />
//             </div>
//         );
//     }
// }

import React from 'react';

const EmployeeInfo = (props) => {
    return (
        <div>
            Employee ID: <input name="EmployeeInfo_EmployeeId" type="text" value={props.data.EmployeeId} onChange={props.onChange} />
        </div>
    );
};

export default EmployeeInfo;
