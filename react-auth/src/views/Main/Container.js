import React, { PropTypes as T } from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from './styles.module.css';

class Container extends Component {
    render() {
        let children = null;
        if(this.props.children){
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth
            })
        }
        
        return (
            <Jumbotron>
                <h2 className={}
            </Jumbotron>
        );
    }
}

export default Container;