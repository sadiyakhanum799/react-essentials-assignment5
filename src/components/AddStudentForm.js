import React, { Component } from "react";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      grade: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, grade } = this.state;

    if (!name || grade === "") {
      alert("All fields are required!");
      return;
    }

    if (grade < 0 || grade > 100) {
      alert("Grade must be between 0 and 100");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      grade: parseInt(grade)
    };

    this.props.addStudent(newStudent);

    this.setState({ name: "", grade: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type="number"
          name="grade"
          placeholder="Grade"
          value={this.state.grade}
          onChange={this.handleChange}
        />

        <button type="submit">Add Student</button>
      </form>
    );
  }
}

export default AddStudentForm;
