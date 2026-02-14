import React, { Component } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      filter: "ALL"
    };
  }

  componentDidMount() {
    console.log("App Mounted");

    // Sample Data
    const sampleStudents = [
      { id: 1, name: "Ayesha", grade: 85 },
      { id: 2, name: "Rahul", grade: 45 },
      { id: 3, name: "Zara", grade: 72 }
    ];

    this.setState({ students: sampleStudents });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.students !== this.state.students) {
      console.log("Student list updated!");
    }
  }

  componentWillUnmount() {
    console.log("App Unmounted");
  }

  addStudent = (student) => {
    this.setState({
      students: [...this.state.students, student]
    });
  };

  removeStudent = (id) => {
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== id
      )
    });
  };

  updateGrade = (id, newGrade) => {
    if (newGrade < 0 || newGrade > 100) {
      alert("Grade must be between 0 and 100");
      return;
    }

    this.setState({
      students: this.state.students.map((student) =>
        student.id === id
          ? { ...student, grade: newGrade }
          : student
      )
    });
  };

  setFilter = (filterType) => {
    this.setState({ filter: filterType });
  };

  sortByGrade = () => {
    const sorted = [...this.state.students].sort(
      (a, b) => b.grade - a.grade
    );
    this.setState({ students: sorted });
  };

  getFilteredStudents = () => {
    const { students, filter } = this.state;

    if (filter === "PASSED") {
      return students.filter((s) => s.grade >= 50);
    } else if (filter === "FAILED") {
      return students.filter((s) => s.grade < 50);
    }

    return students;
  };

  render() {
    return (
      <div className="container">
        <h1>🎓 Student Grade Tracker</h1>

        <AddStudentForm addStudent={this.addStudent} />

        <div className="controls">
          <button onClick={() => this.setFilter("ALL")}>All</button>
          <button onClick={() => this.setFilter("PASSED")}>Passed</button>
          <button onClick={() => this.setFilter("FAILED")}>Failed</button>
          <button onClick={this.sortByGrade}>Sort by Grade</button>
        </div>

        <StudentList
          students={this.getFilteredStudents()}
          removeStudent={this.removeStudent}
          updateGrade={this.updateGrade}
        />
      </div>
    );
  }
}

export default App;
