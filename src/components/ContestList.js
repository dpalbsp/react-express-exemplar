/**
 * Created by Tia on 4/10/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './contestPreview';

const ContestList = ({contests, onContestClick}) => {
  return (
    <div className="ContestList">
      {Object.keys(contests).map(contestId => <ContestPreview
        key={contestId}
        onClick={onContestClick}
        {...contests[contestId]} />)}
    </div>
  );
};

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
