import { NextResponse } from "next/server";
import { dbConnection } from "../../config_db";
import Photo from "../models/Photo";

export async function GET(){
    try {
        await dbConnection();
        const photos = await Photo.find();
        return NextResponse.json(
            { data: photos},
            { status: 200 }
        )      
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        )
    }
}