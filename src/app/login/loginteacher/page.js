"use client";
import { useRouter } from "next/navigation";
import link from "next/link";
const loginTeacher = () => {
    const Router = useRouter();
    return (
        <div>
            <h1 className=" heading">Login Page for Teacher</h1>
            <button onClick={() => Router.push("/login")}>Go to Login Page</button>
            <br />

        </div>
    );
}

export default loginTeacher;