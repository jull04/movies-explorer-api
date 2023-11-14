const SECRET_KEY = process.env.NODE_ENV === 'production' ? process.env.SECRET_KEY : 'secret-key';
const DB_URL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = { SECRET_KEY, DB_URL };
