async function userList(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/users/${id}`, { cache: 'no-store' })
        const data = await response.json()
        return data.result
    } catch (error) {
        console.error("Error fetching users:", error)
        return []
    }
}

export default async function Page({params}){
    console.log(params)
    const user=await userList(params.userid)
    return(
        <div>
            <h1>User Detail</h1>
            <h2>user Name:{user.name}</h2>
            <h2>user Age:{user.age}</h2>
            <h2>user ID:{user.id}</h2>
            <h2>user Email:{user.email}</h2> 
        </div>
    )
}