const mongoose = require("mongoose");
const Joi = require("joi");

// Schema
const Work = mongoose.model(
  "Work",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255
    }
  })
);


function validateWorks(work) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(work, schema);
}

exports.Work = Work
exports.validate = validateWorks