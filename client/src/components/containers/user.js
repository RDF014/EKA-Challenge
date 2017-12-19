import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';

import Form1 from '../presentation/Form1';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, key) {
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submit', this.state)
    this.props.asyncRequest('USER', this.state);
  }

  render() {
    const {
      username,
      password,
      email,
    } = this.state;
    return (
      <div>
        <Form1 onChange={this.onChange} onSubmit={this.onSubmit} {...this.state}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(User);;
