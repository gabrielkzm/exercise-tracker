import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default class EditExercise extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),         
        })
      })
      .catch(error=> {
        console.log(error)
      });
      
      axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({ users: response.data.map(user => user.username) });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e){
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e){
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(e){
    this.setState({
      date: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      });
    
      window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control as="select" value={this.state.username} onChange={this.onChangeUsername}>
              {
                this.state.users.map((user) => {
                  return <option key={user} value={user}>{user}</option>
                })
              }
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control required type="text" placeholder="Enter your description" value={this.state.description} onChange={this.onChangeDescription}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration (minutes):</Form.Label>
            <Form.Control required type="text" placeholder="Enter Duration" value={this.state.duration} onChange={this.onChangeDuration}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control required type="date" placeholder="Enter Date" value={this.state.date} onChange={this.onChangeDate}/>
          </Form.Group>
          <Button variant="success" type="submit">Update Exercise Log</Button>
          &nbsp;
          <Button href='/' variant="secondary">Back</Button>
        </Form>
      </div>
    )
  }
}