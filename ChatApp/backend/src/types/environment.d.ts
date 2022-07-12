export {}
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: 'test' | 'dev' | 'prod';
            API_PORT?: string;
            PORT?: string;
            MONGO_URI: string;
        }
    }
}

