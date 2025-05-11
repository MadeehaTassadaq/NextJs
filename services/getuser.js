export default async function getUsers() {
    const result = await fetch('https://dummyjson.com/users')
    const res=await result.json()
    return res.users
}