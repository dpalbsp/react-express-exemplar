/**
 * Created by Tia on 4/2/2017.
 */
import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});
router.get('/contests', (req, res) => {
  res.send({contests: contests});
});

router.get('/contests/:contestId', (req, res) => {
  let currentContest = contests[req.params.contestId];
  currentContest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis, ex molestias perferendis rem quasi vitae ad et illum eos officia praesentium alias veniam harum aliquam ipsa ducimus voluptate iure!ipsum';
  res.send(currentContest);
});
export default router;