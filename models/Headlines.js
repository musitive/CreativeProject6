var mongoose = require('mongoose');
var HeadlineSchema = new mongoose.Schema({
  title: String,
  upvotes: {type: Number, default: 0},
  image: String,
  description: String,
});
HeadlineSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};
HeadlineSchema.methods.downvote = function(cb) {
    this.upvotes -= 1;
    this.save(cb);
};
mongoose.model('Headline', HeadlineSchema);