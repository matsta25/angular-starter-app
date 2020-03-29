const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    err: []
  };

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      userId: faker.random.uuid(),
      id: faker.random.uuid(),
      title: faker.name.title(),
      body: faker.lorem.paragraph()
    })
  }

  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods
