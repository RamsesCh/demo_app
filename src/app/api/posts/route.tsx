import { NextResponse } from "next/server";

export function GET(){
    try {
        return NextResponse.json({
            data: 'success posts'
        })
    } catch (error) {
        console.log(error)
    }
}