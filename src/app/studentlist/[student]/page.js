"use client"
export default function student({params}){
     console.log(params)
     return<div>
        <h1>"student details"</h1>
        <h3>Name: {params.student}</h3>
     </div>
}