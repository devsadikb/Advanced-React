import 'dotenv/config';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost:27017/sadik';
const sessionConfig = {
    MaxAge: 60 * 60 * 24 * 365,
};
