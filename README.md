# E-Commerce Website - Backend

## Description

This is the backend of an e-commerce website. It uses Node.js, Express.js, and Sequelize to interact with a MySQL database. The database contains tables for products, categories, tags, and product tags. The API routes are tested in Insomnia Core.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

```
npm i
```

Next, open MySQL and run the following commands:

```
source db/schema.sql
```

```
quit
```

Finally, run the following command to seed the database:

```
npm run seed
```

## Usage

[Untitled_ Aug 27, 2023 9_40 AM.webm](https://github.com/dreamsalotl/E-Commerce-Back-End/assets/130865355/2356e417-45d1-4a46-a3b9-fb12c1533296)

To start the server, run the following command:

```
npm start
```

To test the API routes, use Insomnia Core. The routes are as follows:

- GET all categories, products, or tags

- GET a single category, product, or tag by id

- POST a new category, product, or tag

- PUT a new category, product, or tag by id

- DELETE a category, product, or tag by id

## License

This project is licensed under the MIT license.

## Questions

If you have any questions about the repo, open an issue or contact me directly at <a href="mailto:donovanw.walker@gmail.com">my email</a>. You can find more of my work at <a href="https://github.com/dreamsalotl">my GitHub</a>.

