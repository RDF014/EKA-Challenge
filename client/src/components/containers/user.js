import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';

import { Redirect, withRouter } from 'react-router-dom';

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

  componentDidUpdate(prevProps) {
    const {
      users: { data: { id } }
    } = this.props;
    if (id !== null) {
      this.props.history.push('/user_information');
      // return <Redirect to='/user_information'/>
    }
  }

  onChange(e, key) {
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.asyncRequest('USER', this.state);
  }

  render() {
    const {
      username,
      password,
      email,
    } = this.state;

    const {
      users: { data: { id } }
    } = this.props;

    // if (id !== null) {
    //   console.log(this.props.history);
    //   this.props.history.push('/user_information');
    //   // return <Redirect to='/user_information'/>
    // }
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
