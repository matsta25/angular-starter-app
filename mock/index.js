const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    books: []
  };

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      userId: faker.random.uuid(),
      id: faker.random.uuid(),
      title: faker.name.title(),
      body: faker.lorem.paragraph()
    })
  }

  for (let i = 0; i < 10; i++) {
    data.books.push({
      id: i,
      title: faker.name.title()
    })
  }

  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods
