import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: 'Alice', grade: 85 },
        { id: 2, name: 'Bob', grade: 92 },
        { id: 3, name: 'Charlie', grade: 78 },
      ]
      
    };
  }
renderStudentList() {
  if (this.state.students.length === 0) {
    return(
      <div className="no-students">
        <p>No students available.</p>
      </div>
    )
}
return this.state.students.map(student => (
  <div key={student.id} className="student-card"> 
    <h2>{student.name}</h2>
    <p>Grade: {student.grade}</p>
  </div>
));

}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Student Grade Tracker</h1>
        </header>
        <main>
          {this.renderStudentList()}
        </main>
      </div>
    );
  }

}

export default App;