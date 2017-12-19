import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actions';

import { Redirect } from 'react-router-dom';

import Form2 from '../presentation/Form2';

class UserInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      first_name: '',
      last_name: '',
      phone_number: ''
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
    this.props.asyncRequest('USER_INFO', this.state);
  }

  render() {
    const {
      first_name,
      last_name,
      phone_number,
    } = this.state;

    const {
      id
    } = this.props;

    if (id !== null) {
      return <Redirect to='/user_address'/>
    }

    return (
      <div>
        <Form2 onChange={this.onChange} onSubmit={this.onSubmit} {...this.state}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_id: state.users.data.id,
    id: state.userInfo.data.id,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(UserInformation);;
