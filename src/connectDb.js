import mysql from "mysql2"
import  { creds } from "./creds.js"

export const db = mysql.createConnection(creds);
