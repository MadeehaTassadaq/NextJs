"use client";
import {useRouter} from "next/navigation";
import "./login.css"
import Link from "next/link";
const login=() => {
    const Router=useRouter();
    const navigate =(page)=>{
        Router.push("/login/"+page)
    }
    return (
        <div>
            <h1 className=" heading">Main Login Page</h1>
            <Link href="/">Go to Home page</Link>
            <br/>
            <button onClick={() =>navigate("/loginteacher")}>Go to Teacher login Page</button>
            <br/>
            <br/>
            <button onClick={() => navigate("/loginstudent")}>Go to Student login Page</button>
            <br/>
        </div>
        )
        }
        export default login;