import mysql from "mysql2/promise";

export const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spoticfy",
});
