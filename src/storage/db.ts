import * as idb from 'idb';

import schemas from './schemas';
export const TXN_WRITE = 'readwrite';

let dbInitDone = false;
let dbMap = new Map<string, idb.IDBPDatabase<unknown>>();
class DB {
    static async openDB() {
        if (dbInitDone) {
            return dbMap;
        }
        for (const schema of schemas) {
            const { databaseName, version, stores } = schema;
            const db = await idb.openDB(databaseName, version, {
                upgrade(db, oldVersion, newVersion) {
                    // TODO: Provide upgrade strategy.
                    if (oldVersion !== 0 && newVersion && newVersion > oldVersion) {
                        stores.forEach((store) => {
                            const { name } = store;
                            db.deleteObjectStore(name);
                        });
                    }
                    stores.forEach((store) => {
                        const { name, key, config = {} } = store;
                        const { autoIncrement } = config;
                        db.createObjectStore(name, { keyPath: key, autoIncrement });
                        console.info(`STORE CREATED: ${name}`);
                    });
                },
            });

            console.info(`DB OPENED: ${databaseName}`);

            dbMap.set(databaseName, db);
        }

        dbInitDone = true;
        return dbMap;
    }
}

export default DB;
