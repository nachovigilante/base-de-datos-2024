import mysql from "mysql2/promise";

export const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "spoticfy"
});
