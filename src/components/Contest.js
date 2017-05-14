/**
 * Created by Tia on 4/16/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
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

        <div className='home-link link'
          onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  fetchNames: PropTypes.func.isRequired,
  lookupName: PropTypes.func.isRequired
};
export default Contest;
