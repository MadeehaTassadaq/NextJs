async function getUsers(id) {
    const res = await fetch(`http://localhost:3000/api/user/${id}`)
    const data = await res.json()
    return data.result
}

export default async function Page({params}){
    const user = await getUsers(params.data)
    console.log(user);
    
    
    return (
        <div>
            <h1>User List</h1>
            <h3>Name :{user.name}</h3>
            <h3>id:{user.id}</h3>
            <h3>email :{user.email}</h3>
        </div>
    )
}