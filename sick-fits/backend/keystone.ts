import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
    withItemData,
    statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';

const databaseURL =
    process.env.DATABASE_URL || 'mongodb://localhost:27017/sadik';
const sessionConfig = {
    MaxAge: 60 * 60 * 24 * 365,
    secret: process.env.COOKIE_SECRET || 'a-very-secure-secret',
};
const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
    },
});
export default withAuth(
    config({
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
            User,
            Product,
        }),
        ui: {
            isAccessAllowed: ({ session }) =>
                // Allow access to the UI if the user is signed in
                !!session?.data,
        },
        session: withItemData(statelessSessions(sessionConfig), {
            User: 'id',
        }),
    })
);
