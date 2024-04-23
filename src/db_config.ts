import  {MongoClient} from "mongodb"
import  {DEV_CONN_STRX,CONN_STRX,ENV_TYPE} from "./config.js"

if (DEV_CONN_STRX == undefined || CONN_STRX == undefined){
    throw new Error("Connection string is not defined")
}
const uri = ENV_TYPE == "Development" ? DEV_CONN_STRX : CONN_STRX

const client = new MongoClient(uri)



export const connectDB = async () =>{
    try{
        await client.connect()
    }catch (err: any) {
        console.error(err.message);
        throw(err)
    }
}

export const getDB =  (dbName:string)=>{
    return client.db(dbName)
  }

