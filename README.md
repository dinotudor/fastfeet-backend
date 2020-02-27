# REST API - Fastfeet

## Rocketseat graduation project

### Rest API using express with basic CRUD operations to serve the frontend (desktop and mobile) application.

**Basic Description:**
\_Admin User can manage list of reciepients that contain addresses to deliver products. Only Admin user can login onto the system to manage the client list, adding, editing, displaying and deleting the recipients as the service demands it. Using MVC (Model, View and Controller architecture

#### Development dependencies and plugins:

- Sucrase _ES6 syntax_, `import` modules and `export default`
- Nodemon - _Live server_ to run local developmet
- Eslint - _Air Bnb style guide_
- Prettier
- bcryptjs - _Password encryptation_
- jsonwebtoken - _Barer token Authentication_
- sequelize _ORM_
- sequelize-cli _Build and run Migrations, seeds and more_
- Yup _Schema validation_

#### Scripts:

- `yarn dev` - start local server
- `yarn dev:debug` - start debbuging

### Routes and end points

- **Login**

  - _Migration: ...-create-users.js_
  - _SessionController.js_
  - _Model: User_
  - _Seed: ...-admin-user.js_
  - _route:_
    - method: _POST_ - `/session` - login

- **Recipients**
  - _Migration: ...-create-recipients.js_
  - _RecipientsController.js_
  - _Model: Recipients_
  - _routes:_
    - method: _GET_ - `/recipients` - list all recipients
    - method: _POST_ - `/recipients` - create new recipient
    - method: _PUT_ - `/recipients/:id` - edit recipient
    - method: _DELETE_ - `/recipients/:id` - delete recipient
