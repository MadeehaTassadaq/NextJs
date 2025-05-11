import { User } from "@/util/db"
import { NextResponse } from "next/server"

export function GET(request,{params}){
    const data=User.filter((item)=>item.id==params.id)
    return NextResponse.json(data.length==0?{result:"No Result Found",success:false}:{result:data[0],success:true},
        {status:200})
}