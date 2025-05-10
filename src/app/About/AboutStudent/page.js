"use client";
import React from "react";
import { useRouter } from "next/navigation";
import link from "next/link";
const AboutStudent = () => {
  const router = useRouter();
  
  return (
    <div >
      <h1>About Student</h1>
      <p>This is the about Student page of my first app.</p>
        <a href="/About">Go to About Page</a>
        <br/>
      <button onClick={() => router.push("/About")}>Go to Home page</button>
      <br />
      <button onClick={() => router.push("/login")}>Go to Login page</button>
      <br />
    </div>
  );
};
export default AboutStudent;