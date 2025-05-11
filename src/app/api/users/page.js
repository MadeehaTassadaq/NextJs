import Link from "next/link";

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/user")
    const data = await res.json()
    return data
}

export default async function Page() {
    const data = await getUsers()
    console.log(data);
    return (
        <div>
            <h1>User List</h1>
            <Link href="/">Back to Home</Link>
            <div style={{ marginTop: '20px' }}>
                {data.map((item) => (
                    <div key={item.id} style={{ marginBottom: '10px' }}>
                        <Link href={`/api/users/${item.id}`}>
                            Name: {item.name} (ID: {item.id})
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}