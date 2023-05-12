export interface DBStore {
    name: string;
    key: string;
    config?: {
        autoIncrement?: boolean;
    };
}

export interface DBSchema {
    version: number;
    databaseName: string;
    stores: DBStore[];
}
