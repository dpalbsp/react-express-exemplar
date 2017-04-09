/**
 * Created by Tia on 4/6/2017.
 */
import React from "react";

const ContestPreview = (contest) => {
  return (
      <div className="ContestPreview">
          <div className="category-name">
              {contest.categoryName}
          </div>
          <div className="contest-name">
            {contest.contestName}
          </div>
      </div>
  )
};

export default ContestPreview;