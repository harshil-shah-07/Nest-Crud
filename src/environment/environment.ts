export const environment = {
    DATABASE_CONFIG: {
        "type": "mysql",
        "host": "localhost",
        "port": "3306",
        "username": "root",
        "password": "root",
        "database": "nestjs_mysql_crud_app",
        "synchronize": false,
        "logging": true,
        "entities": ["src//*.entity.ts", "dist//*entity.ts"]
    }
}