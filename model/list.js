'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ListSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },
    title: { type: String },
    img: { type: String },
    content: { type: String },
  }, {
    versionKey: false,
  });

  return mongoose.model('List', ListSchema);
};
