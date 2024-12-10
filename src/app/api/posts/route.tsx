import { NextResponse } from "next/server";

const api_url = 'https://jsonplaceholder.typicode.com/posts'

export async function GET(){
    try {
        const res = await fetch(api_url);
        if(!res.ok) throw new Error('fetch error');

        const posts = await res.json();

        return NextResponse.json({
            data: posts
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: 'Request error'}, {status:500})
    }
}