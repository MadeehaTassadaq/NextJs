import Link from "next/link"

async function userList() {
    try {
        const response = await fetch("http://localhost:3000/api/users", { cache: 'no-store' })
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error fetching users:", error)
        return []
    }
}

export default async function Page() {
    const users = await userList()
    console.log("Users data:", users)
    
    return (
        <div>
            <h1>User Name List</h1>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                users.map((item) => (
                    <div key={item.id}>
                        <Link href={`/user/${item.id}`}>
                            Name: {item.name} Id: {item.id}
                        </Link>
                    </div>
                ))
            )}
        </div>
    )
}