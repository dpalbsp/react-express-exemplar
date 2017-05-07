/**
 * Created by Tia on 4/6/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends Component {
  handleClick = () => {
    this.props.onClick(this.props.id);
    // console.log(this.props.contestName);
  };
  render(){
    return (
          <div className="link ContestPreview" onClick={ this.handleClick }>
              <div className="category-name">
                  {this.props.categoryName}
              </div>
              <div className="contest-name">
                  {this.props.contestName}
              </div>
          </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number,
  categoryName: PropTypes.string,
  contestName: PropTypes.string,
  onClick: PropTypes.func
};

export default ContestPreview;
