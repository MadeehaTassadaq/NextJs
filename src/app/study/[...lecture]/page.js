'use client'
export default function lecture({params}){
    console.log(params)
    return <div>
        <h1>{params.lecture[0]}</h1>
        <br/><br/>
        <h3>{params.lecture[1]}</h3>
    </div>
}