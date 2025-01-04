import { DB_NAME, PREFERENCE_STORE } from '../schemas/preference-schema';
import { TXN_WRITE } from '../db';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { useDB } from './useDb';
import * as idb from 'idb';

export function usePreferenceStorage<T>(key: string, defaultValue?: T) {
    const [db, setDb] = useState<idb.IDBPDatabase<unknown>>();
    const dbMap = useDB();
    const [value, setValue] = useState<T>();

    const setStorageValue = async (value: T) => {
        if (db) {
            await db.put(PREFERENCE_STORE, { id: key, data: value });

            // Fetching back from DB to keep it in sync.
            const newValue = await db.get(PREFERENCE_STORE, key);
            setValue(newValue.data);
        }
    };

    useEffect(() => {
        if (defaultValue) {
            setStorageValue(defaultValue);
        }
    }, []);

    useEffect(() => {
        if (dbMap && dbMap.has(DB_NAME)) {
            setDb(dbMap.get(DB_NAME));
        }
    }, [dbMap]);

    useEffect(() => {
        const load = async () => {
            if (!db) return;

            const value = await db.get(PREFERENCE_STORE, key);
            setValue(value?.data);
        };
        load();
    }, [db]);

    return [value, setStorageValue];
}
