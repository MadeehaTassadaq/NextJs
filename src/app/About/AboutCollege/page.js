"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
const AboutCollege = () => {
  const router = useRouter();
  
  return (
    <div >
      <h1>About College</h1>
      <p>This is the about college page of my first app.</p>
        <a href="/About">Go to About Page</a>
        <br/>
        <br/>
        <a href="/About/AboutStudent">Go to About Student</a>
        <br/>
      <button onClick={() => router.push("/About")}>Go to Home page</button>
      <br />
      <button onClick={() => router.push("/login")}>Go to Login page</button>
      <br />
    </div>
  );
};
export default AboutCollege;