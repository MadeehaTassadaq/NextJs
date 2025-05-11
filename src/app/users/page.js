import getUsers from "../../../services/getuser"
import Link from "next/link";

export default async function Page(){
    const users=await getUsers()
    console.log(users);
    
    
    return(<div>
        <h1>User List</h1>
        {users.map((user)=>(
        <h2 key={user.id}><Link href={`/users/${user.id}`}>{user.firstName}</Link></h2>)
    )}
        
    </div>)
}