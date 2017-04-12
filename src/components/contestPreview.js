/**
 * Created by Tia on 4/6/2017.
 */
import React, {Component} from 'react';

class ContestPreview extends Component {
  handleClick = () => {
    console.log(this.props.contestName);
  };
  render(){
    return (
          <div className="Link ContestPreview" onClick={ this.handleClick }>
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
export default ContestPreview;