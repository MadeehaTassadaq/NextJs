import getUsers from "../../../../services/getuser";
export default async function Page(props){
     const users=await getUsers()
     const currentId=props.params.userid
        const userdata=users[currentId-1]
        console.log(userdata);
    return <div>
        <h2>User Detail Page</h2>
        <h3>id:{userdata.id}</h3>
        <h3>Name:{userdata.firstName}</h3>
        <h3>lastname:{userdata.lastName}</h3>
        <h3>title:{userdata.company.title}</h3>
        <h3>email:{userdata.email}</h3>
    </div>
}
export async function generateStaticParams(){
    const users=await getUsers()
    return users.map(user=>
    ({userid:user.id.toString()})
    )

}