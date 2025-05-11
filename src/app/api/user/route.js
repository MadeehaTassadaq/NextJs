import { user } from "@/app/util/db";
import { NextResponse} from "next/server";

export function GET(){
    const data =user;
    return NextResponse.json(data,{status:200})

}
export async function  POST(request){
    let payload=await request.json()
    console.log(payload)
    if(!payload.name){
     return NextResponse.json({result:"Requested field not found"}  ) 
    }
    return NextResponse.json({result:"Allah O Akbar"})
}