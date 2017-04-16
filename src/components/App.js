/**
 * Created by Tia on 4/6/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    headerMessage: 'Message Component with State',
    contests: this.props.initialContests
  };
  fetchState = (contestId) => {
    pushState(
        {originalContestId: contestId},
        `/contest/${contestId}`
    );
  };
  componentDidMount() {

  }
  render() {
    return (
            <div style={{textAlign: 'center'}}>
                <Header message={this.state.headerMessage}/>
                <ContestList contests={this.state.contests} onContestClick={this.fetchState} />
            </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object
};

export default App;