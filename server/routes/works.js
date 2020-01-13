const express = require("express");
const {
  Work,
  validate
} = require('../models/works');
const router = express.Router();


// Get All
router.get("/", async (req, res) => {
  // throw new Error('Could not get the genres.')
  const works = await Work.find().sort("name");
  res.send(works);
});

// POST
router.post("/", async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const work = new Work({
    name: req.body.name
  });

  await work.save();
  res.send(work);
});


module.exports = router;