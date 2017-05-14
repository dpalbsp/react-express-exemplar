/**
 * Created by Tia on 4/2/2017. This has the api methods
 */
import express from 'express';
import MongoClient from 'mongodb';
import assert from 'assert';
import config from '../config';
// import data from '../src/testData.json';

let mdb = null;

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();
// const contests = data.contests.reduce((obj, contest) => {
//   obj[contest.id] = contest;
//   return obj;
// }, {});
router.get('/contests', (req, res) => {
  // res.send({contests: contests});
  let contests = {};
  mdb.collection('contests').find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((err, contest) => {
      assert.equal(null, err);
      if (!contest) {
        res.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});

router.get('/contests/:contestId', (req, res) => {
  // let currentContest = contests[req.params.contestId];
  // currentContest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis, ex molestias perferendis rem quasi vitae ad et illum eos officia praesentium alias veniam harum aliquam ipsa ducimus voluptate iure!ipsum';
  // res.send(currentContest);
  mdb.collection('contests')
    .findOne({ id: Number(req.params.contestId) })
    .then((contest) => {
      res.send(contest);
    })
    .catch(console.error);
});

router.get('/names/:nameIds', (req, res) => {
  const nameIds = req.params.nameIds.split(',').map(Number);
  let names = {};
  mdb.collection('names').find({ id: {$in: nameIds}})
    .each((err, name) => {
      assert.equal(null, err);
      if (!name) {
        res.send({ names });
        return;
      }
      names[name.id] = name;
    });
});

export default router;
