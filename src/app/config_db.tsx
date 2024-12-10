import { connect, connection } from "mongoose";

const uri_db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.6ypks.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

let isConnected: boolean | number = false;

export async function dbConnection() {
    if(isConnected) return;

    const db = await connect(uri_db);
    isConnected = db.connections[0].readyState;
}

connection.on("error", (err)=>{
    console.log("error en conexion a db", err)
})