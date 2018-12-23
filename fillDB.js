var casual = require('casual');

module.exports = () => {
  const data = { posts: [] };
  //create 25 posts
  for (let i = 0; i < 25; i++) {
    data.posts.push({
      id: i,
      title: casual.title,
      content: casual.sentences(50),
      author: casual.name
    })
  }
  return data
};