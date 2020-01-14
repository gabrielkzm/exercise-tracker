import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:5000/users/')
      .then(res => {
        if(res.data.length > 0){
          this.setState({
            users: res.data.map(user => user.username),
            username: res.data[0].username
          })
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => {console.log(res.data)})
      .catch(error => {console.log(error)});

    this.setState({
      username: ''
    })

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
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
          <Button variant="primary" type="submit">
            Create Exercise Log
          </Button>
        </Form>
      </div>
    )
  }
}