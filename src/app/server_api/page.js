async function product(){
    let data =await fetch("https://dummyjson.com/products")
    let res=await data.json()
    return res.products

}
export default async function Page(){
    let res=await product()
    console.log(res)
    return <div>
        <h1> Product list</h1>
       <ul>{
        res.map((item)=>
            <h4 key={item.id}>title :{item.title} price:{item.price}</h4>
    )}</ul>
    </div>
}