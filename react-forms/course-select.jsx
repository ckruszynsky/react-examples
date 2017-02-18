import React, { PropTypes } from 'react';

module.exports = React.createClass({
  propTypes: {
    department: PropTypes.string,
    course: PropTypes.string,
    onChange: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
       department: null,
       course: null,
       courses: [],
       _loading:false
    };
  },

  componentWillReceiveProps(update) {
    this.setState({
        department: update.department,
        course: update.course
    });
  },
 
  onSelectDepartment(evt) {
      const department = evt.target.value;
      const course = null;
      this.setState({ department, course });
      this.props.onChange({ name : 'department', value: department });
      this.props.onChange({ name: 'course', value : course });

      if(department) this.fetch(department);
  },

  fetch(department){
      this.setState({ _loading : true, courses: [] });
      
      apiClient(department).then((courses) => {
          this.setState({ _loading: false, courses: courses });
      })
  },

  render() {
    return (
      <div>
         { this.renderDepartmentSelect() }
         <br />
         { this.renderCourseSelect() }
      </div>
    );
  },
});
