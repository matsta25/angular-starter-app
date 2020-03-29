## Mock Api {docsify-ignore}

##### Description

To mock api [json-server](https://github.com/typicode/json-server) has been used,
also [faker](https://github.com/Marak/faker.js) to seed fake data. 
To get more faker methods checkout [api-methods](https://github.com/Marak/faker.js#api-methods)

##### Usage
 
```bash
npm run mock
```

Then mock will be server on http://localhost:3000/posts.

##### Add endpoint

Added new `/books` endpoint example:

**`mock/index.js`**
```javascript
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
``` 

Then after rerun ```npm run mock``` new endpoint is available on http://localhost:3000/books.
