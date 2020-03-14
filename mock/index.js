const faker = require('faker');

module.exports = () => {
  const data = {posts: []};

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      id: faker.random.uuid(),
      title: faker.name.title(),
      paragraph: faker.lorem.paragraph()
    })
  }
  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods




