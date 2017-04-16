/**
 * Created by Tia on 4/10/2017.
 */
import React, {PropTypes} from 'react';

import ContestPreview from './contestPreview';

const ContestList = ({contests, onContestClick}) => {
  return (
        <div>
            {Object.keys(contests).map(contestId => <ContestPreview
                key={contestId}
                onClick={onContestClick}
                {...contests[contestId]} />)}
        </div>
  );
};

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func
};

export default ContestList;