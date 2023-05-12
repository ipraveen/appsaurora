import { DB_NAME, PREFERENCE_STORE } from '../schemas/preference-schema';
import db from '../db';
import { useEffect, useState } from 'react';
import * as idb from 'idb';

export function useDB() {
    const [dbMap, setDBMap] = useState<Map<string, idb.IDBPDatabase<unknown>>>();

    useEffect(() => {
        const load = async () => {
            const dbMap = await db.openDB();
            setDBMap(dbMap);
        };

        load();
    }, []);

    return dbMap;
}
