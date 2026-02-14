import React, { Component } from "react";

class StudentItem extends Component {
  handleGradeChange = (e) => {
    const newGrade = parseInt(e.target.value);
    this.props.updateGrade(this.props.student.id, newGrade);
  };

  render() {
    const { student, removeStudent } = this.props;
    const isPassed = student.grade >= 50;

    return (
      <div
        className={`student-card ${
          isPassed ? "passed" : "failed"
        }`}
      >
        <h3>{student.name}</h3>
        <p>Grade: {student.grade}</p>
        <p>Status: {isPassed ? "Passed" : "Failed"}</p>

        <input
          type="number"
          min="0"
          max="100"
          onChange={this.handleGradeChange}
          placeholder="Update Grade"
        />

        <button onClick={() => removeStudent(student.id)}>
          Remove
        </button>
      </div>
    );
  }
}

export default StudentItem;
