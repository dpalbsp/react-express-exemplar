/**
 * Created by Tia on 4/2/2017.
 */
import express from "express";
import data from "../src/testData.json";

const router = express.Router();

router.get("/contests", (req, res) => {
    res.send({contests: data.contests});
});

export default router;