/**
 * Created by Tia on 4/19/2017.
 */
import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
        .then(resp => resp.data);
};

export const fetchContestList = () => {
  return axios.get('/api/contests/')
        .then(resp => resp.data.contests);
};

export const fetchNames = (nameIds) => {
  return axios.get(`/api/names/${nameIds.join(',')}`)
    .then(resp => resp.data.names);
};
