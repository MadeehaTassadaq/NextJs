"use client";
import { useState } from "react";
import link from "next/link";
import {useRouter} from "next/navigation";

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page of my first app.</p>
        <a href="/">Go to Home</a>
        <br/>
        <br/>
        <a href="About/AboutStudent">Go to About Student</a>
        <br/>
        <a href="About/AboutCollege">Go to About College</a>
        <br/>
        
        </div>
    );
    }
    export default About;