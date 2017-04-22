/**
 * Created by Tia on 4/19/2017.
 */
import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
        .then(resp => resp.data);
};
