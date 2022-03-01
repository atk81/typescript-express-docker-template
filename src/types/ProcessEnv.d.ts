declare namespace NodeJS{
    export interface ProcessEnv{
        PORT: string;
        NODE_ENV: string;
        MONGO_URI_PROD: string;
        MONGO_URI_TEST: string;
        MONGO_URI_LOCAL: string;
    }
}