"use client";
import {useRouter} from "next/navigation";  

const loginStudent = () => {
    const Router=useRouter();
    return (
        <div>
        <h1 className=" heading" >Login Page for Student</h1>
        <button onClick={() => Router.push("/login")}>Go to Login Page</button>
        <br/>
        </div>
    );
    }

export default loginStudent;