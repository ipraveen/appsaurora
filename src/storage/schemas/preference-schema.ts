import type { DBSchema } from './types';

export const DB_NAME = 'preference-db';
export const PREFERENCE_STORE = 'preference-store';

const schema: DBSchema = {
    version: 1,
    databaseName: DB_NAME,
    stores: [
        {
            name: 'preference-store',
            key: 'id',
        },
    ],
};

export default schema;
