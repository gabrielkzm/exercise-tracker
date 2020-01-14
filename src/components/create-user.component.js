import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };
    axios.post('http://localhost:5000/users/add', user)
      .then(res => {console.log(res.data)})
      .catch(error => {console.log(error)});
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control required type="text" placeholder="Enter your username" value={this.state.username} onChange={this.onChangeUsername} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create User
          </Button>
        </Form>
      </div>
    )
  }
}