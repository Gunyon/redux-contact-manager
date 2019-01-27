import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInputGroup from '../layout/TextInputGroup';
import { getContact, updateContact } from './../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  static propTypes = {
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.contact !== prevProps.contact) {
      const { name, email, phone } = this.props.contact;
      this.setState({ name, email, phone });
    }
  }

  onSubmit = async e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const updContact = {
      id: this.props.match.params.id,
      name,
      email,
      phone
    };

    await this.props.updateContact(updContact);

    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={this.onChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={this.onChange}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
