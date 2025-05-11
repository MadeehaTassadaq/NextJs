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
      {product.map((item) => (
        <h4 key={item.id}> post:{item.title} </h4> 
      ))}
  </div>
  )
}