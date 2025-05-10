'use client'
 
import { useState, useEffect } from 'react'
import Link from "next/link"
 
export default function Product() {
  const [product, setProduct] = useState([])
 
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/posts')
      const data = await res.json()
      console.log(data)
      setProduct(data.posts)
    }
    fetchProducts()
  }, [])
 
  return (
    <div>
      <h1>Post list</h1>
    <Link href="/">Go to Home page</Link>
    <ul>
      {data.map((item) => (
        <h4>post:{item.title} </h4> 
      ))}
    </ul>
    </div>
  )
}