const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.hasMany(Blog, {
  foreignKey: 'user_id'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'cascade',
  hooks:true
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks:true
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'cascade',
  hooks:true
});

module.exports = { User, Blog, Comment };
