import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';

import { Redirect } from 'react-router-dom';

import Form3 from '../presentation/Form3';

class UserAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      address: '',
      state: '',
      city: '',
      zip: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    componentDidUpdate(prevProps) {
      const {
        id
      } = this.props;
      if (id !== null) {
        this.props.history.push('/');
      }
    }

  onChange(e, key) {
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    this.setState(newState);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.asyncRequest('USER_ADDRESS', this.state);
  }

  render() {
    const {
      address,
      state,
      city,
      zip,
    } = this.state;

    return (
      <div>
        <Form3 onChange={this.onChange} onSubmit={this.onSubmit} {...this.state}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_id: state.users.data.id,
    id: state.userAddress.data.id,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(UserAddress);;
