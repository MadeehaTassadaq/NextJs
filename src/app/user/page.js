async function userList(){
    let  data=await fetch ("https://dummyjson.com/users")
    data=await data.json()
    return data.users
}

export default async function Page(){
    let users=await userList()
    console.log(users)
    
    return(
        <div>
            <h1>
                User Name List
            </h1>
            
                {users.map((item)=>
                    <div key={item.id}>
                    <h2>firstName:{item.firstName}</h2><h2>lastname:{item.lastName}</h2>
                    
                </div>
            )}
           
        </div>
    )
}