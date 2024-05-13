// Don't store passwords in the files!!!!
// this is just for testing!
const DB_USER = 'root';
const DB_PASSWORD = 'password';
const DB_HOST = 'todo-database';
const DB_PORT = '27017';
const DB_NAME = 'todoapp';

module.exports = {
  mongoURI: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`,
};
