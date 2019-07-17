'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ListSchema = new Schema({
    title: { type: String },
    img: { type: String },
    content: { type: String },
  });

  return mongoose.model('List', ListSchema);
};
