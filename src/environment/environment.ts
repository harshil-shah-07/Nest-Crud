import { ConnectionOptions } from "tls";

export const environment = {
    DATABASE_CONFIG: {
        type: "mysql",
        host: "localhost",
        username: "root",
        password: "Bytes@123",
        database: "nest_practice",
        synchronize: false,
        logging: true,
        autoLoadEntities: true,
        autoSchemaSync: true,
        entities: ["src//*.entity{.ts, .js}", "dist//*entity.ts"]
    } as ConnectionOptions
}
