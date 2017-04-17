/**
 * Created by Tia on 4/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return(
            <div>
                {this.props.id}
            </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired
};
export default Contest;