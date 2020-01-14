import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td><Button variant="success" href={"/edit/" + props.exercise._id}>Edit</Button></td>
    <td><Button variant="warning" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</Button></td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props){
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {
      exercise: []
    }
  }

  deleteExercise(id){
    axios.delete('http://localhost:5000/exercises/' + id)
      .then( res => console.log(res.data))
      .catch(error => {console.log(error)});
    
    this.setState({
      exercise: this.state.exercise.filter(exercise => exercise._id !== id)
    });
  }

  componentDidMount(){
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        if(res.data.length > 0){
          this.setState({
            exercise: res.data
          })
        }
      })
      .catch(error => {console.log(error)})
  }

  exercisesList(){
    return this.state.exercise.map(currentExercise => {
      return <Exercise exercise={currentExercise} 
        deleteExercise={this.deleteExercise} 
        key={currentExercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Username</th>
      <th>Description</th>
      <th>Duration</th>
      <th>Date</th>
      <th>Edit Exercise</th>
      <th>Delete Exercise</th>
    </tr>
  </thead>
  <tbody>
    {this.exercisesList()}
  </tbody>
</Table>
      </div>
    )
  }
}