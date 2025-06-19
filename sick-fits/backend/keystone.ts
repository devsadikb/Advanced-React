import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost:27017/sadik';
const sessionConfig = {
    MaxAge: 60 * 60 * 24 * 365,
};
export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL,
    },
    lists: createSchema({
        // schemas items will be added here
    }),
    ui: {
        isAccessAllowed: () => true,
    },
});
