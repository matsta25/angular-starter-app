const faker = require('faker');

module.exports = () => {
  const data = {
    posts: [],
    todos: [],
    users: {
      data: [],
      totalCount: null
    },
    'err-logs': []
  };

  for (let i = 0; i < 10; i++) {
    data.posts.push({
      userId: faker.random.uuid(),
      id: faker.random.uuid(),
      date: faker.date.past(),
      title: faker.name.title(),
      body: faker.lorem.paragraph(100)
    })
  }

  for (let i = 0; i < 10; i++) {
    data.todos.push({
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      done: faker.random.boolean(),
    })
  }

  data.users.totalCount = 10;
  for (let i = 0; i < data.users.totalCount; i++) {
    data.users.data.push({
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    })
  }

  return data
};

// api methods: https://github.com/Marak/faker.js#api-methods
