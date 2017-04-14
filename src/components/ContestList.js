/**
 * Created by Tia on 4/10/2017.
 */
import React from 'react';
import ContestPreview from './contestPreview';

const ContestList = ({contests, onContestClick}) => {
  return (
        <div>
            {contests.map(contest => <ContestPreview
                key={contest.id}
                onClick={onContestClick}
                {...contest} />)}
        </div>
  );
};

export default ContestList;