import React, { Component } from "react";
import StudentItem from "./StudentItem";

class StudentList extends Component {
  render() {
    return (
      <div>
        {this.props.students.length === 0 ? (
          <p>No Students Found</p>
        ) : (
          this.props.students.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              removeStudent={this.props.removeStudent}
              updateGrade={this.props.updateGrade}
            />
          ))
        )}
      </div>
    );
  }
}

export default StudentList;
