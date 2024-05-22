import {getDB} from "@/db_config"

interface product{
    find:()=>Promise<any>
    insertOne:(product:any)=>Promise<any>
    updateOne:(product:any)=>Promise<any>
    deleteOne:(product:any)=>Promise<any>

}

const Product  =  getDB("ims").collection("products")

export default Product