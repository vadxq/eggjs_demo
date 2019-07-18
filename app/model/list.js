'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ListSchema = new Schema({
    title: { type: String },
    publishedAt: { type: Date, default: new Date() },
    content: { type: String },
    updateAt: { type: Date, default: new Date() },
    del: { type: Boolean, default: false },
    id: {
      type: Schema.Types.ObjectId,
    },
  });

  ListSchema.pre('save', function newDate(next) { // 不支持箭头函数
    if (this.isNew) {
      this.publishedAt = this.updateAt = Date.now();
    } else {
      this.updateAt = Date.now();
    }
    next();
  });

  ListSchema.pre('update', function updateTime() {
    this.updateAt = Date.now();
  });

  return mongoose.model('List', ListSchema);
};
