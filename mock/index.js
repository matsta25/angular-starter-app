const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    todos: [],
    'err-logs': []
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
    data.todos.push({
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      done: faker.random.boolean(),
    })
  }

  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods
