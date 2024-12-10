import { NextResponse } from "next/server";
import { dbConnection } from "../../config_db";
import Photo from "../models/Photo";

export async function GET(){
    try {
        await dbConnection();
        const photos = await Photo.find();
        return NextResponse.json({
            data: photos
        })      
    } catch (err: any) {
        return NextResponse.json(err.message, {
            status: 500,
        })
    }
}