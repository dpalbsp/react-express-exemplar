/**
 * Created by Tia on 4/6/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    headerMessage: 'Message Component with State',
    contests: this.props.initialContests
  };
  fetchContest = (contestId) => {
    pushState(
        {originalContestId: contestId},
        `/contest/${contestId}`
    );
    this.setState({
      headerMessage: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };
  currentContent = () => {
    if (this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]}/>;
    }
    return <ContestList contests={this.state.contests} onContestClick={this.fetchContest} />;
  };
  componentDidMount() {

  }
  render() {
    return (
            <div style={{textAlign: 'center'}}>
                <Header message={this.state.headerMessage}/>
                {this.currentContent()}
            </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object
};

export default App;