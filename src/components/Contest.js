/**
 * Created by Tia on 4/16/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  render() {
    return(
            <div>
                {this.props.description}
            </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired
};
export default Contest;