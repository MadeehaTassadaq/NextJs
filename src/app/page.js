"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
 const [name,setname]=useState("madeeha")
  const apple = () => {
  setname("Tassadaq") 
  };
  const innercomponent=()=>{
    return <h1>Hello World</h1>
  }

  return (
    <main className={styles.main}>
      <h1>Events, Functions and state{name} </h1>
      <button onClick={apple}>click me</button>
     {innercomponent()}
      
    </main>
  );
}
