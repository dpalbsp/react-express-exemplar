/**
 * Created by Tia on 4/16/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.newNameInput.value);
    this.props.addName(this.newNameInput.value, this.props._id);
    this.newNameInput.value = '';
  }
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }
  render() {
    return(
      <div className='Contest'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Contest Description</h3>
          </div>
          <div className='panel-body'>
            <div className='contest-description'>
              {this.props.description}
            </div>
          </div>
        </div>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Proposed Names</h3>
          </div>
          <div className='panel-body'>
            <ul className='list-group'>
              {
                this.props.nameIds.map(nameId =>
                  <li key={nameId} className='list-group-item'>
                    {this.props.lookupName(nameId).name}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className='panel panel-info'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Propose a New Name</h3>
          </div>
          <div className='panel-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='input-group'>
                <input type='text'
                  placeholder='New Name Here...'
                  ref={(input) => this.newNameInput = input}
                  className='form-control' required />
                <span className='input-group-btn'>
                  <button type='submit' className='btn btn-info'>
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className='home-link link'
          onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  fetchNames: PropTypes.func.isRequired,
  lookupName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired
};

export default Contest;
