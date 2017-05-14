/**
 * Created by Tia on 4/6/2017. This is the top level Component
 */
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
  static propTypes = {initialData: PropTypes.object.isRequired};
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
  }
  fetchContest = (contestId) => {
    pushState(
        {currentContestId: contestId},
        `/contest/${contestId}`
    );
    api.fetchContest(contestId)
      .then(contest => {
        this.setState({
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest
          }
        });
      });
  };
  fetchContestList = () => {
    pushState(
        {currentContestId: null},
        '/'
    );
    api.fetchContestList()
      .then(contests => {
        this.setState({
          currentContestId: null,
          contests
        });
      });
  };
  fetchNames = (nameIds) => {
    api.fetchNames(nameIds)
      .then(names => {
        this.setState({
          names
        });
      });
  }
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]){
      return {name: '...'};
    }
    return this.state.names[nameId];
  }
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  }
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
              contestListClick={this.fetchContestList}
              fetchNames={this.fetchNames}
              lookupName={this.lookupName}
              {...this.currentContest()}/>;
    }
    return <ContestList contests={this.state.contests} onContestClick={this.fetchContest} />;
  }
  render() {
    return (
      <div>
          <Header message={this.pageHeader()}/>
          {this.currentContent()}
      </div>
    );
  }
}

export default App;
